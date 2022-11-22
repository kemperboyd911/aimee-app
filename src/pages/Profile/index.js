import { StyleSheet, Text, View } from 'react-native';

import SafeAreaView from '../../components/SafeAreaView';

const Profile = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Profile</Text>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

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
