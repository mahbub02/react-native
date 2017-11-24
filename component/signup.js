import React from 'react';
import SignupInputs from './signupInputs.js'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
const Signup = () => {
   return (
      
        <View style = {{backgroundColor: 'black', flex: 1}}> 
         <Text style={{ fontSize: 20, color: '#FDC02F',  padding: 10,paddingTop: 40, fontFamily: 'Cochin', textAlign:'center'}}> 
         Please enter these following information to signup </Text>
     	<SignupInputs />
      </View>
   )
}
export default Signup