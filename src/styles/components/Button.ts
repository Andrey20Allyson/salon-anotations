import { createStyle } from "../../utils/native-style";
import { text } from "../base/text";

export const button = createStyle({
  backgroundColor: '#225',
  padding: 7,
  borderRadius: 5,
  margin: 20,
});

export const title = createStyle({
  ...text,
  fontSize: 17,
  fontWeight: 'bold',
});