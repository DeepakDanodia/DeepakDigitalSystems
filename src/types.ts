/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ReelItem {
  id: string;
  title: string;
  description: string;
  category: string;
  videoUrl?: string;
  thumbnailUrl: string;
  views: string;
  duration: string;
  likes: string;
}

export interface PrototypeItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  url: string;
  speedScore: number;
  features: string[];
}

export interface PricingConfig {
  webTier: 'none' | 'starter' | 'growth';
  reelsPack: 'none' | 'reels4' | 'reels8';
  ytPack: 'none' | 'yt1' | 'yt3';
  includeSpeedBooster: boolean;
  includeBrandingPackage: boolean;
}

export interface AuditQuestion {
  id: string;
  question: string;
  options: {
    label: string;
    score: number;
    feedback: string;
  }[];
}

export interface AuditState {
  currentStep: number;
  answers: Record<string, number>; // questionId -> selectedOptionIndex
  businessName: string;
  whatsapp: string;
  websiteUrl: string;
  isSubmitted: boolean;
}
