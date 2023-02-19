import { NativeMethods } from "react-native";

export type RefType<T> = T | undefined | null;

export function setRefIn<T>(index: number, array: T[]) {
  return (ref: T | null) => {
    if (ref) array[index] = ref;
  }
}

export function focusIn<T extends RefType<NativeMethods>>(index: number, array: T[]) {
  return () => {
    const component = array[index];

    if (component) component.focus();
  }
}

export class RefStorage<T> {
  private refs: RefType<T>[];

  constructor() {
    this.refs = [];
  }

  at(index: number) {
    return this.refs[index];
  }

  createSetRef(index: number) {
    return (ref: RefType<T>) => {
      this.refs[index] = ref;
    }
  }

  createHandler(index: number, callback: (ref: T) => void) {
    return () => {
      const ref = this.refs[index];

      if (ref) callback(ref);
    }
  }
}

export function createRefStorage<T>() {
  const refStorage = new RefStorage<T>();

  return refStorage;
}