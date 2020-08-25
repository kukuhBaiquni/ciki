import "react-native-gesture-handler";
import React from "react";
import { View, Text, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Provider from "./Provider";
import Independent from "./Route";

const App = () => {
    return (
        <NavigationContainer>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <Provider>
                <Independent />
            </Provider>
        </NavigationContainer>
    );
};

export default App;
