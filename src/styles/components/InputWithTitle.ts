import { Dimensions } from 'react-native';
import { createStyle } from "../../utils/native-style";

export const BACKGROUND_COLOR = '#222';
export const CONTAINER_BACKGROUND_COLOR = '#333';
export const CONTAINER_BORDER_RADIUS = 10;
export const CONTAINER_BOX_SHADOW = '0 0 10px rgba(0, 0, 0, 0.3)';
export const CONTAINER_PADDING = 20;
export const CONTAINER_MARGIN = 50;
export const CONTAINER_MAX_WIDTH = 400;
export const HEADING_COLOR = '#fff';
export const HEADING_TEXT_ALIGN = 'center';
export const FORM_MARGIN_TOP = 20;
export const INPUT_BACKGROUND_COLOR = '#224';
export const INPUT_BORDER_RADIUS = 5;
export const INPUT_COLOR = '#fff';
export const INPUT_DISPLAY_BLOCK = 'block';
export const INPUT_FONT_SIZE = 16;
export const INPUT_MARGIN_BOTTOM = 10;
export const INPUT_PADDING = 10;
export const INPUT_WIDTH = '100%';
export const SUBMIT_BACKGROUND_COLOR = '#335';
export const SUBMIT_BORDER_RADIUS = 5;
export const SUBMIT_COLOR = '#fff';
export const SUBMIT_CURSOR = 'pointer';
export const SUBMIT_FONT_SIZE = 16;
export const SUBMIT_MARGIN_TOP = 20;
export const SUBMIT_PADDING = 10;
export const SUBMIT_WIDTH = '100%';
export const SUBMIT_HOVER_BACKGROUND_COLOR = '#447';

const { fontScale, height, scale, width } = Dimensions.get('screen');

export const root = createStyle({
  marginTop: 20,
  marginBottom: 5
});

export const title = createStyle({
  color: '#fff',
});

export const body = createStyle({
  backgroundColor: '#224',
  borderRadius: 5,
  overflow: 'hidden',
});

export const input = createStyle({
  color: '#fff',
  fontSize: 20,
  width: width * .6,
  height: 35,
  paddingLeft: 5,
});

export const error = createStyle({
  ...title,
  color: '#f00',
  textAlign: 'right',
  marginRight: 15,
  fontWeight: 'bold',
});

export const bottomBar = createStyle({
  height: 2,
  width: '100%',
  backgroundColor: '#fff9',
});