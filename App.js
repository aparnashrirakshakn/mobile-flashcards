import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { FontAwesome, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'

import { purple, white } from './utils/colors'

import reducer from './reducers'

import DeckList from './components/DeckList'
import AddDeck from './components/AddDeck'
import DeckView from './components/DeckView'
import AddCard from './components/AddCard'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Decks') {
            iconName = focused
              ? 'cards'
              : 'cards-outline';
          } else if (route.name === 'Add Deck') {
            iconName = focused ? 'plus-box' : 'plus-outline';
          }

          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Decks" component={DeckList} />
      <Tab.Screen name="Add Deck" component={AddDeck} />
    </Tab.Navigator>
  )
}

function MyStack() {
  return (
    <Stack.Navigator 
      navigationOptions={({ route }) => ({
        title: {route},
        headerTintColor: white,
        headerStyle: {
          backgroundColor: purple
        }
      })}>
      <Stack.Screen name="Deck List" component={MyTab} />
      <Stack.Screen name="Deck View" component={DeckView} />
      <Stack.Screen name="Add Card" component={AddCard} />
    </Stack.Navigator>
  );
}

export default class App extends Component {
  render() {
    return(
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <NavigationContainer>
            <MyStack />
          </NavigationContainer>
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
