import { NativeStackScreenProps } from "@react-navigation/native-stack"
import RootView from "../components/RootView"
import { ScreenProps, StackParamList } from "../types"
import { Text, View } from 'react-native';
import { title } from "../styles/base/text";
import { container } from "../styles/base/view";
import InputWithTitle from "../components/InputWithTitle";
import Button from "../components/Button";

export interface RegisterProps extends ScreenProps<'Register'> { }

export default function Register(props: RegisterProps) {
  return (
    <RootView>
      <Text style={title} >Login</Text>
      <View style={container}>
        <InputWithTitle title="Nome" />
        <InputWithTitle title="Email" />
        <InputWithTitle title="Senha" />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Button title="Fazer Login" />
        <Button title="Criar conta" />
      </View>
    </RootView>
  )
}