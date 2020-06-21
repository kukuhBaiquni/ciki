import React from "react";
import { View, Text } from "react-native";

const Home = (props) => {
    const history = props.route.params ? [...props.route.params, props.route.name] : [props.route.name];

    return(
        <View>
            <Text onPress={() => props.navigation.navigate("Login", history)}>GO TO LOGIN</Text>
        </View>
    )
};

export default Home;
