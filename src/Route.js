import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./pages/stack/Login";
import Home from "./pages/stack/Home";
import Profile from "./pages/stack/Profile";
import Register from "./pages/stack/Register";
import Header from "./component/Header";

const Stack = createStackNavigator();

const RootStack = () => {
    return (
        <Stack.Navigator headerMode="float">
            <Stack.Screen {...stackProps} name="Home" component={Home} />
            <Stack.Screen {...stackProps} name="Login" component={Login} />
            <Stack.Screen {...stackProps} name="Profile" component={Profile} />
        </Stack.Navigator>
    );
};

const Independent = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    )
}

const stackProps = {
    options: {
        header: ({ scene, previous, navigation, routes }) => {
            const { options } = scene.descriptor;
            const title = scene.route.name;

            return (
                <Header
                    title={title}
                    goBack={previous ? navigation.goBack : undefined}
                    scene={scene}
                    navigation={navigation}
                />
            );
        }
    }
};

export default Independent;
