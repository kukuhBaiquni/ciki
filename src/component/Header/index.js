import React from "react";
import { View, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import Style, { ICON_STYLE } from "./style";
import * as AssetImage from "../../common/assetImageUri";

const Header = (p) => {

    const breadCrumb = p.scene.route.params ? [...p.scene.route.params, p.scene.route.name] : [p.scene.route.name];

    return(
        <View style={Style.header_wrapper}>
            <View style={Style.circle_action}>
                {
                    p.goBack ? (
                        <Icon onPress={p.goBack} {...ICON_STYLE} />
                    ) : (
                        <Text>Nope</Text>
                    )
                }
            </View>
            <View style={Style.main_header_colored}>
                <Image source={AssetImage.BackgroundPattern} style={Style.background_pattern_image} />
                <Text style={Style.header_title}>{p.title}</Text>
            </View>
            <View style={Style.router_stack_wrapper}>
                {
                    breadCrumb.map((value, index) => (
                        <View key={index} style={index === 0 ? Style.router_stack_item_first : Style.router_stack_item_next}>
                            <Text style={Style.router_stack_title}>{value}</Text>
                        </View>
                    ))
                }
            </View>
        </View>
    )
};

export default Header;
