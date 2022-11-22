import { StyleSheet, Text, View } from 'react-native';

import SafeAreaView from '../../components/SafeAreaView';

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  superContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
