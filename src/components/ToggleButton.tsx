import { useState } from 'react';
import { Pressable, StyleProp, Text, View, ViewStyle } from 'react-native';
import * as styles from '../styles/components/ToggleButton';

export interface ToggleButtonProps {
  onToggle?: (active: boolean) => void;
  title: string;
  toggleType?: any;
}

export default function ToggleButton(props: ToggleButtonProps) {
  const [active, setActive] = useState(false);

  const checkViewStyles: StyleProp<ViewStyle>[] = [styles.checkView];

  if (active) checkViewStyles.push(styles.active);

  function pressHandler() {
    const newValue = !active;

    setActive(newValue);
    props.onToggle?.(newValue);
  }

  return (
    <Pressable style={styles.body}
    android_ripple={{color: '#fff3'}}
    onPress={pressHandler}>
      <Text style={styles.title}>{props.title}</Text>
      <View style={checkViewStyles}>

      </View>
    </Pressable>
  );
}