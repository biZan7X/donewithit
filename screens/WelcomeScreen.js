import React from 'react';
import {View, StyleSheet, ImageBackground,Image, Text} from 'react-native';

import AppButton from '../components/AppButton';

const WelcomeScreen = () => {
    return (
        <ImageBackground blurRadius={10} style={styles.container} source={require('../assets/background.jpg')} >
            <View style={styles.logoContainer} >
                <Image style={styles.logo} source={require('../assets/logo-red.png')} />
                <Text style={styles.tagline} >Sell what you don't need</Text>
            </View>
            <View style={styles.buttonContainers} >
                <AppButton title="Login" onPress={() => {}} />
                <AppButton title="Register" color="secondary" onPress={() => {}} />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center'
    },
    logo:{
        height: 100,
        width: 100,
    },
    buttonContainers: {
        padding: 20,
        width: "100%"
    },
    tagline: {
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20
    }
})

export default WelcomeScreen;
