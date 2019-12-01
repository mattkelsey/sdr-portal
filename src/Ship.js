import React from 'react'
import { Link } from 'react-router-dom'


class Ship extends React.Component{

  render(){
    return(
      <div className="page">
        <h1>Ship us a drone</h1>
        <h3>Pack it</h3>
        <p>
        Pack your drone securely in a box and include the following items:
        </p>
        <ul>
          <li>Drone</li>
          <li>Remote</li>
          <li>Gimbal Lock</li>
          <li>A business card or contact details</li>
          </ul>
          <p>
          No need to include batteries or accessories unless they relate to your issue. This will reduce weight and shipping cost.
          </p>
          <h3>Ship it</h3>
          <p>
          Ship on yuor own using any carrier or purchase and print a USPS shipping label on the next page.
          <br /><br />
          Mailing address:<br />
          Seattle Drone Repair<br />
          92 Lenora St<br />
          Seattle WA, 98121
          </p>
          <h3>When it arrives...</h3>
          <p>
          We will contact you to give an estimate and get approval once we finish diagnostics. Don't hesiate to contact us if you have any questions!
          <br /><br />
          Click below to finish and go to the ticket tracker

        </p>
        <Link to='/done'><button className="submitTkt">Get Started</button></Link>

      </div>
    );


  }



}

export default Ship;
