import React, { Component } from 'react';
import { StyleSheet, View, StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Constants from 'expo-constants'
import { purple, white } from './utils/colors'

import reducer from './reducers'

import DeckList from './components/DeckList'
import AddDeck from './components/AddDeck'
import DeckView from './components/DeckView'
import AddCard from './components/AddCard'
import Quiz from './components/Quiz'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyStatusBar({backgroundColor, ...props}) {
  return (
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props}/>
    </View>
  )
}

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
      <Stack.Screen name="Quiz" component={Quiz} />
    </Stack.Navigator>
  );
}

export default class App extends Component {
  render() {
    return(
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <NavigationContainer>
            <MyStatusBar backgroundColor={purple} barStyle='light-content'/>
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
