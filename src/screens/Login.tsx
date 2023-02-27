import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { userAuthenticator } from "../app/auth";
import InputWithTitle from "../components/InputWithTitle";
import NavigationButton from "../components/NavigationButton";
import RootView from "../components/RootView";
import SubmitButton from "../components/SubmitButton";
import { title } from "../styles/base/text";
import { container } from "../styles/base/view";
import { StackParamList } from "../types";
import { createRefStorage } from '../utils/native-ref';

export interface LoginProps extends NativeStackScreenProps<StackParamList, 'Login'> { }

export default function Login(props: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const refs = createRefStorage<TextInput>();

  const { navigation } = props;

  async function submitHandler() {
    try {
      await userAuthenticator.signInWithPassword({
        email,
        password,
      });

      navigation.navigate?.('Home');
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message);
      } else {
        console.error(`unknown error: ${err}`);
      }
    }
  }

  return (
    <RootView>
      <Text style={title} >Login</Text>
      <View style={container}>
        <InputWithTitle
          title="Email"
          onChangeText={text => setEmail(text)}
          onSubmit={() => refs.at(0)?.focus()} />
        <InputWithTitle
          title="Senha"
          inputRef={refs.createSetRef(0)}
          onSubmit={submitHandler}
          onChangeText={text => setPassword(text)} />
        <SubmitButton title="Confirmar" onSubmit={submitHandler} />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <NavigationButton title="Esqueci a senha" />
        <NavigationButton title="Criar conta" location="Register" />
      </View>
    </RootView>
  );
}

