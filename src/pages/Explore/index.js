import { StyleSheet, Text, View } from 'react-native';

import SafeAreaView from '../../components/SafeAreaView';

const Explore = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Explore</Text>
      </View>
    </SafeAreaView>
  );
};

export default Explore;

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
