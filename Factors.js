import React, { useState, useEffect, useContext } from "react";
import {
  View,
  StyleSheet,
  Text,
  Modal,
  Pressable,
  TouchableOpacity,
  Button,
} from "react-native";
import AppButton from "./app/components/AppButton";
import Slider from "@react-native-community/slider";
import Circle from "./app/components/Circle";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PieChart } from "react-native-svg-charts";
import "react-native-svg";
import AppContext from './AppContext';
import login from './LoginScreen';
import axios from "axios";
import ErrorMessage from './app/components/ErrorMessage';
//impotrt ToggleSwitch from "toggle-switch-react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: "6%",
  },
  factorsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  labelsContainer: {
    width: 400,
    justifyContent: "center",
    flexDirection: "row",
    paddingBottom: "5%",
    paddingTop: "0%",
  },
  labelUnwell: {
    flex: 1,
    marginBottom: 50,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 20,
    elevation: 2,
    marginBottom: 10,
    marginTop:20,
  
   
    width: "90%"
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  }, 
  textStyleLogout: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    padding: 20,
    width: "100%",
  },

  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  circleShape: {
    width: 150,
    height: 150,
    borderRadius: 50,
    backgroundColor: "#9c88ff",
    justifyContent: "center",
    alignItems: "center",
  },
  circleText: {
    alignSelf: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
    
  },
});

