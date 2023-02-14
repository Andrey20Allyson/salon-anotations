import { initializeApp } from 'firebase/app';
import { APIKeys } from '../config';

export const app = initializeApp(APIKeys.firebase);