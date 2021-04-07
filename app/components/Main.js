  
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Factors from '../components/Factors'
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
const Main = () => {
    return (
        <View style={styles.container}>
          <Factors />
        </View>
      );
};
export default Main;