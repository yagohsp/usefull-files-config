import { TouchableHighlight, View } from 'react-native';
import tw from 'tailwind';

export default function Button({ children, style, ...props }) {
  return (
    <TouchableHighlight
      underlayColor={tw.color('primary-600')}
      style={tw`p-1 rounded-lg bg-primary-500`}
      {...props}
    >
      <View style={[tw`border-2 rounded-lg border-white p-2`, style]}>
        {children}
      </View>
    </TouchableHighlight>
  );
}
