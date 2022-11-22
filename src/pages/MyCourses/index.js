import { StyleSheet, Text, View } from 'react-native';

import SafeAreaView from '../../components/SafeAreaView';

const MyCourses = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>My Courses</Text>
      </View>
    </SafeAreaView>
  );
};

export default MyCourses;

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
