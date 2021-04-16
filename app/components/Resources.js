import React from "react";
import { Linking } from "react-native";
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

  const showValues = () => {
    console.log("factorValue", factorValue);
    return Object.keys(factorValue).map((wellnessFactor) => {
      const wellnessFactorRating = factorValue[wellnessFactor];
      if (wellnessFactorRating < 3) {
        //showWellnessFactorLinks(wellnessFactor);
        if (wellnessFactor === "Financial") {
          return (
            <Text
              style={{ color: "blue" }}
              onPress={() =>
                Linking.openURL(
                  "https://www.youtube.com/watch?v=tTUy_jtoAmA&list=PLwuUq0AkPoHQMEQYpHZLo81wh1GcpEZpM&index=5"
                )
              }
            >
              What is Financial Health?
            </Text>
          );
        } else if (wellnessFactor === "Environmental") {
          return (
            <Text
              style={{ color: "blue" }}
              onPress={() =>
                Linking.openURL(
                  "https://www.youtube.com/watch?v=HcXHxSdhpgo&list=PLwuUq0AkPoHQMEQYpHZLo81wh1GcpEZpM&index=9"
                )
              }
            >
              Environmental Health
            </Text>
          );
        } else if (wellnessFactor === "Social") {
          return (
            <Text
              style={{ color: "blue" }}
              onPress={() =>
                Linking.openURL("https://www.youtube.com/watch?v=VPE9CqRUp54")
              }
            >
              Sex, Dating and Relationships in College
            </Text>
          );
        } else if (wellnessFactor === "Physical") {
          return <Text>no links</Text>;
        } else if (wellnessFactor === "Intellectual") {
          return (
            <Text
              style={{ color: "blue" }}
              onPress={() =>
                Linking.openURL(
                  "https://www.youtube.com/watch?v=SJLx20eyYeQ&t=3s"
                )
              }
            >
              How to Study SMARTER Not Harder in College
            </Text>
          );
        } else if (wellnessFactor === "Emotional") {
          return (
            <Text
              style={{ color: "blue" }}
              onPress={() =>
                Linking.openURL(
                  "https://www.youtube.com/watch?v=uQJdV-Ck0k0&t=426s"
                )
              }
            >
              20 Forgotten Ways to Manage Stress in College
            </Text>
          );
        } else if (wellnessFactor === "Spiritual") {
          return (
            <Text
              style={{ color: "blue" }}
              onPress={() =>
                Linking.openURL(
                  "https://www.youtube.com/watch?v=8gZ_JbDgERs&list=PLwuUq0AkPoHQMEQYpHZLo81wh1GcpEZpM&index=23"
                )
              }
            >
              What is Spiritual Health?
            </Text>
          );
        } else if (wellnessFactor === "Occupational") {
          return (
            <Text
              style={{ color: "blue" }}
              onPress={() =>
                Linking.openURL("https://www.youtube.com/watch?v=xSYf8I7j0Cw")
              }
            >
              National Wellness Week: Focus on Occupational Wellness!
            </Text>
          );
        }
        //};

        console.log("factor", wellnessFactor); // wellnessFactor is factor name
        console.log("factorValueProperty", wellnessFactorRating); //wellnessFactorRating shows number value of rating
      }
    });
  };

  return (
    <View>
      <Text>Resources</Text>
      {/* <Text>{JSON.stringify(factorValue)}</Text> */}
      {showValues()}
    </View>
  );
}

export default Resources;

const styles = StyleSheet.create({});
