import { Text, View } from 'react-native';
import { Button } from 'src/components';

export default function Home() {
  return (
    <View flex={1}>
      <Text>Hello World</Text>

      <Button
        onPress={() => {
          console.log('logout');
        }}
      >
        Sair
      </Button>
    </View>
  );
}
