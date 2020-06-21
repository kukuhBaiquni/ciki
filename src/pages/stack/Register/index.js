import React from "react";
import { View, Text, StyleSheet, Image, TextInput, ScrollView, KeyboardAvoidingView } from "react-native";
import * as AssetImage from "../../../common/assetImageUri";
import Style from "./style";

const Register = (props) => {
    return (
        <KeyboardAvoidingView style={Style.body_wrapper} keyboardVerticalOffset={100}>
            <Image source={AssetImage.BackgroundFluid} style={Style.background_fluid} />
            <Image source={AssetImage.Logo} style={Style.logo} />
            <View style={Style.form_wrapper}>
                <ScrollView>
                    <Text style={Style.form_title}>Register</Text>
                    <Text style={Style.form_label}>Name</Text>
                    <TextInput style={Style.form_input} />
                    <Text style={Style.form_label}>Name</Text>
                    <TextInput style={Style.form_input} />
                    <Text style={Style.form_label}>Name</Text>
                    <TextInput style={Style.form_input} />
                </ScrollView>
            </View>
        </KeyboardAvoidingView>
    )
};

export default Register;
