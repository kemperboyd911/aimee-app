import {
  setStatusBarBackgroundColor,
  setStatusBarStyle,
} from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, useTheme } from 'react-native-paper';

import SafeAreaView from '../../components/SafeAreaView';

const Login = ({ navigation }) => {
  const { colors } = useTheme();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setStatusBarBackgroundColor(colors.surface);
      setStatusBarStyle('dark');
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <SafeAreaView>
      <View style={styles.textContainer}>
        <Text>Login</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button mode="contained" onPress={() => navigation.navigate('Home')}>
          Login
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  superContainer: {
    flex: 1,
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