const socialFactors = [
  {
    factor: "Financial",
    color: "#ffb142",
    statement:
      "(1) Unwell - I am struggling with finances and do not know how to build better financial habits. Every semester I run out of money with 4-5 weeks to go.\n\n(2) Somewhat Unwell – I struggle financially, often overspending one week and then having to make it up over the next 2 weeks. I never have a budget.\n\n(3) Neutral- I am okay with finances, but I want to build better spending/saving habits. I have a budget but am always having to take money out of savings every few weeks to cover credit card bills.\n\n(4) Somewhat Well – I have enough spending money so I can get food on the weekends and pay my bills. I wish I made more or had a better budget system. Grants and loans cover my tuition.\n\n(5) Well- I have developed good spending/saving habits, and currently feel secure in my financial wellness.",
  },
  {
    factor: "Environmental",
    color: "#6ab04c",
    statement:
      "(1) Unwell - I do not feel my environment supports my overall personal wellness. I don’t feel well most of the time and have trouble sleeping and eat unhealthy foods at the dining hall. I don’t really feel safe.\n\n(2) Somewhat Unwell – I wake up feeling a little energetic, but it never lasts the whole day. My sleep is disrupted most nights and I eat too much junk food and then eat healthy for a day or two.\n \n(3) Neutral- Sometimes my environment supports my personal wellness and goals. I can get enough sleep but feel my allergies kick in. I don’t like the way my room looks. I feel safe except at night.\n\n(4) Somewhat Well – I have been able to adjust to my new room. I open the window 3 inches to get the temperature right for sleeping, but I still find myself cleaning up two days after the dishes get crusty at times.\n\n(5) Well- My environment supports my personal wellness and goals the majority of the time. I can get enough sleep and eat well with the occasional pizza splurge. I have made changes in my life to feel safe.",
  },
  {
    factor: "Social",
    color: "#ffb8b8",
    statement:
      "(1) Unwell - I have little to no friends and/or do not prioritize socializing. \n \n(2) Somewhat Unwell – I have friends from High School but have not made any here. I just don’t know how to meet people.\n \n(3) Neutral- I have a few close friends, but I am looking to expand my social circle and am not sure how to do that at the university.\n\n(4) Somewhat Well – I have my close friends and some acquaintances that I hang out with on the weekends. We don’t do a lot so I joined a club on campus, thinking about joining a fraternity/sorority.\n\n(5) Well- I have supportive friends and prioritize spending time with them so I can have a balanced life. I spend time with my club, especially helping out during events. I am satisfied with my social life.",
  },
  {
    factor: "Physical",
    color: "#b33939",
    statement:
      "(1) Unwell - I am not satisfied with how I physically take care of my body via nutrition, exercise, and/or sleep. \n \n(2) Somewhat Unwell – I am not as bad as I have been in the past, but I often pass on physical activity to get academic work done.\n \n(3) Neutral- I make efforts to physically care for myself via my nutrition, sleep, and/or exercise, but would like to learn more.\n \n(4) Somewhat Well – I do fairly well with my sleep, nutrition and am working on more physical activity. \n \n(5) Well- I am happy with how I maintain my physical wellness through a balance of nutrition, exercise, and sleep, along with my academic work.",
  },
  {
    factor: "Intellectual",
    color: "#079992",
    statement:
      "(1) Unwell - I am struggling in my academics, and do not know where to start. I am lost. \n \n(2) Somewhat Unwell – I seem to have a slow decline every semester. I start off well but then have difficulty understanding the professor and it snowballs so my anxiety escalates for finals. \n \n(3) Neutral- I do alright by my academics, but I feel I could be doing more. I pass my classes, but I keep getting in my own way. \n \n(4) Somewhat Well – I have a decent grade point average, one I can live with, but I don’t do anything extra. I still pull too many all-nighters. \n \n(5) Well- I am happy with my academic performance and feel that my current study habits set me up for success.",
  },
  {
    factor: "Emotional",
    color: "#c56cf0",
    statement:
      "(1) Unwell - I feel that I am struggling emotionally. I would like a better understanding of my emotions so I can change their negative impact on my life. \n \n(2) Somewhat Unwell – I know I haven’t been in a good mood for quite a while, I have just been under so much stress. I do have better days, just not that many. \n \n(3) Neutral- My emotional wellness is okay but being content only sometimes is not enough. I’d like to continue to grow. \n \n(4) Somewhat Well – I feel pretty good about my life most days. I know others have it much tougher than I do, but I have hopes I can improve my mood. \n \n(5) Well- I am emotionally well and am in touch with my own emotional needs and resources that help me.",
  },
  {
    factor: "Spiritual",
    color: "#ffdd59",
    statement:
      "(1) Unwell- I am at odds with my spirituality; I am not connected to my community and this is causing unrest. \n \n(2) Somewhat Unwell – I am struggling with making a connection to my community and my frustration has left me alone most of the time. \n \n(3) Neutral- I am not sure of my spirituality, but would like to learn more. I am connected to my community but it is not quite fulfilling. \n \n(4) Somewhat Well – I have made connections with my community and at times they are fulfilling, but my spirituality could improve. \n \n(5) Well- I am at peace with my spirituality and engage with resources to connect with my community.",
  },
  {
    factor: "Occupational",
    color: "#1e3799",
    statement:
      "(1) Unwell - I am not happy or fulfilled by my current position or my activities outside of work. \n\n(2) Somewhat Unwell – I have a part-time job I hate that gives me a little spending money after I pay my bills, but it is never enough. I want to have something else to do but I don’t know what.\n\n(3) Neutral- I like where I am at academically, but I’d like to continue to do more in my major, like an internship; maybe do more in outside activities.\n\n(4) Somewhat Well – I am doing well academically and plan on a study abroad semester. I have a part-time job on campus that lets me save money and doesn’t interfere with my academics.\n\n(5) Well- I am right where I need to be academically and personally. I am enjoying my classes and outside activities like clubs, SGA, hobbies, groups.",
  },
];

