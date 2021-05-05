import React, { useEffect } from "react";
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
  Dimensions,
  Platform,
  ScrollView,
} from "react-native";
import { PieChart } from "react-native-chart-kit";

import AppButton from "./app/components/AppButton";

const styles = StyleSheet.create({
  factorsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: "6%",
  },
});

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

const SurveyResults = ({ route, navigation }) => {
  const { factorValue } = route.params;

  let { width, height } = Dimensions.get("window");

  console.log("FACTOR VALUES: ", factorValue);

  const financeValue = factorValue.Financial;

  const financialData = [
    {
      // The actual value
      name: "Financial",
      population: financeValue,
      color: "#ffb142",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      // White space
      name: "White space",
      population: 5 - financeValue,
      color: "transparent",
      legendFontColor: "transparent",
      legendFontSize: 15,
    },
  ];

  const environmentalValue = factorValue.Environmental;

  const environmentalData = [
    {
      // The actual value
      name: "Environmental",
      population: environmentalValue,
      color: "#6ab04c",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      // White space
      name: "White space",
      population: 5 - environmentalValue,
      color: "transparent",
      legendFontColor: "transparent",
      legendFontSize: 15,
    },
  ];

  const socialValue = factorValue.Social;

  const socialData = [
    {
      // The actual value
      name: "Social",
      population: socialValue,
      color: "#ffb8b8",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      // White space
      name: "White space",
      population: 5 - socialValue,
      color: "transparent",
      legendFontColor: "transparent",
      legendFontSize: 15,
    },
  ];

  const physicalValue = factorValue.Physical;

  const physicalData = [
    {
      // The actual value
      name: "Physical",
      population: physicalValue,
      color: "#b33939",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      // White space
      name: "White space",
      population: 5 - physicalValue,
      color: "transparent",
      legendFontColor: "transparent",
      legendFontSize: 15,
    },
  ];

  const intellectualValue = factorValue.Intellectual;

  const intellectualData = [
    {
      // The actual value
      name: "Intellectual",
      population: intellectualValue,
      color: "#079992",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      // White space
      name: "White space",
      population: 5 - intellectualValue,
      color: "transparent",
      legendFontColor: "transparent",
      legendFontSize: 15,
    },
  ];

  const emotionalValue = factorValue.Emotional;

  const emotionalData = [
    {
      // The actual value
      name: "Emotional",
      population: emotionalValue,
      color: "#c56cf0",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      // White space
      name: "White space",
      population: 5 - emotionalValue,
      color: "transparent",
      legendFontColor: "transparent",
      legendFontSize: 15,
    },
  ];

  const spiritualValue = factorValue.Spiritual;

  const spiritualData = [
    {
      // The actual value
      name: "Spiritual",
      population: spiritualValue,
      color: "#ffdd59",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      // White space
      name: "White space",
      population: 5 - spiritualValue,
      color: "transparent",
      legendFontColor: "transparent",
      legendFontSize: 15,
    },
  ];

  const occupationalValue = factorValue.Occupational;

  const occupationalData = [
    {
      // The actual value
      name: "Occupational",
      population: occupationalValue,
      color: "#1e3799",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      // White space
      name: "White space",
      population: 5 - occupationalValue,
      color: "transparent",
      legendFontColor: "transparent",
      legendFontSize: 15,
    },
  ];

  if (Platform.OS === "web") {
    width = width / 4.0;
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.factorsContainer}>
          <PieChart
            data={financialData}
            width={width}
            height={200}
            chartConfig={chartConfig}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="15"
            hasLegend={true}
            center={[4, 0]}
            absolute
          />

          <PieChart
            data={environmentalData}
            width={width}
            height={200}
            chartConfig={chartConfig}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="3"
            hasLegend={true}
            center={[4, 0]}
            absolute
          />
          <PieChart
            data={socialData}
            width={width}
            height={200}
            chartConfig={chartConfig}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="3"
            hasLegend={true}
            center={[4, 0]}
            absolute
          />
          <PieChart
            data={physicalData}
            width={width}
            height={200}
            chartConfig={chartConfig}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="3"
            hasLegend={true}
            center={[4, 0]}
            absolute
          />
        </View>
        <View style={styles.factorsContainer}>
          <PieChart
            data={intellectualData}
            width={width}
            height={200}
            chartConfig={chartConfig}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="3"
            hasLegend={true}
            center={[4, 0]}
            absolute
          />
          <PieChart
            data={emotionalData}
            width={width}
            height={200}
            chartConfig={chartConfig}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="3"
            hasLegend={true}
            center={[4, 0]}
            absolute
          />
          <PieChart
            data={spiritualData}
            width={width}
            height={200}
            chartConfig={chartConfig}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="3"
            hasLegend={true}
            center={[4, 0]}
            absolute
          />
          <PieChart
            data={occupationalData}
            width={width}
            height={200}
            chartConfig={chartConfig}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="3"
            hasLegend={true}
            center={[4, 0]}
            absolute
          />
        </View>
      </View>
      <AppButton
        style={styles.buttonsContainer}
        title="View Resources"
        onPress={() => navigation.navigate("Resources")}
      />
    </ScrollView>
  );
};

export default SurveyResults;
