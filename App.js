import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {  StyleSheet, Text, View, Button, Alert, ScrollView, SafeAreaView } from 'react-native';
import LoginScreen from './LoginScreen';
import WelcomeScreen from './WelcomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//npm install react-sidebar
// import React from "react";
import Sidebar from "react-sidebar";
import Navbar from './app/components/Navbar';
import Factors from './app/components/Factors';
// import { Router, Switch } from 'react-router';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css'
export default function App(){
  return (
      <Router>
         <Navbar/>
           <Switch>
            <Route path='/WelcomeScreen' exact component={WelcomeScreen}/>
            <Route path='/LoginScreen' exact component={LoginScreen}/>
          </Switch> 
      
       <SafeAreaView>
       <ScrollView>
       <View style={styles.container}>
         {/* <Text>Wellness App!</Text> */}
         <Factors/>
         {/* <Button color="red" title="test" onPress={ev => {Alert.alert('You clicked me')}}/> */}
         <StatusBar style="auto" />
       </View>
       </ScrollView>
       </SafeAreaView>
       </Router>
   
 );
}

  // {/* // <NavigationContainer>
  //     <Stack.Navigator>
  //     <Stack.Screen name="Welcome" component={WelcomeScreen} />
  //     <Stack.Screen name="Login/out" component={LoginScreen} />
  //    </Stack.Navigator>
  // </NavigationContainer>
  // ); */}
  


const styles = StyleSheet.create({
  container: {
   flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
   justifyContent: 'center',
 },
});
