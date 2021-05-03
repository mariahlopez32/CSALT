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
            height={300}
    //yAxisLabel={'value'}
    verticalLabelRotation={35}
    contentInset={{top:0, bottom:0, left:0, right:0}}
    absolute
    chartConfig={{
      backgroundColor: "#1cc910",
      backgroundGradientFrom: "#eff3ff",
      backgroundGradientTo: "#efefef",
      decimalPlaces: 0, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      //labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, COMMENT
    //   style: { COMMENT
    //     borderRadius: 16 COMMENT
    //   },
    }} DO NOT COMMENT THIS LINE
    // style={{ COMMENT
    //   marginVertical: 8, COMMENT
    //   borderRadius: 16 COMMENT
    // }} COMMENT UP TO HERE
  />
      </View>

  )}


  



const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        marginVertical: 8,
        marginTop: 40,
        marginRight: 50
        

    },
    
})
export default AdminScreen;
 
  
