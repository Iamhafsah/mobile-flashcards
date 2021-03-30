import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';
import Home from './components/Home'
import Cards from './components/Cards'


const Stack = createStackNavigator();


const AppStack = ()=> {
  return(
    <Stack.Navigator initialRouteName="Home">

    <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
    <Stack.Screen name="Cards" component={Cards} options={{headerTintColor: 'white', headerStyle:{backgroundColor: 'purple'}}} />

  </Stack.Navigator>
  )
}

export default function App() {
  return (
   <NavigationContainer>
     <StatusBar backgroundColor='purple'/>
      <AppStack/>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});
