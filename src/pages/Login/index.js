import { StyleSheet, View, Text, Button } from 'react-native';

import SafeAreaView from '../../components/SafeAreaView';

const Login = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.textContainer}>
        <Text>Login</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={() => navigation.navigate('Home')} />
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
