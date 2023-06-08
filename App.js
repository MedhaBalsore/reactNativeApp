// import necessary libraries
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import screens from folders
import React from 'react'
import All from './screens/All';
import Business from './screens/Business';
import Health from './screens/Health';
import Sports from './screens/Sports';
import Tech from './screens/Tech';
// import MapView from 'react-native-maps';


// define the component names as constant
const AllName = 'All';
const BusinessName = 'Business';
const SportsName = 'Sports';
const HealthName = 'Health';
const TechName = 'Tech';


const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <>
     {/* <View style={styles.container}>
      <MapView style={styles.map} />
    </View> */}

    <NavigationContainer>
    <Tab.Navigator 
    initialRouteName={AllName}
    screenOptions={  ({route})=> ({
     tabBarIcon: ({focused,color,size}) => {
        let iconName;
        let rn = route.name;
        if(rn === AllName){
          iconName = focused ? 'eye' : 'eye-off'
        } else if(rn === BusinessName){
          iconName = focused ? 'chatbubble' : 'chatbubble-outline'
        } else if(rn === HealthName){
          iconName = focused ? 'fitness' : 'fitness-outline'
        } else if(rn === TechName){
          iconName = focused ? 'cloud' : 'cloud-outline'
        } else if(rn === SportsName){
          iconName = focused ? 'baseball' : 'baseball-outline'
        }
        
        return <Ionicons name={iconName} size={size} color={color} />

      },
      tabBarActiveTintColor: 'brown',
      tabBarInactiveTintColor: 'grey',
      tabBarStyle: { height: 75, 
                     borderTopLeftRadius: 24,
                     borderTopRightRadius: 24,
                     borderLeftWidth: 0.2,
                     borderRightWidth: 0.2,
                    },
      tabBarLabelStyle: { 
      paddingBottom: 10,
       fontSize: 13,
      

       },

      


    })
    }
    
    >
      <Tab.Screen name={BusinessName} component={Business} />
      <Tab.Screen name={AllName} component={All} />
      <Tab.Screen name={HealthName} component={Health}/>
      <Tab.Screen name={TechName} component={Tech} />
      <Tab.Screen name={SportsName} component={Sports} />
    </Tab.Navigator>
   </NavigationContainer>
   </>

   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // map: {
  //   width: '100%',
  //   height: '100%',
  // },
 
});



function MyTabs() {
  return (
    <text></text>
    
  )
}
