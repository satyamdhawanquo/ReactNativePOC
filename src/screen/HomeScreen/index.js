import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Home';
import Detail from '../Detail';
import Icon from 'react-native-vector-icons/FontAwesome';
import SeeMore from '../SeeMore';
import Search from '../../screen/Search';
import Account from '../../screen/Account';
const HomeTabNavigator = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <HomeTabNavigator.Navigator
      tabBarOptions={{
        showLabel: false,
        activeBackgroundColor: '#FCAD47',
        inactiveBackgroundColor: '#ccc',
      }}
      screenOptions={{}}>
      <HomeTabNavigator.Screen
        name="HomeStack"
        component={HomeStackComponent}
        options={{
          tabBarIcon: () => {
            return (
              <View>
                <Icon name="rocket" size={30} color="white" />
              </View>
            );
          },
        }}
      />

      <HomeTabNavigator.Screen
        name="Search"
        component={SearchStackComponent}
        options={{
          tabBarIcon: () => {
            return <Icon name="search" size={30} color="white" />;
          },
        }}
      />
      <HomeTabNavigator.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: () => {
            return <Icon name="user-circle" size={30} color="white" />;
          },
        }}
      />
    </HomeTabNavigator.Navigator>
  );
};

const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();
const HomeStackComponent = () => {
  return (
    <HomeStack.Navigator initialRouteName={'HomeScreen'}>
      <HomeStack.Screen
        name="HomeScreen"
        component={Home}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="Details"
        component={Detail}
        options={{headerBackTitle: 'Home'}}
      />
      <HomeStack.Screen
        name="See More"
        component={SeeMore}
        options={{headerBackTitle: 'Home', headerTintColor: 'white'}}
      />
    </HomeStack.Navigator>
  );
};

const SearchStackComponent = () => {
  return (
    <SearchStack.Navigator initialRouteName={'SearchScreen'}>
      <SearchStack.Screen
        name="SearchScreen"
        component={Search}
        options={{headerShown: false}}
      />
      <SearchStack.Screen
        name="Details"
        component={Detail}
        options={{headerBackTitle: 'Search'}}
      />
    </SearchStack.Navigator>
  );
};

export default HomeScreen;
