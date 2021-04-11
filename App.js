import { StatusBar } from 'expo-status-bar';
import {createStore} from 'redux'
import middleware from './middleware' 
import {Provider} from 'react-redux'
import reducer from './reducers'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Home from './components/Home'
// import Cards from './components/Cards'
import DeckInterface from './components/DeckInterface'
import AddCard from './components/AddCard'

const Stack = createStackNavigator();
const white = 'white'
const purple = 'purple'

const StackConfig = {
  Home:{
    name: "Home",
    component: Home,
    options: {headerShown: false}
  }, 
  Deck:{
    name: "Deck",
    component: DeckInterface,
    options: {
      headerTintColor: white,
      headerStyle:{
        backgroundColor: purple
      }
    }
  },
  AddCard:{
    name: "Add Card",
    component: AddCard,
    options: {
      headerTintColor: white,
      headerStyle:{
        backgroundColor: purple
      }
    }
  }
}
const AppStack = () => {
  return(
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen {...StackConfig['Home']}/>
      <Stack.Screen {...StackConfig['Deck']}/>
      <Stack.Screen {...StackConfig['AddCard']}/>
    </Stack.Navigator>
  )
}

export default function App() {
  const store = createStore(reducer)
  return (
      <Provider store={store}>
        <NavigationContainer>
          <StatusBar backgroundColor='purple'/>
          <AppStack/>
        </NavigationContainer>
      </Provider>
  );
}

const styles = StyleSheet.create({
});
