import { Text, View } from 'react-native';
import InputWithTitle from "../components/InputWithTitle";
import NavigationButton from "../components/NavigationButton";
import RootView from "../components/RootView";
import SubmitButton from "../components/SubmitButton";
import { title } from "../styles/base/text";
import { container } from "../styles/base/view";
import { ScreenProps } from "../types";

export interface RegisterProps extends ScreenProps<'Register'> { }

export default function Register(props: RegisterProps) {
  return (
    <RootView>
      <Text style={title} >Cadastrar-se</Text>
      <View style={container}>
        <InputWithTitle title="Nome" />
        <InputWithTitle title="Email" />
        <InputWithTitle title="Senha" />
        <SubmitButton title="Confirmar" />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <NavigationButton title="Fazer login" location="Login" />
      </View>
    </RootView>
  )
}