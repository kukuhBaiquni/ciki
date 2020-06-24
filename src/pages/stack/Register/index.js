import React from "react";
import { View, Text, StyleSheet, Image, TextInput, ScrollView, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import * as AssetImage from "../../../common/assetImageUri";
import Style, { BackgroundStyle } from "./style";
import Background from "../../../../assets/images/svg/coloring";
import { SvgXml } from "react-native-svg";

const Register = (props) => {
    console.log(Background);
    return (
        <KeyboardAvoidingView style={Style.body_wrapper} keyboardVerticalOffset={100}>
            <View style={Style.page_title_wrapper}>
                <Text style={Style.page_title_text}>REGISTER</Text>
                <Image source={AssetImage.Logo} style={Style.logo} />
            </View>
            <SvgXml xml={Background} style={BackgroundStyle.style} />
            <View style={Style.form_wrapper}>
                <ScrollView>
                    <Text style={Style.form_label}>NAMA</Text>
                    <TextInput style={Style.form_input} />
                    <Text style={Style.form_label}>EMAIL</Text>
                    <TextInput style={Style.form_input} />
                    <Text style={Style.form_label}>PASSWORD</Text>
                    <TextInput style={Style.form_input} />
                    <Text style={Style.form_label}>ULANGI PASSWORD</Text>
                    <TextInput style={Style.form_input} />
                    <TouchableOpacity style={Style.submit_button}>
                        <Text style={Style.submit_button_text}>REGISTER</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </KeyboardAvoidingView>
    )
};

export default Register;
