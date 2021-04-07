import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Screen from './app/components/Screen';
import AppTextInput from './app/components/AppTextInput';
import AppButton from'./app/components/AppButton';
import AppText from './app/components/AppText';

//being defined outside of function component so that this object is not redefined evertime the object is rerendered.
const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).label("Password")
});


function LoginScreen(props) {
    return (
      <div className='Login'>
       <Screen style={styles.container}>
           <Image style={styles.logo} source={require("./assets/ccsu.png")} />
           
           <Formik
            initialValues={{ email: '', password: ''}}
            onSubmit={values => console.log(values)}
            validationSchema={validationSchema}
           >
            {({ handleChange, handleSubmit, errors }) => (
              <>
                <AppTextInput
                  autoCapitalize="none"
                  autoCorrect={false} 
                  icon="email"
                  keyboardType="email-address"
                  onChangeText={handleChange("email")}
                  placeholder="Email"
                  textContentType="emailAddress"
              />
                <AppText style={{ color: "red" }}>{errors.email}</AppText>
                <AppTextInput 
                  autoCapitalize="none"
                  autoCorrect={false}
                  icon="lock"
                  onChangeText={handleChange("password")}
                  placeholder="Password"
                  secureTextEntry
                  textContentType="password"
              />
                <AppText style={{ color: "red" }}>{errors.password}</AppText>
                <AppButton title="Login" onPress={handleSubmit}/>
              </>
            )}
           </Formik>   
       </Screen>
       </div>
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