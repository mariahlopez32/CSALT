import React, { useState, useContext } from "react";
import { View, Switch, StyleSheet, Text, Image } from "react-native";
import { Formik } from 'formik';
import * as Yup from 'yup';

import Screen from "../components/Screen";
import axios from "axios";
import AppTextInput from "./AppTextInput";
import AppButton from'./AppButton';
import ErrorMessage from './ErrorMessage';
import AppContext from '../../AppContext';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).label("Password")
});

export default function Register({ navigation }) {
  const [livesOnCampus, setLivesOnCampus] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const {setToken, setUser} = useContext(AppContext)
  const toggleLivesOnCampus = () => setLivesOnCampus((previousState) => !previousState);

    
    const handleRegister = values => {
      const payload = {...values, livesOnCampus}
      axios.post("http://localhost:19009/CCSUWellness/Register", payload )
        .then(response => {
          console.log(response.data)
          setToken(response.data.token)
          setUser(response.data.user)
          navigation.navigate("Factors")
        })
        .catch(err => {
          setErrorMessage(err.response.data.message)
        })
    }
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../../assets/ccsu.png")} />

      <Formik
            initialValues={{ email: '', password: '', fullName: ''}}
            onSubmit={handleRegister}
            validationSchema={validationSchema}
           >
            {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
              <>
                <AppTextInput 
                  autoCorrect={false}
                  icon=""
                  placeholder="Full Name"
                  onChangeText={handleChange("fullName")}
                  onBlur={() => setFieldTouched("fullName")}
                  textContentType="name"
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
       <ErrorMessage error={errors.password} visible={touched.password} />         
      <View style={styles.switch}>
      <Text style={{ marginRight: 5 }}>off campus</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={livesOnCampus ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleLivesOnCampus}
        value={livesOnCampus}
        alignSelf
      />
      <Text style={{ marginLeft: 5 }}>on campus</Text>
      </View>
                  <ErrorMessage error={errorMessage} visible={errorMessage} />
                  <AppButton title="Register" onPress={handleSubmit}/>
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
