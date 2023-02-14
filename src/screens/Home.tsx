import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { View, Text } from 'react-native';
import { StackParamList } from '../types';
import { body } from '../styles/screens/Home';
import { text } from '../styles/base/text';

interface HomeProps extends NativeStackScreenProps<StackParamList, 'Home'> {}

export default function Home(props: HomeProps) {
  return (
    <View style={body}>
      <Text style={text}>Olá essa é a tela 'Home'</Text>
    </View>
  );
}