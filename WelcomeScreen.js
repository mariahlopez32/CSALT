import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";

import colors from "./app/config/colors";
import AppButton from "./app/components/AppButton";
import { NavigationContainer } from "@react-navigation/native";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("./assets/stockImage1.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("./assets/ccsu.png")} />
        <Text style={styles.tagline}> Welcome to the Wellness{"\n"} App </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="Login" onPress={() => navigation.navigate("Login")} />
        <AppButton title="Register" onPress={() => navigation.navigate("Register")} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "contain",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 200,
    height: 200,
    position: "absolute",
    top: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 100,
    alignItems: "center",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    textAlign: "center",
  },
});

export default WelcomeScreen;
