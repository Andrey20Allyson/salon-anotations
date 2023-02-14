import { StyleSheet } from "react-native";
import CustomButton from "./CustomButton";

export interface SubmitButtonProps {
  title: string;
  onSubmit: () => void;
}

export default function SubmitButton(props: SubmitButtonProps) {
  return (
    <CustomButton
      styles={styles}
      title={props.title}
      onPress={props.onSubmit}
    />
  )
}

export const styles = StyleSheet.create({
  body: {
    backgroundColor: '#44f',
  },
});