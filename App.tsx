import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Button } from 'react-native';
import LinkingConfiguration from './src/navigation/LinkingConfiguration';
import HomeScreen from './src/screens/HomeScreen';
import NewsScreen from './src/screens/NewsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="News" component={NewsScreen} options={({ navigation }) => ({
          headerRight: () => (
            <Button title="Home" onPress={() => navigation.navigate('Home')} />
          )
        })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}