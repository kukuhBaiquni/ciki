import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Font from "../../../common/font";
import Context from "../../../Context";

const Login = (props) => {
    const history = props.route.params ? [...props.route.params, props.route.name] : [props.route.name];
    return (
        <Context.Consumer>
            {
                context => (
                    <View style={style.body_wrapper}>
                        <Text onPress={() => props.navigation.navigate("Profile", history)} style={style.test}>Login</Text>
                        <Lol context={context} />
                    </View>
                )
            }
        </Context.Consumer>
    )
};

const Lol = props => {
    console.log(props);
    const { name, email } = props.context;
    return(
        <View>
            <Text>AFK</Text>
            <Text>{name}</Text>
            <Text>{email}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    test: {
        ...Font.regular
    },
    body_wrapper: {
        flex: 1,
        backgroundColor: "white"
    }
});

export default Login;
