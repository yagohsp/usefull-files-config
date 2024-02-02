import { createStackNavigator } from '@react-navigation/stack';
import { useState } from 'react';
import { Text } from 'react-native';

import { useUserContext } from 'src/context';
import privateRoutes from './private';
import publicRoutes from './public';

const Stack = createStackNavigator();

const screenOptions = {
  headerStyle: {
    backgroundColor: '#33a88d'
  },
  headerTitleStyle: {
    color: '#fff'
  },
  headerTintColor: '#fff',
  headerBackTitle: 'Voltar',
  headerMode: 'float',
  cardStyle: {
    backgroundColor: '#fff'
  }
};

export default function Routes() {
  const { user } = useUserContext();

  const [loading, setLoading] = useState(true);

  if (loading) {
    setLoading(false);
    return <Text>...loading</Text>;
  }

  return (
    <Stack.Navigator screenOptions={screenOptions} initialRouteName="Home">
      {(user ? privateRoutes : publicRoutes).map(route => (
        <Stack.Screen key={route.name} {...route} />
      ))}
    </Stack.Navigator>
  );
}
