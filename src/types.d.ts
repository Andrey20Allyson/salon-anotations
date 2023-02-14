export { AppConfig, KeyTypes } from '../app.config';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppConfig } from '../app.config';

export type StackParamList = {
  'Home'?: void;
  'Login'?: void;
  'Register'?: void;
}

export type ScreenProps<N extends keyof StackParamList> = NativeStackScreenProps<StackParamList, N>;