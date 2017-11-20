import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Login from './login.js'
import Signup from './signup.js'
import Parkings from './parkings.js'
import ParkingDetails from './parkingDetails.js'


const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "login" component = {Login} title = "login" initial = {true} />
         <Scene key = "signup" component = {Signup} title = "signup" />
         <Scene key = "parkings" component = {Parkings} title = "parkings"  />
         <Scene key = "parkingDetails" component = {ParkingDetails} title = "ParkingDetails" />
      </Scene>
   </Router>
)
export default Routes