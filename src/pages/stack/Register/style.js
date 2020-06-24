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
        alignItems: "center",
        paddingTop: 0,
        backgroundColor: Color.pure_white
    },
    page_title_wrapper: {
        width: SCREEN_WIDTH * 0.8,
        marginTop: 25,
        marginBottom: 15,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    page_title_text: {
        fontSize: 30,
        ...Font.bold,
        color: Color.pure_white
    },
    logo: {
        width: 70,
        height: 70
    },
    form_wrapper: {
        width: SCREEN_WIDTH * 0.8,
        backgroundColor: Color.pure_white,
        elevation: 5,
        borderRadius: 5,
        padding: 20,
        paddingTop: 30,
        paddingBottom: 30
    },
    form_label: {
        ...Font.bold,
        color: Color.primary,
        fontSize: 14,
        textTransform: "uppercase"
    },
    form_input: {
        backgroundColor: Color.pure_white,
        padding: 2,
        borderBottomWidth: 1,
        borderBottomColor: Color.pure_black,
        paddingLeft: 0,
        paddingRight: 0,
        ...Font.regular,
        fontSize: 14,
        marginBottom: 14,
        color: Color.pure_black
    },
    submit_button: {
        width: "100%",
        height: 50,
        backgroundColor: Color.primary,
        borderRadius: 3,
        display: "flex",
        justifyContent: "center",
        marginTop: 20,
        alignItems: "center"
    },
    submit_button_text: {
        ...Font.bold,
        fontSize: 17,
        color: Color.pure_white
    }
});

export const BackgroundStyle = StyleSheet.create({
    style: {
        width: SCREEN_WIDTH,
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1
    }
})

export default Style;
