import React, { useState, useRef } from 'react';
import { Sparkles, Image as ImageIcon, Video, Wand2, Upload, MonitorPlay } from 'lucide-react';
import { AspectRatio, ImageSize } from '../types';
import * as GeminiService from '../services/geminiService';

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'generate' | 'edit' | 'video' | 'chat'>('generate');

  return (
    <div className="min-h-screen bg-black pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[#00AEEF] font-bold tracking-wide uppercase text-sm">Services & Solutions</h2>
          <h1 className="mt-2 text-4xl font-extrabold text-white sm:text-5xl">
            Next-Gen AI Capabilities
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
            Experience our Nano Banana and Veo powered suite of tools. 
            Real-time generation, editing, and video production.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <TabButton 
            active={activeTab === 'generate'} 
            onClick={() => setActiveTab('generate')} 
            icon={<ImageIcon size={20} />}
            label="Image Gen" 
          />
          <TabButton 
            active={activeTab === 'edit'} 
            onClick={() => setActiveTab('edit')} 
            icon={<Wand2 size={20} />}
            label="Image Edit" 
          />
          <TabButton 
            active={activeTab === 'video'} 
            onClick={() => setActiveTab('video')} 
            icon={<Video size={20} />}
            label="Video Studio" 
          />
          <TabButton 
            active={activeTab === 'chat'} 
            onClick={() => setActiveTab('chat')} 
            icon={<Sparkles size={20} />}
            label="Intelligence" 
          />
        </div>

        {/* Content Area */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-3xl p-6 md:p-10 shadow-2xl backdrop-blur-sm min-h-[500px]">
          {activeTab === 'generate' && <ImageGenerationTool />}
          {activeTab === 'edit' && <ImageEditorTool />}
          {activeTab === 'video' && <VideoStudioTool />}
          {activeTab === 'chat' && <ChatTool />}
        </div>
      </div>
    </div>
  );
};

