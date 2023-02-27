import * as baseText from '../base/text';
import { createStyle } from "../../utils/native-style";

export const body = createStyle({
  width: '90%',
    height: 40,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 2,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#fff1',
    borderRadius: 3,
    borderBottomWidth: 2,
    borderBottomColor: '#fffa',
});

export const title = createStyle({
  ...baseText.text,
    fontWeight: 'bold',
    fontSize: 18,
});

export const leftView = createStyle({
  flexDirection: 'row',
  flex: 6,
  overflow: 'hidden',
});

export const rightView = createStyle({
  flexDirection: 'row',
    flex: 3,
    alignItems: 'center',
    justifyContent: 'space-between'
});

export const text = createStyle({
  ...baseText.text,
});