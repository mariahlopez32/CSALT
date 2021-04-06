import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert, ScrollView, SafeAreaView } from 'react-native';
import Factors from "./src/components/Factors"
export default function App() {
  return (
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
