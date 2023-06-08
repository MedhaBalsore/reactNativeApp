import React from 'react';
import { View, Text, Button } from 'react-native';

const Sports = ({navigation}) => {
  return (
    <View>
      <Text style={{fontsize: 30, fontWeight: 'bold'}}>the sports screen tab</Text>
      <Button>Report</Button>

    </View>
  );
};

export default Sports;
