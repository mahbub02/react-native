import React, { Component } from 'react'
import {Image, View, Text, TouchableOpacity, TextInput, StyleSheet, Picker } from 'react-native'
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
         <View style={styles.container}> 
         <Text style = {{textAlign:'center', fontSize: 15, color:'white', fontWeight: 'bold', paddingBottom:100}}> {this.props.landingMessage} </Text>
         <View style={{ flexDirection: 'row'}}>
            <View style={{ flexGrow:1}}> 
               <Text style = {{textAlign:'center', fontSize: 15, color:'white', fontWeight: 'bold'}}>
                    {this.state.data.StartTime}
              </Text>
               <Text style = {{textAlign:'center', color:'white'}}>
                    Start Time
              </Text>
           </View>
            
           <View style={{ flexGrow: 1}}> 
               <Text style = {{textAlign:'center', fontSize: 15, color:'white', fontWeight: 'bold'}}>
                    {this.state.data.EndTime}
              </Text>
               <Text style = {{textAlign:'center', color:'white'}}>
                    End Time
              </Text>
           </View>
         </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop:40 }}> 
                <Image style={{width: 100, height: 100}}
                 source={require('../images/pin.png')}
               />
            </View>
          <View style= {{justifyContent: 'center', alignItems: 'center'}}> 
             <Text style = {{fontSize: 15, color:'white', fontWeight: 'bold'}}>
                  RESERVED SPACE
            </Text>
             <Text style = {{fontSize: 25, color:'white', fontWeight: 'bold', paddingBottom: 20}}>
                  {this.state.data.SpaceId}
            </Text>
             
         </View>
        
         
        

         <View> 
                  
                  <TouchableOpacity
                     
                     style = {styles.reservationsButton}
                     onPress = {() => this.cancelIt()}>
                     
                     <Text style = {styles.reservationsButtonText}>
                        CANCEL RSERVATION
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
      padding:10,
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
      paddingTop: 10,
       paddingBottom: 10,
      height: 40,
   },
   text: {
      color: '#4f603c'
   }
})
ReservationDetails.defaultProps = {
      landingMessage: "Reservation details"
};
