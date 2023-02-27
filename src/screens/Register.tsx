import { useState } from 'react';
import { Text, TextInput, View, ActivityIndicator } from 'react-native';
import InputWithTitle from "../components/InputWithTitle";
import NavigationButton from "../components/NavigationButton";
import RootView from "../components/RootView";
import SubmitButton from "../components/SubmitButton";
import { title } from "../styles/base/text";
import { container } from "../styles/base/view";
import { ScreenProps } from "../types";
import { userAuthenticator, SignUpOptions } from '../app/auth'
import { createRefStorage } from '../utils/native-ref';

export interface RegisterProps extends ScreenProps<'Register'> { }

export default function Register(props: RegisterProps) {
  const [options, setOptions] = useState<SignUpOptions>({
    email: '',
    name: '',
    password: '',
  });

  const [erros, setErros] = useState<SignUpOptions>({
    email: '',
    name: '',
    password: '',
  }); 

  const { navigation } = props;

  const refs = createRefStorage<TextInput>();

  async function submit() {
    try {
      await userAuthenticator.signUpWithPassword(options);

      navigation.navigate('Home');
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message);
      } else {
        console.error('unknown');
      }
    }
  }

  return (
    <RootView>
      <Text style={title} >Cadastrar-se</Text>
      <View style={container}>
        <InputWithTitle
          title="Nome"
          onChangeText={text => setOptions({ ...options, name: text })}
          onSubmit={() => refs.at(0)?.focus()} />
        <InputWithTitle
          title="Email"
          onChangeText={text => setOptions({ ...options, email: text })}
          inputRef={refs.createSetRef(0)}
          onSubmit={() => refs.at(1)?.focus()} />
        <InputWithTitle
          title="Senha"
          onChangeText={text => setOptions({ ...options, password: text })}
          inputRef={refs.createSetRef(1)}
          onSubmit={submit} />
        <SubmitButton title="Confirmar" onSubmit={submit} />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <NavigationButton title="Fazer login" location="Login" />
      </View>
    </RootView>
  )
}