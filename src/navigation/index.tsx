import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '../@types/types';
import AppNavigator from './NavBar';
import LinkingConfiguration from './LinkingConfiguration';


const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
    console.log('root');
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="AppNavigator" component={AppNavigator} />
        </Stack.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer
            linking={LinkingConfiguration}
        >
            <RootNavigator />
        </NavigationContainer>
    );
}