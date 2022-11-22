import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Home from './src/pages/Home';
import Login from './src/pages/Login';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

const Bootstrap = (WrappedApp) => {
  return () => {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <WrappedApp />
          <StatusBar backgroundColor="pink" />
        </NavigationContainer>
      </SafeAreaProvider>
    );
  };
};

const App = () => {
  return <StackNavigation />;
};

export default Bootstrap(App);
