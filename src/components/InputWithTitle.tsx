import { LegacyRef } from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";
import { body, bottomBar, input, root, title } from "../styles/components/InputWithTitle";

export interface InputWithTitleProps extends TextInputProps {
  title: string;
  onSubmit?: () => void;
  children?: never;
  inputRef?: LegacyRef<TextInput>;
}

export default function InputWithTitle(props: InputWithTitleProps) {
  return (
    <View style={root}>
      <Text style={title}>
        {props.title}
      </Text>
      <View style={body}>
        <TextInput style={input} onSubmitEditing={e => props.onSubmit?.()} ref={props.inputRef} {...props} />
        <View style={bottomBar}></View>
      </View>
    </View>
  )
}