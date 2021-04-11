import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Modal,
  Pressable,
  TouchableOpacity,
} from "react-native";

function Resources({ route }) {
  const { factorValue } = route.params;

  return (
    <View>
      <Text>Resources page!</Text>
      <Text>{JSON.stringify(factorValue)}</Text>
    </View>
  );
}

export default Resources;

const styles = StyleSheet.create({});
