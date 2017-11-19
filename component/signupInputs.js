import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

class SignupInputs extends Component {
   state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phone: ''
   }
   handleFirstName = (text) => {
      this.setState({ firstName: text })
   }
   handleLastName = (text) => {
      this.setState({ lastName: text })
   }

   handleEmail = (text) => {
      this.setState({ email: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }
   handlePhone = (text) => {
      this.setState({ phone: text })
   }

   signup = (firstName, lastName, email, pass, phone) => {
      alert('firstName: ' + firstName +'lastName: ' + lastName +'email: ' + email + ' password: ' + pass+ ' phone: ' + phone)
   }
   render(){
      return (
         <View style = {styles.container}>
         <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "First Name"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleFirstName}/>
         <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Last Name"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleLastName}/>

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


            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Phone"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handlePhone}/>
               
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.signup(this.state.firstName,this.state.lastName, this.state.email, this.state.password, this.state.phone)
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
         </View>
      )
   }
}
export default SignupInputs

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
   submitButtonText:{
      color: 'white'
   }
})