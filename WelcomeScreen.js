import React from 'react';
import { ImageBackground, StyleSheet, View , Text, Image,TouchableOpacity,Button} from 'react-native';

import colors from './app/config/colors';
import AppButton from './app/components/AppButton';

function WelcomeScreen(props) {
    return (
        <div className='WelcomeScreen'>
        <ImageBackground 
            style={styles.background}
            source={require("./assets/stockImage1.jpg")}>
            
           
            <View style={styles.logoContainer}>
                <Image style={styles.logo}source={require('./assets/ccsu.png')}/>
                <Text style={styles.tagline}> Welcome to the Wellness{'\n'} App </Text>
            </View> 
            <View style={styles.buttonsContainer}>
                <AppButton title="Login" />
                <AppButton title="Register" /> 
            </View>
            
         </ImageBackground> 
         </div>
    );
}

const styles = StyleSheet.create({
    background:{
            flex:1,
            resizeMode: 'contain',
            justifyContent:"flex-end",
            alignItems: "center",
            //backgroundColor:'white',
    },
    buttonsContainer: {
        padding: 20,
        width: "100%",

    },
    logo:{
        width:200,
        height:200,
        position:'absolute',
        top: 100,
    },
    logoContainer:{
        position:'absolute',
        top: 100,
        alignItems:"center",
    },
    tagline: {
        fontSize: 25,
        fontWeight: "600",
        textAlign: "center",
        
    }
})

export default WelcomeScreen;