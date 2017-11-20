import React, { Component } from 'react'
import LoginInputs from './loginInputs.js'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

class Login extends Component {
	constructor(props) {
	  super(props);
	 
	}
   render(){
      return( 
      <View > 
         <Text> {this.props.landingMessage} </Text>
     	 <LoginInputs />
      </View>)
   }
}
export default Login;

Login.defaultProps = {
      landingMessage: "Welcome to ezpark, please login"
};

