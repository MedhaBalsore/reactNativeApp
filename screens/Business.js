import React from 'react';
import {SafeAreaView, TextInput, StyleSheet} from 'react-native';

export default function Business() {
  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 20 }}>
      <TextInput
        placeholder="Search"
        clearButtonMode="always"
        style={styles.searchBox}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  searchBox: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: '#ccc',
    boderWidth: 1,
    borderRadius: 8,
  },
});