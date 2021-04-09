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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 100
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
    marginBottom: 250,
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
    marginBottom: 10
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
  { factor: "Financial", color: "#ffb142" },
  { factor: "Environmental", color: "#6ab04c" },
  { factor: "Social", color: "#ffb8b8" },
  { factor: "Physical", color: "#b33939" },
  { factor: "Intellectual", color: "#079992" },
  { factor: "Emotional", color: "#c56cf0" },
  { factor: "Spiritual", color: "#ffdd59" },
  { factor: "Occupational", color: "#1e3799" },
];

const Factors = () => {
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
        <Text style={{ width: "100%", textAlign: "center" }}>{selected}</Text>

        <Slider
          style={{ width: 200, height: 80 }}
          minimumValue={0}
          maximumValue={10}
          minimumTrackTintColor="#1B9CFC"
          maximumTrackTintColor="#1e272e"
          value={sliderValue}
          onValueChange={setSliderValue}
          step={1}
        />
        <View style={styles.labelsContainer}>
          <View style={styles.labelUnwell}>
            <Text>Unwell</Text>
          </View>
          <View>
            <Text>Well</Text>
          </View>
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