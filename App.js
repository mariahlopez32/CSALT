import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {  StyleSheet, Text, View, Button, Alert, ScrollView, SafeAreaView } from 'react-native';
import LoginScreen from './LoginScreen';
import WelcomeScreen from './WelcomeScreen';
import Factors from './Factors';
//npm install react-sidebar
// import React from "react";
// import { Router, Switch } from 'react-router';
export default function App(){
  return  <Factors />;
      
   
 
}

 
  


const styles = StyleSheet.create({
  container: {
   flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
   justifyContent: 'center',
 },
});
