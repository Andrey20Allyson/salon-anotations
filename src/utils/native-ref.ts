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