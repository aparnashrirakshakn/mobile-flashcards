import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import DeckList from './components/DeckList'
import { FontAwesome, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'
import { purple, white } from './utils/colors'
import AddDeck from './components/AddDeck'
import DeckView from './components/DeckView';

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
    <Stack.Navigator>
      <Stack.Screen name="Home" component={MyTab} />
      <Stack.Screen name="DeckView" component={DeckView} />
    </Stack.Navigator>
  );
}

export default class App extends Component {
  render() {
    return(
      <View style={{flex: 1}}>
        <NavigationContainer>
          <MyStack />
        </NavigationContainer>
      </View>
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
