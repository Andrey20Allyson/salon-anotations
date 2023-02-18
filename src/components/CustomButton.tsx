import { Pressable, PressableProps, StyleProp, StyleSheet, Text, TextStyle, ViewStyle } from 'react-native';
import { insertObjectInArrays, insertObjectsInArrays } from '../utils/arrays';
import { text } from '../styles/base/text';

export interface CustomButtonStylesProp {
  body?: StyleProp<ViewStyle>;
  text?: StyleProp<TextStyle>;
}

export interface CustomButtonProps extends PressableProps {
  styles?: CustomButtonStylesProp | CustomButtonStylesProp[];
  title: string;
}

export default function CustomButton(props: CustomButtonProps) {
  const bodyStyles: StyleProp<ViewStyle>[] = [styles.body];
  const textStyles: StyleProp<TextStyle>[] = [styles.text];

  const stylesArrays = {
    body: bodyStyles,
    text: textStyles,
  };

  if (props.styles instanceof Array) insertObjectsInArrays(props.styles, stylesArrays);
  else if (props.styles) insertObjectInArrays(props.styles, stylesArrays);

  return (
    <Pressable android_ripple={{ color: '#fff3' }} style={bodyStyles} {...props}>
      <Text style={textStyles}>{props.title}</Text>
    </Pressable>
  )
}

export const styles = StyleSheet.create({
  body: {
    marginTop: 20,
    backgroundColor: '#888',
    padding: 6,
    borderRadius: 6,
  },
  text: {
    ...text,
  },
}); 