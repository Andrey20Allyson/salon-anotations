import { Image, Pressable, PressableAndroidRippleConfig, StyleSheet, Text, View } from "react-native";
import { text } from "../styles/base/text";
import Icon from "./Icon";
import * as styles from '../styles/components/ProcedureRegistryItem';

export interface ProcedureRegistryItemProps {
  title: string;
  creation: number;
}

export const rippleConfig: PressableAndroidRippleConfig = {
  color: '#fff4'
};

export default function ProcedureRegistryItem(props: ProcedureRegistryItemProps) {
  const title = props.title.length < 15 ? props.title : props.title.substring(0, 13).concat('...');

  return (
    <Pressable android_ripple={rippleConfig} style={styles.body}>
      <View style={styles.leftView}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.rightView}>
        <Text style={styles.text} >{new Date(props.creation).toLocaleDateString()}</Text>
        <Icon name="edit" size={20} />
      </View>
    </Pressable>
  )
}