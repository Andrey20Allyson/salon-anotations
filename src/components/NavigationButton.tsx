import { useNavigation } from "@react-navigation/native";
import { GestureResponderEvent, StyleProp, StyleSheet, ViewStyle } from "react-native";
import { pushIfExist } from "../app/logic/utils";
import { ScreenProps, StackParamList } from "../types";
import CustomButton, { CustomButtonStylesProp } from "./CustomButton";

export interface NavigationButtonProps {
  title: string;
  location?: keyof StackParamList;
  styles?: CustomButtonStylesProp;
  canNavigate?: (location: keyof StackParamList) => boolean;
  onPress?: (ev: GestureResponderEvent) => boolean;
  onNavigate?: (location: keyof StackParamList) => void;
}

export type BaseScreenNavigation = ScreenProps<keyof StackParamList>['navigation'];

export default function NavigationButton(props: NavigationButtonProps) {
  const navigation = useNavigation<BaseScreenNavigation>();
  const buttonStyles: CustomButtonStylesProp[] = [styles];

  function canNavigate(location: keyof StackParamList) {
    return props.canNavigate?.(location) ?? true;
  }

  function onPress(ev: GestureResponderEvent) {
    const { location } = props;

    props.onPress?.(ev);

    if (location && canNavigate(location)) navigate(location);
  }

  function navigate(location: keyof StackParamList) {
    navigation.navigate(location);
    props.onNavigate?.(location);
  }

  pushIfExist(buttonStyles, props.styles);

  return (
    <CustomButton onPress={onPress} styles={buttonStyles} title={props.title}/>
  )
}

export const styles = StyleSheet.create({
  body: {
    backgroundColor: '#224',
    padding: 7,
    borderRadius: 5,
    marginLeft: 5,
    marginRight: 5,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  }
});