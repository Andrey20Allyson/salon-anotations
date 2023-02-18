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