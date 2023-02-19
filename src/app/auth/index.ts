import { FirebaseApp } from "firebase/app";
import {
  Auth,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword
} from "firebase/auth";
import { doc, DocumentReference, Firestore, getDoc, getFirestore, setDoc } from "firebase/firestore";
import { app } from "../firebase/app";

export interface SignInOptions {
  email: string;
  password: string;
}

export interface SignUpOptions {
  name: string;
  email: string;
  password: string;
}

export interface ValidateResult {
  valid: boolean,
  message: string,
}

export interface UserInfo extends SignUpOptions {
  accountCreationDate: number,
}

export class UserAuthenticator {
  private static emailRegex = /^.+@.+$/;
  private app: FirebaseApp;
  private auth: Auth;
  private database: Firestore;
  private loadedInfos: Map<string, UserInfo>;

  constructor(app: FirebaseApp) {
    this.app = app;

    this.auth = getAuth(this.app);
    this.database = getFirestore(this.app);
    this.loadedInfos = new Map();
  }

  async signInWithPassword(options: SignInOptions) {
    const credential = await signInWithEmailAndPassword(
      this.auth,
      options.email,
      options.password
    );

    const user = credential.user;

    return user;
  }

  async signUpWithPassword(options: SignUpOptions) {
    const validationResult = UserAuthenticator.validateSignUpOptions(options);

    if (!validationResult.valid) throw Error(validationResult.message);

    const credential = await createUserWithEmailAndPassword(
      this.auth,
      options.email,
      options.password
    );

    const { user } = credential;

    this.setUserData(user.uid, {
      ...options,
      accountCreationDate: Date.now()
    });

    return user;
  }

  signOut() {
    return this.auth.signOut();
  }

  async setUserData(userUID: string, options: UserInfo) {
    const docRef = doc(this.database, `users/${userUID}`);

    await setDoc(docRef, {
      name: options.name,
      email: options.email,
      password: options.password,
      accountCreationDate: Date.now(),
    });
  }

  getAuth() {
    return this.auth.currentUser;
  }

  async getUserData(userUID?: string) {
    const _userUID = userUID ?? this.auth.currentUser?.uid;

    if (!_userUID) return;

    const info = this.loadedInfos.get(_userUID);

    if (info) return info;

    console.log('sended request');

    const infoRef = doc(this.database, 'users', _userUID) as DocumentReference<UserInfo>;

    const resp = await getDoc(infoRef).catch(console.error);

    if (!resp) return;

    if (!resp.exists()) return;

    const newInfo = resp.data();

    this.loadedInfos.set(_userUID, newInfo);

    JSON.stringify(this.loadedInfos);

    return resp.data();
  }

  static validateSignUpOptions(options: SignUpOptions): ValidateResult {
    const { email, name, password } = options;

    if (name.length == 0) return {
      valid: false,
      message: 'invalid-name',
    };

    if (password.length < 8) return {
      valid: false,
      message: 'password-is-less-than-8-chars',
    };

    if (UserAuthenticator.isEmail(email)) return {
      valid: false,
      message: 'invalid-email',
    };

    return {
      valid: true,
      message: 'ok',
    };
  }

  static isEmail(email: string) {
    return this.emailRegex.test(email);
  }
}

export const userAuthenticator = new UserAuthenticator(app);