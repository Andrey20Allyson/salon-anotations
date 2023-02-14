import { AppJSONConfig } from 'expo/config';
import type { FirebaseOptions } from 'firebase/app';
import { readFileSync } from 'fs';
import path from 'path';

const KEYS_DIR = path.join(process.cwd(), 'keys');

export interface KeyTypes {
  firebase: FirebaseOptions;
} 

export function getKey<K extends keyof KeyTypes>(name: K): KeyTypes[K] {
  const _path = path.join(KEYS_DIR, name.concat('.json'));

  const data = readFileSync(_path, { encoding: 'utf-8' });

  const key = JSON.parse(data);

  return key;
}

const createConfig = <T extends AppJSONConfig>(config: T) => config;

const config = createConfig({
  expo: {
    name: 'salon-anotations',
    slug: 'salon-anotations',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'automatic',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff'
    },
    updates: {
      fallbackToCacheTimeout: 0
    },
    assetBundlePatterns: [
      '**/*'
    ],
    extra: {
      keys: {
        firebase: getKey('firebase'),
      },
    },
    ios: {
      supportsTablet: true
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#FFFFFF'
      }
    },
    web: {
      favicon: './assets/favicon.png'
    },
  }
});

export type AppConfig = typeof config;

export default config;