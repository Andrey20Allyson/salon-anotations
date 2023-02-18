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