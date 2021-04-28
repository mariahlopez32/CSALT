import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  ScrollView,
  SafeAreaView,
} from "react-native";
import LoginScreen from "./LoginScreen";
import WelcomeScreen from "./WelcomeScreen";
import Factors from "./Factors";
import AdminScreen from "./AdminScreen";
import Resources from "./app/components/Resources";
import Register from "./app/components/Register";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import {AppContextProvider} from "./AppContext";
import { SafeAreaFrameContext } from "react-native-safe-area-context";


const Stack = createStackNavigator();

export default function App() {
  return (
    <AppContextProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerTitle: false }}
        />
        <Stack.Screen name="Factors" component={Factors} options={{}} />
        <Stack.Screen name="Resources" component={Resources} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Admin" component= {AdminScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </AppContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
