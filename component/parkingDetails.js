import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

class ParkingDetails extends Component {
  state = {
      data: {}
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
      alert("");
   }
   render(){
      return( 
      <View > 
         <Text> {this.props.landingMessage} </Text>
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
