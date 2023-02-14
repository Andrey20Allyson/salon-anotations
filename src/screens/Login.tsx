import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import InputWithTitle from "../components/InputWithTitle";
import RootView from "../components/RootView";
import { title } from "../styles/base/text";
import { container } from "../styles/base/view";
import { StackParamList } from "../types";
import Button from "../components/Button";

export interface LoginProps extends NativeStackScreenProps<StackParamList, 'Login'> { }

export function Login(props: LoginProps) {
  return (
    <RootView>
      <Text style={title} >Login</Text>
      <View style={container}>
        <InputWithTitle title="Email" />
        <InputWithTitle title="Senha" />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Button title="Fazer Login"/>
        <Button title="Criar conta"/>
      </View>
    </RootView>
  );
}

