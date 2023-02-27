import { createStyle } from "../../utils/native-style";
import * as base from "../base/text";
import * as button from './CustomButton';

export const title = createStyle({
  ...base.text,
  fontWeight: 'bold',
});

export const body = createStyle({
  ...button.body,
  backgroundColor: '#555',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
});

export const checkView = createStyle({
  backgroundColor: '#555',
  height: 25,
  width: 25,
  marginLeft: 5,
  borderRadius: 12.5,
  padding: 0,
  justifyContent: 'center',
  alignItems: 'center',
  borderColor: '#aaa',
  borderWidth: 2,
  borderStyle: 'solid',
});

export const active = createStyle({
  backgroundColor: '#ddd',
});