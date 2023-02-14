import { createStyle } from "../../utils/native-style";

export const text = createStyle({
  color: '#fff',
  fontSize: 20,
});

export const title = createStyle({
  ...text,
  fontSize: 30,
  marginBottom: 20,
});

export const tinyText = createStyle({
  ...text,
  fontSize: 14,
});