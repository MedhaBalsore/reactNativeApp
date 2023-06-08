import React from 'react';
import { useState } from 'react';
import { doc, setDoc } from "firebase/firestore"; 
import { db } from "./components/config";

import { StyleSheet, Text, View, SafeAreaView, Button, Image } from 'react-native';
const Sports = ({navigation}) => {
const [username, setName] = useState('');
const [email, setEmail] = useState('');

// function create sends data to the firebase database
  function create (){
    setDoc(doc(db, "users", "L2"), {
      username: "username",
      email: "email",
      country: "USA",
      number: 123,
    }).then(() =>{
      console.log('data submitted');
    }).catch(() =>{
      console.log(error)
    });;
  }
//styfbuisceu

  return (
    <View>
      <Text style={{fontsize: 30, fontWeight: 'bold'}}>the sports screen tab</Text>   
      <Button title="submit" onPress={create} />
    </View>
  );


};

const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: '#fff',
   alignItems: 'center',
   justifyContent: 'center',
 },
 textBoxes: {
   width:'90%',
  
   padding: 12,
   borderColor: 'gray',
   borderWidth: 0.2,
   borderRadius: 10
 
 }
 
  });


export default Sports;
