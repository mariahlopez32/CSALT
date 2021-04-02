import React from 'react';
import { ImageBackground, StyleSheet, View , Text, Image,TouchableOpacity,Button} from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground style={styles.background}
            //source={require('./assets/goals.jpg')}>
           >
            <View style={styles.logoContainer}>
                <Image style={styles.logo}source={require('./assets/ccsu.png')}/>
                <Text> Welcome to the Wellness Application </Text>
            </View> 
            <TouchableOpacity style={styles.login} onPress={()=> alert('Button tapped')}>
                <View ><Text>Login</Text></View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signup} onPress={()=> alert('Button tapped')}>
             <Text > Sign In </Text>
            </TouchableOpacity>
         </ImageBackground> 
    );
}

const styles = StyleSheet.create({
    background:{
            flex:1,
            justifyContent:"flex-end",
            alignItems: "center",
            backgroundColor:'white',
    },
    login: {
        width:'100%',
        height:70,
        backgroundColor:'#fc5c65'
    },

    signup: {
        width:'100%',
        height:70,
        backgroundColor:'#4ecdc4',
    },
    logo:{
        width:100,
        height:100,
        position:'absolute',
        top:50,
    },
    logoContainer:{
        position:'absolute',
        top:150,
        alignItems:"center",
    }
})

export default WelcomeScreen;