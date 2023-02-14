import Constants from 'expo-constants';
import { AppConfig } from '../../types';

export const config = Constants.expoConfig as AppConfig['expo'];

export const APIKeys = config.extra.keys;