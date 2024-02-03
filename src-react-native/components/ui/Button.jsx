import { TouchableHighlight, View } from 'react-native';
import tw from 'tailwind';

export default function Button({ children, style, touchableStyle, ...props }) {
  return (
    <TouchableHighlight
      style={[tw`p-1 rounded-xl bg-primary-500`, touchableStyle]}
      underlayColor={tw.color('primary-600')}
      {...props}
    >
      <View style={[tw`h-10 px-2 border-2 border-white rounded-xl`, style]}>
        {children}
      </View>
    </TouchableHighlight>
  );
}
