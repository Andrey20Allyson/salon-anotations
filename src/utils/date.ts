export function twoDigits(value: number) {
  return value.toString().padStart(2, '0');
}

export function fourDigits(value: number) {
  return value.toString().padStart(4, '0');
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