import React from 'react';
import {StyleSheet, View, Text } from 'react-native';
import MapView from 'react-native-maps';

export default function Business  ()  {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
    </View>
  );

  // state = {
  //   markers: [
  //     {
  //       coordinate: {
  //         latitude:20.3484,
  //         longitude: 57.5522
  //       }

  //     }
     

  //   ]

  // }
};

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },
 
});
