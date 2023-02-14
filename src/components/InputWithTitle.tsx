import { Text, TextInput, View } from "react-native";
import { body, bottomBar, input, root, title } from "../styles/components/InputWithTitle";

export interface InputWithTitleProps {
  title: string;
  onSubmit?: () => void;
  children?: never;
}

export default function InputWithTitle(props: InputWithTitleProps) {
  return (
    <View style={root}>
      <Text style={title}>
        {props.title}
      </Text>
      <View style={body}>
        <TextInput style={input} />
        <View style={bottomBar}></View>
      </View>
    </View>
  )
}