import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { useEffect, useState } from "react/cjs/react.development";
import axios from "axios";

import AppButton from "./app/components/AppButton";
import { BarChart } from "react-native-chart-kit";

const AdminScreen = ({ navigation }) => {
  //state is telling react to look at the most current changes
  const [aggregatedData, setAggregatedData] = useState([]);

  //useEffect handles componenentDidMount, componentDidUpdate, componentWillUnmount
  useEffect(() => {
    getFactorAggregation();
  }, []);

  const getFactorAggregation = (_) => {
    axios.get("http://127.0.0.1:19002/CCSUWellness/admin")
      .then((response) => {
        console.log("resp", response);
        setAggregatedData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log("ag", aggregatedData);
  let factorId = [];
  let valueList = [];

  for (var i = 0; i < aggregatedData.length; i++) {
    factorId.push(aggregatedData[i]._id);
    valueList.push(aggregatedData[i].value);
  }
  const chartData = {
    labels: factorId,
    datasets: [
      {
        data: valueList,
      },
    ],
  };

  console.log(factorId, valueList);
  return (
    <View style={styles.container}>
      <Text style={styles.header}> Aggregated Data</Text>

      <BarChart
        data={chartData}
        width={Dimensions.get("window").width} // from react-native
        height={500}
        contentInset={{ top: 0, bottom: 0, left: 0, right: 0 }}
        absolute
        chartConfig={{
          backgroundColor: "#0837c4",
          backgroundGradientFrom: "#A7C7E7",
          backgroundGradientTo: "#efefef",
          decimalPlaces: 0, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          fillShadowGradient: "blue",
          fillShadowGradientOpacity: 8,
          barPercentage: 0.5,

          propsForVerticalLabels: {
            textAnchor: "start",
          },
        }}
        style={{
          paddingBottom: 20,
        }}
      />
      <AppButton
        style={styles.button}
        title="Logout"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginVertical: 8,

    paddingBottom: 10,
    alignItems: "center",
  },
  header: {
    paddingTop: 30,
    fontSize: 20,
    paddingBottom: 30,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
export default AdminScreen;
