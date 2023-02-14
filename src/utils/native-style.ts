import { ImageStyle, TextStyle, ViewStyle } from "react-native";

export type StyleType = ViewStyle | TextStyle | ImageStyle;

export function createStyle<T extends StyleType>(style: T): T {
  return style;
}