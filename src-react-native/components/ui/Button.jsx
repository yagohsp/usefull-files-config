import { Text, TouchableHighlight } from 'react-native';

export default function Button({ children }) {
  return (
    <TouchableHighlight>
      <Text>{children}</Text>
    </TouchableHighlight>
  );
}
