import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Navigation from './src/navigation';

export default function App() {
  return (
    <View style={styles.root}>
      <StatusBar style='auto' />
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#222',
    flex: 1,
  }
});