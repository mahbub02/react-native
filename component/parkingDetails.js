import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Picker } from 'react-native'
import { Actions } from 'react-native-router-flux';

class ParkingDetails extends Component {
  state = {
      data: {},
      duration: 15
   }
  componentDidMount = () => {
    alert(this.props.Id);
    let url='http://ezpark.azurewebsites.net/api/parkingspots/'+this.props.Id;
      fetch(url, {
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
  reserveIt = () => {
    
      let currentTime = new Date();
      let endtime = new Date();
      endtime.setMinutes(endtime.getMinutes() + parseInt(this.state.duration));
      fetch('http://ezpark.azurewebsites.net/api/Reservations/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
         ParkingSpotId: this.props.Id,
         UserId: global.user.id,
         StartTime: currentTime.toISOString(),
         EndTime: endtime.toISOString()
        })
      })
      .then((response) => response.json())
      .then((responseJson) => {
         
         if(responseJson.Message){
             alert("Service unavailable, please try again later");
         } else {
            alert("Reservation is successful."+ responseJson.Id);
            Actions.reservationDetails({Id: responseJson.Id});
         }
      })
      .catch((error) => {
         alert("You have another active reservation, please check your reservation");
      });
   }
   render(){
      return( 
      <View > 
         <Text> {this.props.landingMessage} </Text>
         <View> 
             <Text style = {styles.text}>
                  {global.user.email}
            </Text>
         </View>
          <View> 
             <Text style = {styles.text}>
                  {this.state.data.Name}
            </Text>
         </View>
         <View> 
             <Text style = {styles.text}>
                  {this.state.data.Address}
            </Text>
         </View>
         <View> 
             <Text style = {styles.text}>
                  {this.state.data.City}
            </Text>
         </View>
         <View> 
             <Text style = {styles.text}>
                  {this.state.data.ZipCode}
            </Text>
         </View>
         <View> 
             <Text style = {styles.text}>
                  {this.state.data.NumberOfSpace}
            </Text>
         </View>
         <View> 
             <Text style = {styles.text}>
                  {this.state.data.NumberOfAvailableParking}
            </Text>
         </View>
         <Picker
           selectedValue={this.state.duration} onValueChange={(itemValue, itemIndex) => this.setState({duration: itemValue})}>
           <Picker.Item label="15 minute" value="15" />
           <Picker.Item label="30 minute" value="30" />
           <Picker.Item label="1 Hour" value="60" />
           <Picker.Item label="2 Hour" value="120" />
           <Picker.Item label="3 hours" value="180" />
           <Picker.Item label="8 Hour" value="480" />
         </Picker>

         <View> 
                  <TouchableOpacity
                     
                     style = {styles.container}
                     onPress = {() => this.reserveIt()}>
                     
                     <Text style = {styles.text}>
                        "RESERVE"
                     </Text>
                  </TouchableOpacity>
         
         </View>
      </View>

      )
   }
}
export default ParkingDetails;

const styles = StyleSheet.create ({
   container: {
      padding: 10,
      marginTop: 3,
      backgroundColor: '#d9f9b1',
      alignItems: 'center',
   },
   text: {
      color: '#4f603c'
   }
})
ParkingDetails.defaultProps = {
      landingMessage: "Parking details"
};
