import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { View, Text, ScrollView } from 'react-native';
import { StackParamList } from '../types';
import * as styles from '../styles/screens/Home';
import { text, title } from '../styles/base/text';
import ProcedureRegistryItem from '../components/ProcedureRegistryItem';
import NavigationButton from '../components/NavigationButton';
import CustomButton from '../components/CustomButton';
import ToggleButton from '../components/ToggleButton';

interface HomeProps extends NativeStackScreenProps<StackParamList, 'Home'> { }

export default function Home(props: HomeProps) {
  const elements = [];
  for (let i = 0; i < 10; i++) {
    elements.push(<ProcedureRegistryItem title={"Registro"} creation={Date.now()} key={i} />);
  }

  return (
    <View style={styles.body}>
      <Text style={title}>Registros</Text>
      <View style={styles.scrollOutView}>
        <ScrollView
          contentContainerStyle={styles.scrollView}>
          {elements}
        </ScrollView>
      </View>
      <View style={styles.bottomView}>
        <NavigationButton title='Pesquisar'/>
        <ToggleButton title='Remove'/>
        <NavigationButton title='Novo' />
      </View>
    </View>
  );
}