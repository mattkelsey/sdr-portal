import React from 'react'
import { Link } from 'react-router-dom'


class Ship extends React.Component{

  render(){
    return(
      <div className="page">
        <h1>Ship us a drone</h1>
        <p>
        1) Pack your drone securely in a box labeled "Seattle Drone Repair"
        Please include:
        <ul>
          <li>Drone</li>
          <li>Remote</li>
          <li>Gimbal Lock</li>
          <li>A business card or contact details</li>
          </ul>
          No need to include batteries or accessories unless they relate to your issue. This will reduce weight and shipping cost.
          <br /><br />
          2) Ship using any carrier and enter tracking number or purchase a USPS shipping label right here
          <br />
          Seattle Drone Repair<br />
          92 Lenora St<br />
          Seattle WA, 98121
          <br /><br />
          3) We will contact you and send paperwork once we finish diagnostics. Don't hesiate to contact us if you have any questions!
          <br /><br />
          Click below to finish

        </p>
        <Link to='/done'><button className="submitTkt">Submit Ticket</button></Link>

      </div>
    );


  }



}

export default Ship;
