import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MdAnchor } from "react-icons/md";

import Login from "./login";
import Registro from './src/pages/register/registro';
import Verify from './src/pages/verify/verify';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" options={{headerShown: false}} component={Login} />
        <Stack.Screen name="Registro" options={{headerShown: false}} component={Registro} />
        <Stack.Screen name="Verificar" options={{headerShown: false}} component={Verify} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

