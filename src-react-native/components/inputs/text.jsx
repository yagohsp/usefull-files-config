import React from 'react';
import { useController } from 'react-hook-form';
import { TextInput as RNTextInput, Text, View } from 'react-native';
import tw from 'tailwind';

const TextInput = React.forwardRef(function ForwardedTextInput(
  { name, control, ...props },
  ref
) {
  const {
    field: { onChange, ...field },
    fieldState: { error }
  } = useController({
    name,
    control,
    rules: { required: 'Campo necessário' }
  });

  return (
    <View>
      <RNTextInput
        style={tw`
          w-full h-12 px-2 text-lg border-2 rounded-lg
          text-neutral-800 bg-neutral-200
          ${error ? 'border-red-400' : 'border-neutral-400'}
        `}
        placeholderTextColor={tw.color('neutral-800')}
        onChangeText={onChange}
        {...field}
        {...props}
        ref={ref}
      />
      {error && (
        <Text style={tw`absolute text-xs text-red-400 bottom-1 right-2`}>
          {error.message}
        </Text>
      )}
    </View>
  );
});

export default TextInput;
