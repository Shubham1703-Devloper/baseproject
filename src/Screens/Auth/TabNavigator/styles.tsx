import { StyleSheet } from "react-native";
// import Config from "react-native-config";

type Style = {
    icon: any;
    icon1: any;
    text: any;
    text1: any;
};

export default StyleSheet.create<Style>({
    icon: {
        width: 25, height: 25,

    },
    icon1: {
        width: 50, height: 50,
        marginBottom: 20
    },

    text: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 10
    },
    text1: {
        fontSize: 12,
        marginBottom: 10
    }
})