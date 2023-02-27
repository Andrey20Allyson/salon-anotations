import { createStyle } from "../../utils/native-style";

export const body = createStyle({
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#012',
  flex: 1,
});

export const scrollView = createStyle({
  alignItems: 'center',
});

export const scrollOutView = createStyle({
  height: '60%',
  width: '80%',
  backgroundColor: '#333',
  borderRadius: 10,
});

export const bottomView = createStyle({
  flexDirection: 'row',
  justifyContent: 'space-around',
  width: '70%'
});