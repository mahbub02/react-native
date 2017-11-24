import React, { Component } from 'react'
import LoginInputs from './loginInputs.js'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

class Login extends Component {
	constructor(props) {
	  super(props);
	 
	}
   render(){
      return( 
      <View style = {{backgroundColor: 'black', flex: 1}}> 
         <Text style={{ fontSize: 20, color: '#FDC02F',  padding: 10,paddingTop: 40, fontFamily: 'Cochin', textAlign:'center'}}> {this.props.landingMessage} </Text>
     	 <LoginInputs />
      </View>)
   }
}
export default Login;

Login.defaultProps = {
      landingMessage: "WELCOME TO EZPARK"
};



