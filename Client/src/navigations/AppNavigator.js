import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CustomBottomNavBar from '../components/shared/CustomBottomNavbar';
import HomeScreen from '../screens/mainScreens/HomeScreen';
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={CustomBottomNavBar}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;