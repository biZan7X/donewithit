import {Platform, StyleSheet} from "react-native"

import colors from "../../config/color"

export default StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: "row",
        width: '100%',
        padding: 15,
        marginVertical: 10,
        alignItems: "center"
    },
    icon: {
        fontSize: 25,
        color: colors.medium,
        marginRight: 10,
    }
})
