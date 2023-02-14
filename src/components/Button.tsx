import { Pressable, PressableProps, Text } from 'react-native';
import { button, title } from '../styles/components/Button';

export interface ButtonProps extends PressableProps {
  title: string;
  children?: never;
}

export default function Button(props: ButtonProps) {
  return (
    <Pressable
      android_ripple={{ color: '#fff3' }}
      style={button} {...props}>
      <Text style={title}>{props.title}</Text>
    </Pressable>
  );
}