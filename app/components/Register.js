import React, { useState } from "react";
import { View, Switch, StyleSheet, Text, Image } from "react-native";
import { Formik } from 'formik';
import * as Yup from 'yup';

import Screen from "../components/Screen";
import AppTextInput from "./AppTextInput";
import AppButton from'./AppButton';
import ErrorMessage from './ErrorMessage';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).label("Password")
});

export default function Register({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const handleLogin = () => {
    //call api with user/pass
    navigation.navigate("Login")
  }

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../../assets/ccsu.png")} />

      <Formik
            initialValues={{ email: '', password: ''}}
            onSubmit={values => console.log(values)}
            validationSchema={validationSchema}
           >
            {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
              <>
                <AppTextInput 
                  autoCorrect={false}
                  icon=""
                  placeholder="Full Name"
                  textContentType="fullName"
                />
                <AppTextInput
                    autoCapitalize="none"
                    autoCorrect={false} 
                    icon="email"
                    keyboardType="email-address"
                    onBlur={() => setFieldTouched("email")}
                    onChangeText={handleChange("email")}
                    placeholder="Email"
                    textContentType="emailAddress"
                />
                <ErrorMessage error={errors.email} visible={touched.email} />
                <AppTextInput 
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    onBlur={() => setFieldTouched("password")}
                    onChangeText={handleChange("password")}
                    placeholder="Password"
                    secureTextEntry
                    textContentType="password"
                />
                
      <View style={styles.switch}>
      <Text style={{ marginRight: 5 }}>on campus</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        alignSelf
      />
      <Text style={{ marginLeft: 5 }}>off campus</Text>
      </View>
              <ErrorMessage error={errors.password} visible={touched.password} />
                  <AppButton title="Register" onPress={handleLogin}/>
                  </>
              )}
    </Formik>  
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
},
  switch: {
    flex:1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

  }
});
