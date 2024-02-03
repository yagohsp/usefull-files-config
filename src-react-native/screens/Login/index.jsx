import { useForm } from 'react-hook-form';
import { Image, Text, View } from 'react-native';
import tw from 'tailwind';

import { Button, KeyboardWrapper, TextInput } from 'src/components';
import { useLoader } from 'src/context';

import CheckIcon from 'public/icons/check.svg';
import newLogo from 'public/new-logo.png';

export default function Home() {
  const { control, handleSubmit } = useForm();
  const loader = useLoader();

  const onSubmit = data => {
    loader.show();

    console.log(data);

    setTimeout(() => {
      loader.hide();
    }, 3000);
  };

  return (
    <KeyboardWrapper style={tw`flex-1`}>
      <View style={tw`items-center justify-center flex-1 gap-y-8`}>
        <Image
          style={[
            tw`w-1/2 h-auto`,
            {
              aspectRatio: 250 / 208
            }
          ]}
          source={newLogo}
        />

        <View style={tw`w-full p-8 gap-y-5`}>
          <TextInput name="username" placeholder="Usuário" control={control} />
          <TextInput name="password" placeholder="Senha" control={control} />

          <Button
            style={tw`flex-row items-center justify-center gap-2`}
            touchableStyle={tw`w-full`}
            onPress={handleSubmit(onSubmit)}
          >
            <CheckIcon width={20} height={20} />
            <Text style={tw`text-xl font-bold text-white`}>Entrar</Text>
          </Button>
        </View>
      </View>
    </KeyboardWrapper>
  );
}
