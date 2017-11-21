import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux';

class Parkings extends Component {
  state = {
      data: []
   }
  componentDidMount = () => {
      fetch('http://ezpark.azurewebsites.net/api/parkingspots?lat=30.4006491&lng=-96.0780337', {
         method: 'GET'
      })
      .then((response) => response.json())
      .then((responseJson) => {
         console.log(responseJson);
         this.setState({
            data: responseJson
         })
      })
      .catch((error) => {
         console.error(error);
      });
   }
	constructor(props) {
	  super(props);
	 
	}
  alertItemName = (item) => {
    
      Actions.parkingDetails({Id: item.Id});

   }
   reservations = (item) => {
    
       Actions.reservationDetails();

   }
   render(){
      return( 
      <View > 
      <View> 
                  <TouchableOpacity
                     
                     style = {styles.reservations}
                     onPress = {() => this.reservations()}>
                     
                     <Text style = {styles.text}>
                        ==
                     </Text>
                  </TouchableOpacity>
         
         </View>
         <Text> {this.props.landingMessage} </Text>
         <View> 
            {
               this.state.data.map((item, index) => (
                  <TouchableOpacity
                     key = {item.Id}
                     style = {styles.container}
                     onPress = {() => this.alertItemName(item)}>
                     
                     <Text style = {styles.text}>
                        {item.Name}
                     </Text>
                  </TouchableOpacity>
               ))
            }
         </View>
      </View>

      )
   }
}
export default Parkings;

const styles = StyleSheet.create ({
   container: {
      padding: 10,
      marginTop: 3,
      backgroundColor: '#d9f9b1',
      alignItems: 'center',
   },
   text: {
      color: '#4f603c'
   },
   reservations: {
    backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
      width: 30,
      color: '#4f603c'
   }
})
Parkings.defaultProps = {
      landingMessage: "Listing all your nearby parkings"
};
