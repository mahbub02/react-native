import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux';
class LoginInputs extends Component {
	constructor(props) {
	  super(props);
	  alert(this.props.welcometext);
	}
   state = {
      email: '',
      password: ''
   }
   handleEmail = (text) => {
      this.setState({ email: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }
   login = (email, pass) => {
      alert('email: ' + email + ' password: ' + pass)
   }
   goToSignup= () => {
   	Actions.signup({welcometext: 'Hello World!'});
   }
   

   render(){
   	const goToSignup = () => Actions.signup({welcometext: 'Hello World!'}); 
      return (

         <View style = {styles.container}>
               	<View >
               	<Text> {this.props.welcometext} </Text>
            	</View>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>
               
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.email, this.state.password)
               }>
               <Text style = {styles.submitButtonText}> Login </Text>
            </TouchableOpacity>
            <TouchableOpacity
               style = {styles.signupButton}
               onPress = {
                  () => this.goToSignup()
               }>
               <Text style = {styles.submitButtonText}> Signup </Text>
            </TouchableOpacity>
            
         </View>
      )
   }
}
export default LoginInputs

LoginInputs.defaultProps = {
      welcometext: "sadia"
   };

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   signupButton: {
      backgroundColor: 'red',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   }
})