import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux';
class LoginInputs extends Component {
	constructor(props) {
	  super(props);

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
   login = (email, password) => {
      let url ='http://ezpark.azurewebsites.net/api/Users?email='+email+'&password='+password;
     
      fetch(url, {
         method: 'GET'
      })
      .then((response) =>
         response.json()
      )
      .then((responseJson) => {
         if(responseJson && responseJson.Id) {
            Actions.parkings({landingMessage: 'Listing your near by parking spots'});
         } else{
            alert("Invalid email or password");
         }
      })
      .catch((error)=> {
          alert("Invalid email or password");
      });
   }

   goToSignup= () => {
   	Actions.signup({landingMessage: 'welcome to ezpark'});
   }

   render(){
   	const goToSignup = () => Actions.signup({welcometext: 'Hello World!'}); 
      return (

         <View style = {styles.container}>

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