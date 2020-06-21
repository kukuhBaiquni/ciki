import { StyleSheet, Dimensions } from "react-native";
import Font from "../../../common/font";
import Color from "../../../common/color";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const Style = StyleSheet.create({
    test: {
        ...Font.regular
    },
    body_wrapper: {
        flex: 1,
        backgroundColor: "white",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 100
    },
    background_fluid: {
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        position: "absolute",
        top: -20,
        left: 0
    },
    logo: {
        width: 100,
        height: 100,
        position: "absolute",
        top: 60
    },
    form_wrapper: {
        width: SCREEN_WIDTH * 0.8,
        backgroundColor: Color.pure_white,
        elevation: 15,
        height: 400,
        borderRadius: 10,
        padding: 20
    },
    form_title: {
        ...Font.bold,
        fontSize: 28,
        color: Color.primary,
        letterSpacing: 1,
        marginBottom: 15
    },
    form_label: {
        ...Font.regular,
        color: Color.primary,
        fontSize: 18,
        letterSpacing: 1
    },
    form_input: {
        backgroundColor: Color.pure_white,
        marginTop: 5,
        padding: 5,
        borderWidth: 1,
        borderColor: Color.primary,
        borderRadius: 5,
        paddingLeft: 10,
        paddingRight: 10,
        ...Font.regular,
        letterSpacing: 1,
        fontSize: 16,
        marginBottom: 5,
        color: Color.primary
    }
});

export default Style;
