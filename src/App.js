import "react-native-gesture-handler";
import React from "react";
import { View, Text, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./Route";

const App = () => {
    return (
        <NavigationContainer>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <RootStack />
        </NavigationContainer>
    );
};

export default App;
