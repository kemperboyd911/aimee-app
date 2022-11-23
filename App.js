import {
  DefaultTheme as NavigationTheme,
  NavigationContainer,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import {
  DefaultTheme as PaperTheme,
  Provider as PaperContainer,
} from 'react-native-paper';
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
    const theme = {
      ...NavigationTheme,
      ...PaperTheme,
      colors: {
        ...NavigationTheme.colors,
        ...PaperTheme.colors,
      },
    };

    return (
      <SafeAreaProvider>
        <PaperContainer theme={theme}>
          <NavigationContainer theme={theme}>
            <WrappedApp />
            <StatusBar translucent />
          </NavigationContainer>
        </PaperContainer>
      </SafeAreaProvider>
    );
  };
};

const App = () => {
  return <StackNavigation />;
};

export default Bootstrap(App);