const Factors = ({ navigation }) => {
  const [selected, setSelected] = useState("");
  const [sliderValue, setSliderValue] = useState(5);
  const [factorValues, setFactorValues] = useState(
    socialFactors.reduce(
      (acc, socialFactor) => ({
        ...acc,
        [socialFactor.factor]: 5,
      }),
      {}
    )
  );
    const {user, token} = useContext(AppContext)
    console.log('user', user)
    console.log(token)
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (selected) {
      setSliderValue(factorValues[selected]);
    }
  }, [selected]);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("factorValues");
      if (jsonValue != null) {
        setFactorValues(JSON.parse(jsonValue));
      }
    } catch (e) {
      console.log(e);
    }
  };


  //const {setToken, setUser} = useContext(AppContext)
  //const [setErrorMessage] = useState('');
  //sending the factors to database
  const handleSaveFactorResponse = async () => {
    const payload = {
      userId: user._id, 
      factor: selected,
      value: sliderValue,
    }
    console.log(payload)
    axios.post("http://localhost:19009/CCSUWellness/FactorResponse", payload)
    .then(response => {
      setUserId(response.data.userId)
      setFactor(response.data.factor)
      setValues(response.data.value)
    })
    .catch(err => {
      console.log(err)
    })
  }
// what I have between the code is not working
  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("factorValues", jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  const showFactors = () => {
    return socialFactors.map((socialFactor) => {
      const { factor, color } = socialFactor;
      return <Circle factor={factor} color={color} onPress={setSelected} />;
    });
  };
  const factorsRow2 = showFactors();
  const factorsRow1 = factorsRow2.splice(0, 4);
  console.log(factorValues);
  if (selected) {
    return (
      <View style={styles.container}>
        <Text
          style={{ width: "100%", textAlign: "center", fontWeight: "bold" }}
        >
          {selected}
        </Text>

        <View>
          <Slider
            style={{ width: 350, height: 80 }}
            minimumValue={0}
            maximumValue={4}
            minimumTrackTintColor="#1B9CFC"
            maximumTrackTintColor="#1e272e"
            value={sliderValue}
            onValueChange={setSliderValue}
            step={1}
          />
        </View>
        <View style={styles.labelsContainer}>
          <View>
            <Text>1</Text>
          </View>
          <View style={{ paddingLeft: "19%" }}>
            <Text>2</Text>
          </View>
          <View style={{ paddingLeft: "19%" }}>
            <Text>3</Text>
          </View>
          <View style={{ paddingLeft: "19.1%", paddingRight: "19.1%" }}>
            <Text>4</Text>
          </View>
          <View>
            <Text>5</Text>
          </View>
        </View>
        <View>
          <Text style={{ paddingLeft: "10%", paddingRight: "10%" }}>
            {
              socialFactors.filter((item) => item.factor === selected)[0][
                "statement"
              ]
            }
          </Text>
        </View>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                setFactorValues({
                  ...factorValues,
                  [selected]: sliderValue,
                });
                setSelected("");
                storeData({
                  ...factorValues,
                  [selected]: sliderValue,
                });
                  //what I added, not working
                  handleSaveFactorResponse()
              }}
            >
              <Text style={styles.textStyle}>Submit</Text>
            </Pressable>
          </View>
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text>Hi {user.fullName}</Text>
        {!selected && (
          <View style={styles.factorsContainer}>{factorsRow1}</View>
        )}
        {!selected && (
          <View style={styles.factorsContainer}>{factorsRow2}</View>
        )}
        {/* <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() =>
            navigation.navigate("Resources", { factorValue: factorValues })
          }
        >
          <Text style={styles.textStyle}>See Resources</Text>
        </Pressable>
        <Pressable 
          style={[styles.button, styles.buttonClose]}
          onPress={() =>
            navigation.navigate("Login")
          }
        >
          <Text style={styles.textStyle}>Logout</Text>
        </Pressable> */}
        <AppButton style={styles.buttonsContainer}
          title="View Resources"
          onPress={() => navigation.navigate("Resources", { factorValue: factorValues })}
        />
        <AppButton style={styles.buttonsContainer}
          title="Logout"
          onPress={() => navigation.navigate("Login")}
        />
        

        <View style={{ height: 200 }}>
          <PieChart
            innerRadius={0}
            data={[
              { value: 30, svg: { fill: "#1B9CFC" }, key: "slice-1" },
              { value: 70, svg: { fill: "#feffbd" }, key: "slice-2" },
            ]}
          />
        </View>
      </View>
    );
  }
};
export default Factors;
