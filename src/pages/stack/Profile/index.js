import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Font from "../../../common/font";

const Profile = (props) => {
    const history = props.route.params ? [...props.route.params, props.route.name] : [props.route.name];
    return (
        <View style={style.body_wrapper}>
            <Text style={style.test}>Profile</Text>
        </View>
    )
};

const style = StyleSheet.create({
    test: {
        ...Font.regular
    },
    body_wrapper: {
        flex: 1,
        backgroundColor: "white"
    }
});

export default Profile;
