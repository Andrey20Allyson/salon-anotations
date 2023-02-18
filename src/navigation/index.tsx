import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Register from '../screens/Register';
import { StackParamList } from '../types';

export default function Navigation() {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  )
}

export const Stack = createNativeStackNavigator<StackParamList>();

export const options: NativeStackNavigationOptions = {
  headerStyle: {
    backgroundColor: '#222',
  },
  navigationBarColor: '#222',
  headerTintColor: '#fff'
};

export function Navigator() {
  return (
    <Stack.Navigator screenOptions={options} initialRouteName='Login'>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Register' component={Register} />
    </Stack.Navigator>
  )
}