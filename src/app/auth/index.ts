import { FirebaseApp } from "firebase/app";
import { Auth, getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase/app";

new GoogleAuthProvider()

export interface SignInOptions {
  email: string;
  password: string;
}

export interface SignUpOptions {
  name: string;
  email: string;
  password: string;
}

export class UserAuthenticator {
  private app: FirebaseApp;
  private auth: Auth;

  constructor(app: FirebaseApp) {
    this.app = app;
  
    this.auth = getAuth(app);
  }

  async signInWithPassword(options: SignInOptions) {

  }

  async signUpWithPassword(options: SignUpOptions) {

  }

  signOut() {
    return this.auth.signOut();
  }
}

export const userAuthenticator = new UserAuthenticator(app);