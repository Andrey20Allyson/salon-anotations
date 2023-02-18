import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import InputWithTitle from "../components/InputWithTitle";
import NavigationButton from "../components/NavigationButton";
import RootView from "../components/RootView";
import SubmitButton from "../components/SubmitButton";
import { title } from "../styles/base/text";
import { container } from "../styles/base/view";
import { StackParamList } from "../types";

export interface LoginProps extends NativeStackScreenProps<StackParamList, 'Login'> { }

export default function Login(props: LoginProps) {
  return (
    <RootView>
      <Text style={title} >Login</Text>
      <View style={container}>
        <InputWithTitle title="Email" />
        <InputWithTitle title="Senha" />
        <SubmitButton title="Confirmar" />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <NavigationButton title="Esqueci a senha" />
        <NavigationButton title="Criar conta" location="Register" />
      </View>
    </RootView>
  );
}

