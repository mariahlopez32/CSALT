import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Modal,
  Pressable,
  TouchableOpacity,
} from "react-native";
import Slider from "@react-native-community/slider";
import Circle from "./app/components/Circle";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PieChart } from "react-native-svg-charts";
import "react-native-svg";
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
    width: 225,
    flexDirection: "row",
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
    padding: 10,
    elevation: 2,
    marginBottom: 10,
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
});

const socialFactors = [
  {
    factor: "Financial",
    color: "#ffb142",
    statement:
      "Unwell- I am struggling with finances and do not know how to build better financial habits.\n \nNeutral- I am okay with finances, but I want to build better spending/saving habits.\n \nWell- I have developed good spending/saving habits, and currently feel secure in my financial wellness.",
  },
  {
    factor: "Environmental",
    color: "#6ab04c",
    statement:
      "Uwell- I do not feel my environment supports my overall personal wellness. \n \nNeutral- Sometimes my environment supports my personal wellness and goals.\n \nWell- My environment supports my personal wellness and goals the majority of the time.",
  },
  {
    factor: "Social",
    color: "#ffb8b8",
    statement:
      "Unwell- I have little to no friends and/or do not prioritize socializing.\n \nNeutral- I have a few close friends, but I am looking to expand my social circle and am not sure how to. \n \nWell- I have friends and prioritize being social to have a balanced personal wellness. ",
  },
  {
    factor: "Physical",
    color: "#b33939",
    statement:
      "Unwell- I am not satisfied with how I physically take care of my body via nutrition, exercise, and/or sleep.\n \nNeutral- I make efforts to physically care for myself via my nutrition, sleep, and/or exercise, but would like to learn more.\n \nWell- I am happy with how I maintain my physical wellness through a balance of nutrition, exercise, and sleep.",
  },
  {
    factor: "Intellectual",
    color: "#079992",
    statement:
      "Unwell- I am struggling in my academics, but do not know where to start.\n \nNeutral- I do alright by my academics, but I feel I could be doing more or would like more resources. \n \nWell- I am happy with my academic performance and feel that my current study habits set me up for success. ",
  },
  {
    factor: "Emotional",
    color: "#c56cf0",
    statement:
      "Unwell- I feel that my emotional wellness is struggling, and would like a better understanding of resources\n \nNeutral- My emotional wellness is okay, but I’d like to continue to grow.\n \nWell- I am emotionally well and am in touch with my own emotional needs and resources.",
  },
  {
    factor: "Spiritual",
    color: "#ffdd59",
    statement:
      "Unwell- I am at odds with my spirituality, causing unrest.\n \nNeutral- I am somewhat or not spiritual but would like to learn more.\n\nWell- I am at peace with my spirituality and engage with resources to connect with my community.",
  },
  {
    factor: "Occupational",
    color: "#1e3799",
    statement:
      "Unwell- I am not happy or fulfilled by my current position or my activities outside of work.\n \nNeutral- I like where I am at professionally, but I’d like to continue to grow in my outside activities. \n \nWell- I am fulfilled professionally and personally by my occupation and outside activities.",
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
            style={{ width: 200, height: 80 }}
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
          <View style={styles.labelUnwell}>
            <Text>Unwell</Text>
          </View>
          <View>
            <Text>Well</Text>
          </View>
        </View>
        <View>
          <Text style={{ paddingLeft: "8%", paddingRight: "8%" }}>
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
        {!selected && (
          <View style={styles.factorsContainer}>{factorsRow1}</View>
        )}
        {!selected && (
          <View style={styles.factorsContainer}>{factorsRow2}</View>
        )}
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() =>
            navigation.navigate("Resources", { factorValue: factorValues })
          }
        >
          <Text style={styles.textStyle}>See Resources</Text>
        </Pressable>

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
