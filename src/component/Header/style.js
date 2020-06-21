import { StyleSheet, Dimensions } from "react-native";
import Font from "../../common/font";
import Color from "../../common/color";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const Style = StyleSheet.create({
    header_wrapper: {
        height: 70,
        position: "relative",
        backgroundColor: Color.pure_white
    },
    main_header_colored: {
        position: "relative",
        height: 45,
        borderTopWidth: 3,
        borderTopColor: Color.pure_white,
        backgroundColor: Color.primary,
        width: SCREEN_WIDTH,
        display: "flex",
        justifyContent: "center",
        paddingLeft: 80
    },
    header_title: {
        color: Color.pure_white,
        fontSize: 22,
        letterSpacing: 1.5,
        ...Font.bold
    },
    circle_action: {
        width: 60,
        height: 60,
        backgroundColor: Color.secondary,
        borderRadius: 35,
        borderColor: Color.pure_white,
        borderWidth: 5,
        position: "absolute",
        left: 10,
        zIndex: 3,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    router_stack_wrapper: {
        width: SCREEN_WIDTH,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingLeft: 50
    },
    router_stack_title: {
        color: Color.primary,
        ...Font.bold,
        fontSize: 13,
        letterSpacing: 0.5
    },
    background_pattern_image: {
        resizeMode: "cover",
        position: "absolute",
        left: 0,
        top: 0,
        height: 42,
        width: SCREEN_WIDTH
    },
    router_stack_item_first: {
        height: 25,
        paddingLeft: 12,
        paddingRight: 12,
        backgroundColor: Color.secondary,
        borderWidth: 3,
        borderColor: Color.pure_white,
        borderRadius: 25/2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    router_stack_item_next: {
        height: 25,
        paddingLeft: 12,
        paddingRight: 12,
        backgroundColor: Color.secondary,
        borderWidth: 3,
        borderColor: Color.pure_white,
        borderRadius: 25/2,
        marginLeft: -10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
});

export const ICON_STYLE = {
    name: "arrow-left",
    color: Color.primary,
    size: 23
};

export default Style;
