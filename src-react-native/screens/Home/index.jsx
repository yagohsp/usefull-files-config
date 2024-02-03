import { SvgUri } from 'react-native-svg';
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
      <Text style={tw`text-md text-black`}>Hello World</Text>

      <Button
        onPress={() => {
          console.log('logout');
        }}
      >
        <SvgUri width="100%" height="100%" uri="/icons/check.svg" />
      </Button>
    </View>
  );
}
