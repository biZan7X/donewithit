import { StyleSheet, Platform, StatusBar } from 'react-native'

export default StyleSheet.create({
    screen: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        flex: 1,
    }
})
