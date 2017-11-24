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
      <View style={styles.container}> 
         <View> 
            <TouchableOpacity
               
               style = {styles.reservationsButton}
               onPress = {() => this.reservations()}>
               
               <Text style = {styles.reservationsButtonText}>
                  ACTIVE RESERVATION
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
                     
                     <Text style = {styles.reservationsButtonText}>
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
      backgroundColor: 'black',
      flex:1
      
   },
   reservationsButtonText: {
      color: 'black',
      textAlign: 'center',
      fontWeight: 'bold',
   },
   reservationsButton: {
     backgroundColor: '#FDC02F',
      padding: 10,
     

      margin: 15,
      height: 40,
   }
})
Parkings.defaultProps = {
      landingMessage: "Listing all your nearby parkings"
};
