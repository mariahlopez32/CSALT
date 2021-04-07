import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Modal,
  Pressable,
  TouchableOpacity,
} from "react-native";

function Circle({ factor, color, onPress }) {
  const styles = StyleSheet.create({
    circleShape: {
      width: 150,
      height: 150,
      borderRadius: 75,
      backgroundColor: color,
      justifyContent: "center",
      alignItems: "center",
    },
  });

  return (
    <TouchableOpacity style={styles.circleShape} onPress={() => onPress(factor)}>
      <Text style={{ width: "100%", textAlign: "center", color: 'white', fontSize: 20,}}>{factor}</Text>
    </TouchableOpacity>
  );
}

export default Circle;