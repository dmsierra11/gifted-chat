import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {LoginScreen, RegisterScreen} from './auth';
import {ChatScreen, ContactListScreen} from './chat';
import {NativeBaseProvider, extendTheme} from 'native-base';

const Stack = createStackNavigator();

const newColorTheme = {
  brand: {
    900: '#8287af',
    800: '#7c83db',
    700: '#b3bef6',
  },
};

const theme = extendTheme({colors: newColorTheme});

const App = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="ContactList" component={ContactListScreen} />
          <Stack.Screen name="Chat" component={ChatScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
