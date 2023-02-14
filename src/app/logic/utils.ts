import { NativeMethods } from "react-native";

export function twoDigits(value: number) {
  return value.toString().padStart(2, '0');
}

export function fourDigits(value: number) {
  return value.toString().padStart(4, '0');
}

export function pushIfExist<T>(array: T[], value: T | undefined): number | undefined {
  if (value) return array.push(value);
}

export type ObjectOfArrays<T> = {
  [K in keyof T]: Array<T[K]>;
}

export function insertObjectInArrays<T extends object>(object: T, arrays: ObjectOfArrays<T>) {
  for (let k in object) pushIfExist(arrays[k], object[k]);
}

export function insertObjectsInArrays<T extends object>(objects: T[], arrays: ObjectOfArrays<T>) {
  for (let object of objects) insertObjectInArrays(object, arrays);
}

export interface JoinDateOptions {
  day: string;
  month: string;
  year: string;
  separator?: string;
}

export function joinDate(options: JoinDateOptions) {
  const { day, month, year, separator } = options;

  return [day, month, year].join(separator ?? '/');
}

export function numberToLocaleDateString(value: number) {
  const date = new Date(value);

  const day = twoDigits(date.getDate());
  const month = twoDigits(date.getMonth());
  const year = fourDigits(date.getFullYear());

  return joinDate({ day, month, year });
}

export function createDateInfo(date?: number) {
  return date ? `Conta criada em ${numberToLocaleDateString(date)}` : 'Data de criação não informada';
}

export function randomInt(from: number, to: number) {
  const rand = Math.random();

  const float = rand * (to - from) + from;

  const int = Math.round(float > to - .5 ? from : float + 1);

  return int;
}

export function randomString(len: number = randomInt(1, 20)) {
  let string = '';

  for (let i = 0; i < len; i++) string += randomInt(0, 36).toString(36);

  return string;
}

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