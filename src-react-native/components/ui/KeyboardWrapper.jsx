import { Keyboard, TouchableWithoutFeedback } from 'react-native';

export default function KeyboardWrapper({ children, ...props }) {
  return (
    <TouchableWithoutFeedback {...props} onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );
}
