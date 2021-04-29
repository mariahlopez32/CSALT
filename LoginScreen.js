import React , {useState, useContext } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Screen from './app/components/Screen';
import axios from "axios";
import AppTextInput from './app/components/AppTextInput';
import AppButton from'./app/components/AppButton';
import ErrorMessage from './app/components/ErrorMessage';
import AppContext from './AppContext';
import Factors from './Factors';

//being defined outside of function component so that this object is not redefined evertime the object is rerendered.
const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).label("Password")
});


function LoginScreen({ navigation }) {
 const {setToken, setUser} = useContext(AppContext)
 const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = values => {
      const payload = {...values}
      console.log('Values', payload)
      axios.post("http://localhost:19009/CCSUWellness/Login", payload)
      .then(response => {
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
           <Image style={styles.logo} source={require("./assets/ccsu.png")} />
           
           <Formik
            initialValues={{ email: '', password: ''}}
            onSubmit={handleLogin} // bind the login funct
            validationSchema={validationSchema}
           >
            {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
              <>
              
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
                <ErrorMessage error={errorMessage} visible={errorMessage} />
                <AppButton title="Login" onPress={handleSubmit}/>
              </>
            )}
           </Formik>   
       </Screen>
       
    );
}

const styles = StyleSheet.create({
    container: {
       padding: 10 
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20,
    },
    
});

export default LoginScreen;