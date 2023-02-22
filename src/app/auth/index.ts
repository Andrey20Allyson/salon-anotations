import { FirebaseApp } from "firebase/app";
import {
  Auth,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword
} from "firebase/auth";
import {
  doc,
  DocumentReference,
  Firestore,
  getDoc,
  getFirestore,
  setDoc
} from "firebase/firestore";
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

export enum Errors {
  INVALID_NAME = 0,
  INVALID_EMAIL = 1,
  SMALL_PASSWORD = 2,
  INCORRECT_CREDENTIALS = 3,
  EMAIL_IS_ALREADY_IN_USE = 4,
}

export enum ErrorLanguages {
  PT_BR = 0,
  ENG_US = 1,
}

export class UserAuthError extends Error {
  static language: ErrorLanguages = ErrorLanguages.PT_BR;
  
  constructor(code: Errors) {
    super();
  }
}

export class UserAuthenticator {
  static readonly PASSWORD_MIN_LENGTH = 6;
  private static readonly EMAIL_REGEX = /^.+@.+$/;

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
    try {
      await signInWithEmailAndPassword(
        this.auth,
        options.email,
        options.password
      );
    } catch (err) {
      throw Error();
    }
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

  getUser() {
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

    if (name.length == 0)
      return this.createInvalidation('invalid name');

    if (password.length < this.PASSWORD_MIN_LENGTH)
      return this.createInvalidation(`password is less than ${this.PASSWORD_MIN_LENGTH} chars`);

    if (!this.isEmail(email))
      return this.createInvalidation('invalid email');

    return this.createValidation();
  }

  private static createInvalidation(message: string): ValidateResult {
    return {
      message,
      valid: false,
    }
  }

  private static createValidation(): ValidateResult {
    return {
      message: 'ok',
      valid: true,
    }
  }

  private static isEmail(email: string) {
    return this.EMAIL_REGEX.test(email);
  }
}

export const userAuthenticator = new UserAuthenticator(app);