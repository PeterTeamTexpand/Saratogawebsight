
import { GoogleGenAI, Type } from "@google/genai";
import { AspectRatio, ImageSize } from '../types';

// Helper to get client - always creates new instance to capture fresh keys if needed
const getAiClient = () => {
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

// 1. General Text/Reasoning (Gemini 3 Flash)
export const askGemini = async (prompt: string): Promise<string> => {
  const ai = getAiClient();
  try {
    // Using gemini-3-flash-preview for basic text tasks as per guidelines
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });
    return response.text || "No response generated.";
  } catch (error) {
    console.error("Gemini Text Error:", error);
    throw error;
  }
};

// 2. Image Generation (Gemini 3 Pro Image Preview - Nano Banana Pro)
export const generateImage = async (
  prompt: string, 
  aspectRatio: AspectRatio, 
  size: ImageSize
): Promise<string> => {
  // Check key selection for premium models if required, though typically Veo enforces it strictly.
  // We will enforce it here for consistency if using the advanced model suite.
  if (window.aistudio) {
    const hasKey = await window.aistudio.hasSelectedApiKey();
    if (!hasKey) {
       await window.aistudio.openSelectKey();
    }
  }

  const ai = getAiClient();
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-image-preview',
      contents: {
        parts: [{ text: prompt }],
      },
      config: {
        imageConfig: {
          aspectRatio: aspectRatio,
          imageSize: size,
        },
      },
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    throw new Error("No image data returned");
  } catch (error) {
    console.error("Image Gen Error:", error);
    throw error;
  }
};

// 3. Image Editing (Gemini 2.5 Flash Image - Nano Banana)
export const editImage = async (
  base64Image: string, 
  prompt: string, 
  mimeType: string = 'image/png'
): Promise<string> => {
  const ai = getAiClient();
  try {
    // Strip header if present
    const cleanBase64 = base64Image.split(',')[1] || base64Image;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            inlineData: {
              data: cleanBase64,
              mimeType: mimeType,
            },
          },
          { text: prompt },
        ],
      },
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
     // Fallback if model returns text description instead of image
     if (response.text) {
        throw new Error(`Model returned text instead of image: ${response.text}`);
     }
    throw new Error("No image data returned");
  } catch (error) {
    console.error("Image Edit Error:", error);
    throw error;
  }
};

// 4. Video Generation (Veo)
export const generateVideo = async (
  prompt: string, 
  base64Image: string | null = null,
  aspectRatio: '16:9' | '9:16' = '16:9'
): Promise<string> => {
  // Check for API Key selection (Mandatory for Veo)
  if (window.aistudio) {
     const hasKey = await window.aistudio.hasSelectedApiKey();
     if (!hasKey) {
        await window.aistudio.openSelectKey();
     }
  }

  const ai = getAiClient();
  try {
    let operation;
    
    const config = {
        numberOfVideos: 1,
        resolution: '720p', // Preview model limitation usually
        aspectRatio: aspectRatio
    };

    if (base64Image) {
        // Image-to-Video
        const cleanBase64 = base64Image.split(',')[1] || base64Image;
        operation = await ai.models.generateVideos({
            model: 'veo-3.1-fast-generate-preview',
            prompt: prompt,
            image: {
                imageBytes: cleanBase64,
                mimeType: 'image/png' // Assuming PNG for upload
            },
            config: config
        });
    } else {
        // Text-to-Video
        operation = await ai.models.generateVideos({
            model: 'veo-3.1-fast-generate-preview',
            prompt: prompt,
            config: config
        });
    }

    // Poll for completion
    while (!operation.done) {
      // Poll every 10 seconds as recommended in Veo guidelines
      await new Promise(resolve => setTimeout(resolve, 10000));
      operation = await ai.operations.getVideosOperation({ operation: operation });
    }

    const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
    if (!downloadLink) throw new Error("Video generation failed to return URI");

    // Fetch the actual video bytes using the API key
    const videoResponse = await fetch(`${downloadLink}&key=${process.env.API_KEY}`);
    if (!videoResponse.ok) throw new Error("Failed to download generated video");
    
    const videoBlob = await videoResponse.blob();
    return URL.createObjectURL(videoBlob);

  } catch (error) {
    console.error("Veo Error:", error);
    throw error;
  }
};