const TabButton = ({ active, onClick, icon, label }: { active: boolean; onClick: () => void; icon: React.ReactNode; label: string }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
      active 
        ? 'bg-[#00AEEF] text-white shadow-[0_0_15px_rgba(0,174,239,0.4)]' 
        : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
    }`}
  >
    {icon}
    {label}
  </button>
);

/* --- Feature Components --- */

// 1. Image Generation Tool
const ImageGenerationTool: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [size, setSize] = useState<ImageSize>(ImageSize.Size1K);
  const [ratio, setRatio] = useState<AspectRatio>(AspectRatio.Ratio1_1);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt) return;
    setLoading(true);
    setError(null);
    try {
      const imgData = await GeminiService.generateImage(prompt, ratio, size);
      setResult(imgData);
    } catch (err: any) {
      setError(err.message || 'Generation failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
      <div className="space-y-6">
        <div>
           <label className="block text-sm font-medium text-gray-300 mb-2">Prompt</label>
           <textarea 
             className="w-full bg-black border border-gray-700 rounded-xl p-4 text-white focus:ring-2 focus:ring-[#00AEEF] outline-none transition"
             rows={4}
             placeholder="Describe the image you want to see..."
             value={prompt}
             onChange={(e) => setPrompt(e.target.value)}
           />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Aspect Ratio</label>
            <select 
              className="w-full bg-black border border-gray-700 rounded-lg p-3 text-white outline-none"
              value={ratio}
              onChange={(e) => setRatio(e.target.value as AspectRatio)}
            >
              {Object.values(AspectRatio).map((r) => <option key={r} value={r}>{r}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Resolution</label>
            <select 
              className="w-full bg-black border border-gray-700 rounded-lg p-3 text-white outline-none"
              value={size}
              onChange={(e) => setSize(e.target.value as ImageSize)}
            >
              {Object.values(ImageSize).map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
        </div>

        <button 
          onClick={handleGenerate}
          disabled={loading || !prompt}
          className="w-full bg-[#00AEEF] hover:bg-[#008ec2] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all shadow-lg flex justify-center items-center gap-2"
        >
          {loading ? <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" /> : <Sparkles size={20} />}
          {loading ? 'Generating...' : 'Generate with Nano Banana Pro'}
        </button>
        {error && <p className="text-red-400 text-sm">{error}</p>}
      </div>

      <div className="bg-black rounded-xl border border-gray-800 flex items-center justify-center min-h-[400px] overflow-hidden relative">
        {result ? (
          <img src={result} alt="Generated" className="w-full h-full object-contain" />
        ) : (
          <div className="text-center text-gray-600">
            <ImageIcon size={48} className="mx-auto mb-2 opacity-50" />
            <p>Preview area</p>
          </div>
        )}
      </div>
    </div>
  );
};

// 2. Image Editor Tool
const ImageEditorTool: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleEdit = async () => {
    if (!preview || !prompt) return;
    setLoading(true);
    try {
      const edited = await GeminiService.editImage(preview, prompt, selectedFile?.type);
      setResult(edited);
    } catch (err) {
      alert("Edit failed. See console.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
      <div className="space-y-6">
        <div 
          onClick={() => fileInputRef.current?.click()}
          className="border-2 border-dashed border-gray-700 rounded-xl p-8 text-center cursor-pointer hover:border-[#00AEEF] hover:bg-gray-800/30 transition group"
        >
           <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleFileChange} />
           <Upload className="mx-auto mb-2 text-gray-500 group-hover:text-[#00AEEF]" size={32} />
           <p className="text-gray-400">{selectedFile ? selectedFile.name : "Click to upload source image"}</p>
        </div>

        <div>
           <label className="block text-sm font-medium text-gray-300 mb-2">Edit Instruction</label>
           <input 
             type="text"
             className="w-full bg-black border border-gray-700 rounded-xl p-4 text-white focus:ring-2 focus:ring-[#00AEEF] outline-none"
             placeholder='e.g., "Add a retro filter" or "Remove the background"'
             value={prompt}
             onChange={(e) => setPrompt(e.target.value)}
           />
        </div>

        <button 
          onClick={handleEdit}
          disabled={loading || !preview || !prompt}
          className="w-full bg-[#00AEEF] hover:bg-[#008ec2] disabled:opacity-50 text-white font-bold py-4 rounded-xl transition-all shadow-lg flex justify-center items-center gap-2"
        >
          {loading ? 'Editing...' : 'Edit with Nano Banana'}
        </button>
      </div>

      <div className="grid grid-rows-2 gap-4 h-[500px]">
         <div className="bg-black rounded-xl border border-gray-800 relative overflow-hidden flex items-center justify-center">
            {preview && <img src={preview} className="max-h-full max-w-full object-contain" alt="Original" />}
            <span className="absolute top-2 left-2 bg-black/70 px-2 py-1 rounded text-xs">Original</span>
         </div>
         <div className="bg-black rounded-xl border border-gray-800 relative overflow-hidden flex items-center justify-center">
            {result ? (
               <img src={result} className="max-h-full max-w-full object-contain" alt="Edited" />
            ) : (
              <p className="text-gray-600">Edited result will appear here</p>
            )}
            <span className="absolute top-2 left-2 bg-[#00AEEF]/80 px-2 py-1 rounded text-xs">Result</span>
         </div>
      </div>
    </div>
  );
};

// 3. Video Studio Tool
const VideoStudioTool: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [base64Image, setBase64Image] = useState<string | null>(null);
  const [aspect, setAspect] = useState<'16:9' | '9:16'>('16:9');
  const [loading, setLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
       const f = e.target.files[0];
       setFile(f);
       const reader = new FileReader();
       reader.onloadend = () => setBase64Image(reader.result as string);
       reader.readAsDataURL(f);
    }
  };

  const generate = async () => {
    setLoading(true);
    setVideoUrl(null);
    try {
      const url = await GeminiService.generateVideo(prompt, base64Image, aspect);
      setVideoUrl(url);
    } catch (e: any) {
      alert("Video generation failed: " + e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
       <div className="space-y-6">
          <div className="bg-blue-900/20 border border-blue-800 p-4 rounded-lg">
            <p className="text-sm text-blue-200">
              Powered by <strong>Veo</strong>. Requires a paid GCP project key selection.
            </p>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Video Prompt</label>
            <textarea 
               value={prompt}
               onChange={(e) => setPrompt(e.target.value)}
               className="w-full bg-black border border-gray-700 rounded-xl p-4 text-white focus:ring-2 focus:ring-[#00AEEF] outline-none"
               rows={3}
               placeholder="A cinematic drone shot of a futuristic city..."
            />
          </div>

          <div>
             <label className="block text-sm font-medium text-gray-300 mb-2">Start Image (Optional)</label>
             <input type="file" onChange={handleFile} className="text-gray-400" accept="image/*" />
          </div>

          <div>
             <label className="block text-sm font-medium text-gray-300 mb-2">Aspect Ratio</label>
             <div className="flex gap-4">
                <button 
                  onClick={() => setAspect('16:9')}
                  className={`px-4 py-2 rounded-lg border ${aspect === '16:9' ? 'border-[#00AEEF] bg-[#00AEEF]/20' : 'border-gray-700'}`}
                >
                  Landscape (16:9)
                </button>
                <button 
                  onClick={() => setAspect('9:16')}
                  className={`px-4 py-2 rounded-lg border ${aspect === '9:16' ? 'border-[#00AEEF] bg-[#00AEEF]/20' : 'border-gray-700'}`}
                >
                  Portrait (9:16)
                </button>
             </div>
          </div>

          <button 
            onClick={generate}
            disabled={loading || !prompt}
            className="w-full bg-[#00AEEF] hover:bg-[#008ec2] disabled:opacity-50 text-white font-bold py-4 rounded-xl transition-all shadow-lg flex justify-center items-center gap-2"
          >
            {loading ? 'Creating Magic...' : 'Generate Video with Veo'}
          </button>
       </div>

       <div className="bg-black rounded-xl border border-gray-800 flex flex-col items-center justify-center p-4">
          {videoUrl ? (
            <video controls src={videoUrl} className="w-full h-full rounded-lg" autoPlay loop />
          ) : (
            <div className="text-center text-gray-600">
               <MonitorPlay size={48} className="mx-auto mb-2 opacity-50" />
               <p>Video output</p>
            </div>
          )}
          {loading && <p className="mt-4 text-[#00AEEF] animate-pulse">Veo is rendering frames...</p>}
       </div>
    </div>
  );
};

// 4. Chat Tool
const ChatTool: React.FC = () => {
  const [messages, setMessages] = useState<{role: string, text: string}[]>([
    {role: 'model', text: 'Hello! I am your Saratoga AI assistant. How can I help you analyze your data or optimize your software today?'}
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  const send = async () => {
    if (!input.trim()) return;
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, {role: 'user', text: userMsg}]);
    setLoading(true);

    try {
      // In a real chat, we'd pass history. For this simple demo, we just pass the last prompt.
      // Or construct a history string.
      const response = await GeminiService.askGemini(userMsg);
      setMessages(prev => [...prev, {role: 'model', text: response}]);
    } catch (e) {
      setMessages(prev => [...prev, {role: 'model', text: "Sorry, I encountered an error."}]);
    } finally {
      setLoading(false);
      setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
    }
  };

  return (
    <div className="flex flex-col h-[600px]">
       <div className="flex-1 overflow-y-auto space-y-4 p-4 scrollbar-thin scrollbar-thumb-gray-700">
          {messages.map((m, i) => (
             <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-2xl px-5 py-3 ${
                   m.role === 'user' 
                   ? 'bg-[#00AEEF] text-white rounded-br-none' 
                   : 'bg-gray-800 text-gray-200 rounded-bl-none'
                }`}>
                   {m.text}
                </div>
             </div>
          ))}
          <div ref={bottomRef} />
       </div>
       <div className="mt-4 flex gap-2">
          <input 
            className="flex-1 bg-black border border-gray-700 rounded-full px-6 py-3 text-white focus:outline-none focus:border-[#00AEEF]"
            placeholder="Ask anything..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && send()}
          />
          <button 
             onClick={send}
             disabled={loading}
             className="bg-white text-black rounded-full p-3 hover:bg-gray-200 transition disabled:opacity-50"
          >
             <Sparkles size={20} className={loading ? 'animate-spin' : ''}/>
          </button>
       </div>
    </div>
  );
};

export default Services;