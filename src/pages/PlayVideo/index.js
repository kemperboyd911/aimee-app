import {
  setStatusBarBackgroundColor,
  setStatusBarStyle,
} from 'expo-status-bar';
import { useEffect } from 'react';
import { View } from 'react-native';
import { useTheme, Appbar } from 'react-native-paper';
import { WebView } from 'react-native-webview';

const PlayVideo = ({ route, navigation }) => {
  const data = route.params.data;
  const { colors } = useTheme();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setStatusBarBackgroundColor(colors.surface);
      setStatusBarStyle('dark');
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <>
      <Appbar.Header style={{ backgroundColor: colors.surface }}>
        <Appbar.BackAction onPress={() => {}} />
        <Appbar.Content title={data.title} />
      </Appbar.Header>

      <View
        style={{
          width: '100%',
          aspectRatio: 16 / 9,
        }}
      >
        <WebView
          source={{ uri: data.link }}
          allowsFullscreenVideo
          style={{
            width: '100%',
            aspectRatio: 16 / 9,
            backgroundColor: colors.disabled,
          }}
        />
      </View>
    </>
  );
};

export default PlayVideo;
