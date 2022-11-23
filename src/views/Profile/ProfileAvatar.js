import { View, StyleSheet } from 'react-native';
import { Avatar, Text, useTheme } from 'react-native-paper';

const ProfileAvatar = () => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Avatar.Text size={64} label="MF" />

      <View style={styles.innerContainer}>
        <Text style={styles.nameText}>Muhammad Faizal Fazri</Text>

        <View
          style={[
            styles.chipContainer,
            {
              backgroundColor: colors.primary,
            },
          ]}
        >
          <Text style={[styles.chipText, { color: colors.surface }]}>
            Anggota AIMEE
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileAvatar;

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center' },
  innerContainer: { marginLeft: 8, bottom: 2 },
  nameText: { fontSize: 18, fontWeight: 'bold' },
  chipContainer: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    marginTop: 2,
  },
  chipText: { fontSize: 12 },
});
