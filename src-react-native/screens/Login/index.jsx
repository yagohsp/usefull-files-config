import { Text, View } from 'react-native';
import { Button } from 'src/components';
import tw from 'tailwind';

import CheckIcon from 'public/icons/check.svg';

export default function Home() {
  return (
    <View>
      <Text>Hello World</Text>

      <Button
        style={tw`flex-row gap-2 items-center`}
        onPress={() => {
          console.log('logout');
        }}
      >
        <CheckIcon width={20} height={20} />
        <Text style={tw`text-white text-lg font-bold`}>Autorizar</Text>
      </Button>
    </View>
  );
}
