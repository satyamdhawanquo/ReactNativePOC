/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import LoginSignupScreen from './src/screen/LoginSignupScreen';

const App = () => {
  return (
    <NavigationContainer>
      <LoginSignupScreen />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
