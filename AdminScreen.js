import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { useEffect, useState } from "react/cjs/react.development";
import axios from "axios";

import { BarChart } from "react-native-chart-kit";


const AdminScreen = () => {
  //state is telling react to look at the most current changes
  const [aggregatedData, setAggregatedData] = useState([]);

  //useEffect handles componenentDidMount, componentDidUpdate, componentWillUnmount
  useEffect(() => {
    getFactorAggregation();
  }, []);

  const getFactorAggregation = (_) => {
    axios
      .get("http://10.0.2.2:19002/CCSUWellness/admin")
      .then((response) => {
        console.log("resp", response);
        setAggregatedData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log("ag", aggregatedData);
  let factorId= []; 
  let valueList= [];

  for (var i = 0; i < aggregatedData.length; i++){
      factorId.push(aggregatedData[i]._id);
      valueList.push(aggregatedData[i].value);
  }
  const chartData ={
      labels: factorId,
      datasets: [
          {
            data: valueList
          }
        ],
  };
  console.log(factorId,valueList)
  return(
  <View style={styles.container}>
          <BarChart 
            data={chartData}
            width={Dimensions.get("window").width} // from react-native
            height={500}
    //yAxisLabel={'value'}
    verticalLabelRotation={90}
    contentInset={{top:0, bottom:0, left:0, right:0}}
    absolute
    chartConfig={{
      backgroundColor: "#0837c4",
      backgroundGradientFrom: "#A7C7E7",
      backgroundGradientTo: "#efefef",
      decimalPlaces: 0, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      fillShadowGradient: 'blue',
      fillShadowGradientOpacity:8,
//     backgroundGradientFrom: "#1E2923",
//   backgroundGradientFromOpacity: 0,
//   backgroundGradientTo: "#08130D",
//   backgroundGradientToOpacity: 0.5,
  //color: (opacity = 3) => `rgba(26, 255, 146, ${opacity})`,
//   strokeWidth: 2, // optional, default 3
   barPercentage: 0.5,

   //useShadowColorFromDataset: false,
      
      propsForVerticalLabels: {
          //x: 5,
          textAnchor: "start"
          
      }
    //   labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    //     style: { 
    //     borderRadius: 16,
    //     marginLeft: 100 
    //    },
    }} DO NOT COMMENT THIS LINE
    style={{ 
      //marginVertical: 8, 
     // borderRadius: 16,
      //marginLeft: -2
    }} 
  />
      </View>

  )}


  



const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        marginVertical: 8,
        marginTop: 40,
        //marginRight: 50,
        //borderWidth: 3,

    },
    
})
export default AdminScreen;
 
  
