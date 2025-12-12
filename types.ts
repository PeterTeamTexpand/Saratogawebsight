export interface NavItem {
  label: string;
  path: string;
}

export enum ImageSize {
  Size1K = '1K',
  Size2K = '2K',
  Size4K = '4K'
}

export enum AspectRatio {
  Ratio1_1 = '1:1',
  Ratio2_3 = '2:3',
  Ratio3_2 = '3:2',
  Ratio3_4 = '3:4',
  Ratio4_3 = '4:3',
  Ratio9_16 = '9:16',
  Ratio16_9 = '16:9',
  Ratio21_9 = '21:9'
}

export interface GeneratedImage {
  url: string;
  prompt: string;
}

// Global interface for Veo key selection
declare global {
  // Augment the AIStudio interface instead of redeclaring window.aistudio property
  // to avoid conflicts with existing type definitions.
  interface AIStudio {
    hasSelectedApiKey: () => Promise<boolean>;
    openSelectKey: () => Promise<void>;
  }
}
