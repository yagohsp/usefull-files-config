import tw from 'twrnc';

import { Text, View } from 'react-native';
import { Button } from 'src/components';

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#000'
      }}
    >
      <Text style={tw`text-black text-md`}>Hello World</Text>

      <Button
        onPress={() => {
          console.log('logout');
        }}
      ></Button>
    </View>
  );
}
