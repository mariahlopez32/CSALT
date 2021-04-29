import React from "react";
import { Linking } from "react-native";
import {
  View,
  StyleSheet,
  Text,
  Modal,
  Pressable,
  TouchableOpacity,
  SafeAreaView,
  Button,
  Image,
} from "react-native";
// import ExternalLink from './ExternalLink';
import { Video, AVPlaybackStatus } from 'expo-av';

// import getVideoId from 'get-video-id';
function Resources({ route }) {
  const { factorValue } = route.params;
  // const video = React.useRef(null);
  // const [status, setStatus] = React.useState({});
  const showValues = () => {
    console.log("factorValue", factorValue);
    return Object.keys(factorValue).map((wellnessFactor) => {
      const wellnessFactorRating = factorValue[wellnessFactor];

      // <View style={[styles.container, {
      //   // Try setting `flexDirection` to `"row"`.
      //   flexDirection: "column"
      // }]}>
      if (wellnessFactorRating < 3) {
        //showWellnessFactorLinks(wellnessFactor);
        if (wellnessFactor === "Financial") {
          return (
            <View style={styles.Financialbackground}>
            <Text style={styles.header}>Financial</Text>
            <Text  style={styles.body}  
              source={require('./assets/Financial.JPG')}
              onPress={() =>Linking.openURL("https://www.youtube.com/watch?v=tTUy_jtoAmA&list=PLwuUq0AkPoHQMEQYpHZLo81wh1GcpEZpM&index=5")
              } >What is Financial Health? (Click to learn more)
           </Text> 
            </View>
          );
        } else if (wellnessFactor === "Environmental") {
          return (
            <View style={styles.Enviornmentalbackground}>
            <Text style={styles.header}>Environmental</Text>
            <Text  style={styles.body} 
              style={{ color: "blue" }}
              onPress={() =>
                Linking.openURL(
                  "https://www.youtube.com/watch?v=HcXHxSdhpgo&list=PLwuUq0AkPoHQMEQYpHZLo81wh1GcpEZpM&index=9"
                )
              }
            >
              Environmental Health
            </Text>
            </View>
          );
        } else if (wellnessFactor === "Social") {
          return (
            <View style={styles.Socialbackground}>
            <Text style={styles.header}>Social</Text>
            <Text  style={styles.body} 
              style={{ color: "blue" }}
              onPress={() =>
                Linking.openURL("https://www.youtube.com/watch?v=VPE9CqRUp54")
              }
            >
              Sex, Dating and Relationships in College
            </Text>
            </View>
          );
        } else if (wellnessFactor === "Physical") {
          return (
          <View style={styles.Physicalbackground}>
          <Text style={styles.header}>Physical</Text>
          <Text  style={styles.body} >no links</Text>
          </View>
          );
        } else if (wellnessFactor === "Intellectual") {
          return (
          <View style={styles.Intellectualbackground}>
          <Text style={styles.header}>Intellectual</Text>
            <Text  style={styles.body} 
              style={{ color: "blue" }}
              onPress={() =>
                Linking.openURL(
                  "https://www.youtube.com/watch?v=SJLx20eyYeQ&t=3s"
                )
              }
            >
              How to Study SMARTER Not Harder in College
            </Text>
            </View>
          );
        } else if (wellnessFactor === "Emotional") {
          return (
          <View style={styles.Emotionalbackground}>
          <Text style={styles.header}>Emotional</Text>
            <Text  style={styles.body} 
              style={{ color: "blue" }}
              onPress={() =>
                Linking.openURL(
                  "https://www.youtube.com/watch?v=uQJdV-Ck0k0&t=426s"
                )
              }
            >
              20 Forgotten Ways to Manage Stress in College
            </Text>
            </View>
          );
        } else if (wellnessFactor === "Spiritual") {
          return (
          <View style={styles.Spiritualbackground}>
          <Text style={styles.header}>Spiritual</Text>
            <Text  style={styles.body} 
              style={{ color: "blue" }}
              onPress={() =>
                Linking.openURL(
                  "https://www.youtube.com/watch?v=8gZ_JbDgERs&list=PLwuUq0AkPoHQMEQYpHZLo81wh1GcpEZpM&index=23"
                )
              }
            >
              What is Spiritual Health?
            </Text>
            </View>
          );
        } else if (wellnessFactor === "Occupational") {
          return (
          <View style={styles.Occupationalbackground}>
          <Text style={styles.header}>Occupational</Text>
            <Text  style={styles.body} 
              style={{ color: "blue" }}
              onPress={() =>
                Linking.openURL("https://www.youtube.com/watch?v=xSYf8I7j0Cw")
              }
            >
              National Wellness Week: Focus on Occupational Wellness!
            </Text>
            </View>
          );
        }
        //};

        console.log("factor", wellnessFactor); // wellnessFactor is factor name
        console.log("factorValueProperty", wellnessFactorRating); //wellnessFactorRating shows number value of rating
      }
      // </View>
    });
  };

  return (
    <View>
      {/* <Text>Resources</Text> */}
      {/* <Text>{JSON.stringify(factorValue)}</Text> */}
      {showValues()}
    </View>
  );
}

export default Resources;

const styles = StyleSheet.create({
  header:{
    
    color: 'black',
    fontFamily: 'AmericanTypewriter-Bold',
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',


  },
  body:{
    
    color: 'black',
    fontFamily: 'AmericanTypewriter-Bold',
    fontSize: 18,
    textAlign: 'center',
    justifyContent: 'center',
  },
  Financialbackground:{
    flex:5,
    backgroundColor: "#ffb142",
  },
  Enviornmentalbackground:{
    
    backgroundColor: "#6ab04c",
  },
  Socialbackground:{
    
    backgroundColor: "#ffb8b8",
  },
  Physicalbackground:{
    height:300,
    backgroundColor:  "#b33939",
  },
  Intellectualbackground:{
    
    backgroundColor: "#079992",
  },
  Emotionalbackground:{
    
    backgroundColor: "#c56cf0",
  },
 
  Spiritualbackground:{
    
    backgroundColor: "#ffdd59",
  },
  Occupationalbackground:{
    
    backgroundColor: "#1e3799",
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  video: {
    alignSelf: 'center',
    width: 320,
    height: 200,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
