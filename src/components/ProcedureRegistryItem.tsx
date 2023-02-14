import { Image, Pressable, PressableAndroidRippleConfig, StyleSheet, Text, View } from "react-native";
import { text } from "../styles/base/text";
import Icon from "./Icon";

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

export const styles = StyleSheet.create({
  body: {
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
  },
  title: {
    ...text,
    fontWeight: 'bold',
    fontSize: 18,
  },
  leftView: {
    flexDirection: 'row',
    flex: 6,
    overflow: 'hidden',
  },
  rightView: {
    flexDirection: 'row',
    flex: 3,
    justifyContent: 'space-between'
  },
  text: {
    ...text,
  },
}); 