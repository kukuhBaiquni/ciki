/* eslint-disable prettier/prettier */
/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
* @flow strict-local
*/

import "react-native-gesture-handler";
import React from "react";
import { View, Text, StatusBar, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { font } from "./src/common/font";

const App = () => {
    return (
        <>
            <NavigationContainer>
                <View>
                    <StatusBar backgroundColor="black" barStyle="light-content" />
                    <Text style={style.test}>tester</Text>
                </View>
            </NavigationContainer>
        </>
    );
};

const style = StyleSheet.create({
    test: {
        ...font.regular
    }
})

export default App;
