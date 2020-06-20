/* eslint-disable prettier/prettier */
/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
* @flow strict-local
*/

import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <View>
          <StatusBar backgroundColor="black" barStyle="light-content" />
          <Text>APP ENTRY POINT</Text>
        </View>
      </NavigationContainer>
    </>
  );
};

export default App;
