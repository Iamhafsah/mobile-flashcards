import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Decks from './Decks'
import NewDeck from './NewDeck'


const purple = 'purple'

const TabNavigatorConfig = {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === "ios" ? purple : 'white',
    labelStyle: {
      fontSize: 16
    },
    activeTabStyle: {
      // backgroundColor: 'white',
    },
    style: {
      height: 65,
      backgroundColor: Platform.OS === "ios" ? 'white' : purple,
      paddingTop: 16
    }
  }
};

  const Tab = Platform.OS === 'ios'
  ? createBottomTabNavigator() 
  : createMaterialTopTabNavigator()
  
const Home = ()=> {
return(
    <Tab.Navigator {...TabNavigatorConfig}>
    <Tab.Screen name="Deck" component={Decks} />
    <Tab.Screen name="New Deck" component={NewDeck} />
    </Tab.Navigator>
)
}

export default Home

const styles = StyleSheet.create({})
