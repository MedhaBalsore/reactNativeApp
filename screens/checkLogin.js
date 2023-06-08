import React from 'react';
import { useState } from 'react';
import { doc, getDoc } from "firebase/firestore";
import { db } from "./components/config";
import { Text, View, Button, FlatList,Pressable } from 'react-native';

const CheckLogin = ({navigation}) => {

  const [country, setCountry] = useState(null)
  const [email, setEmail] = useState(null)
  const [number, setNumber] = useState(null)
  const [username, setUsername] = useState(null)

// function create retrieve data to the firebase database
  function verify (){

    try {
      const docum = doc(db, "users", "L2");
      getDoc(docum)
      .then((doc) => {
    setNumber(doc.data().Number);
        setCountry(doc.data().Country);
        setUsername(doc.data().Username);
        setEmail(doc.data().Email);
  console.log(username)
  
      })
  }catch(error){
      console.log(error)
  }
    
    

  }


  return (
    <View>
      <Text style={{fontsize: 30, fontWeight: 'bold'}}>the sports screen tab</Text>   
      <Button title="submit" onPress={verify} />
    </View>
  );


};




export default CheckLogin;
/*
const docRef = doc(db, "users", "L2");
    const docSnap = getDoc(docRef);
    
    if (docSnap.exists()) {
      setNumber(docSnap.data().Number);
      setCountry(docSnap.data().Country);
      setUsername(docSnap.data().Username);
      setEmail(docSnap.data().Email);
    }
*/