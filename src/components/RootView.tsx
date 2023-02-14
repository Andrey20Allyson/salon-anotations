import { View, ViewProps } from "react-native";
import { screen } from '../styles/base/view';

export interface RootViewProps extends ViewProps { }

export default function RootView(props: RootViewProps) {
  return (
    <View style={screen} {...props}/>
  )
}