import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Picker } from 'react-native'
import { Actions } from 'react-native-router-flux';

class ReservationDetails extends Component {
  state = {
      data: {},
      duration: 15
   }
  componentDidMount = () => {
    alert(this.props.Id);
    let url='http://ezpark.azurewebsites.net/api/Reservations?email='+global.user.email;
      fetch(url, {
         method: 'GET'
      })
      .then((response) => response.json())
      .then((responseJson) => {
         console.log(responseJson);
         this.setState({
            data: responseJson[0]
         })
      })
      .catch((error) => {
         console.error(error);
      });
   }
	constructor(props) {
	  super(props);
	 
	}
  cancelIt = () => {
      alert("");
      let currentTime = new Date();
      let endtime = new Date();
      endtime.setMinutes(endtime.getMinutes() + parseInt(this.state.duration));
      fetch('http://ezpark.azurewebsites.net/api/Reservations/', {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
         Id: this.state.Id,
         ParkingSpotId: this.state.ParkingSpotId,
         UserId: global.user.id,
         StartTime: this.state.StartTime,
         EndTime: this.state.EndTime
        })
      })
      .then((response) => response.json())
      .then((responseJson) => {
         
         if(responseJson.Message){
             alert("Service unavailable, please try again later");
         } else {
            alert("Reservation is successful."+ responseJson.Id);
            //Actions.login({landingMessage: 'Account successfully created. Please login'});
         }

         
         this.setState({
            data: responseJson
         })
      })
      .catch((error) => {
         alert(error);
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
                  {this.state.data.ParkingSpotId}
            </Text>
         </View>
         <View> 
             <Text style = {styles.text}>
                  {this.state.data.StartTime}
            </Text>
         </View>
         <View> 
             <Text style = {styles.text}>
                  {this.state.data.EndTime}
            </Text>
         </View>
         
         <View> 
             <Text style = {styles.text}>
                 "space id:" {this.state.data.SpaceId}
            </Text>
         </View>
         

         <View> 
                  <TouchableOpacity
                     
                     style = {styles.container}
                     onPress = {() => this.cancelIt()}>
                     
                     <Text style = {styles.text}>
                        "Cancel reservation"
                     </Text>
                  </TouchableOpacity>
         
         </View>
      </View>

      )
   }
}
export default ReservationDetails;

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
ReservationDetails.defaultProps = {
      landingMessage: "Reservation details"
};
