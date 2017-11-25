import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Login from './login.js'
import Signup from './signup.js'
import Parkings from './parkings.js'
import ParkingDetails from './parkingDetails.js'
import ReservationDetails from './reservationDetails.js'

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "login" component = {Login} title = "login"  initial = {true}/>
         <Scene key = "signup" component = {Signup} title = "signup" />
         <Scene key = "parkings" component = {Parkings} title = "parkings"  />
         <Scene key = "parkingDetails" component = {ParkingDetails} title = "Parking Details" />
         <Scene key = "reservationDetails" component = {ReservationDetails} title = "Reservation Details" />
      </Scene>
   </Router>
)
export default Routes