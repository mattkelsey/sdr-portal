import React from 'react';
import { Link } from 'react-router-dom'

class Dropoff extends React.Component{

  render(){
    return(
      <div className="pageTxt">
        <h1>Drop off at front desk</h1>
        <p>Drop off is available 9am-5pm Monday-Thursday and 9am-3pm Fridays. Weekends or outside of these hours is by <Link to='/schedule'>appointment</Link> only. Please contact us anytime if you need to arrange something.
        <br /><br />
        1) Pack your drone in a box or bag labeled "Seattle Drone Repair".
        Please include:
        <ul>
          <li>Drone</li>
          <li>Remote</li>
          <li>Battery</li>
          <li>Accessories only if they relate to your issue</li>
          <li>A business card or contact details</li>
          </ul>
          2) Leave the package with a front desk receptionist. We are located at the corner of 1st Ave and Lenora St in a space called Makers Workspace. If you have any difficulty finding the building feel free to give us a call.
          <br />
          Seattle Drone Repair<br />
          92 Lenora St<br />
          Seattle WA, 98121
          <br /><br />
          3) We will contact you and send paperwork once we finish diagnostics. Don't hesiate to contact us if you have any questions!
          <br /><br />


          <h1>Appoitment booking calendar</h1>
          <p>If the timing doesn't work for you contact us and we will try to arrange something for you. We are often available outside of office hours upon request.</p>

          <script src='https://squareup.com/appointments/buyer/widget/90j4ygqentx9y2/CYM231YHMWE5D.js'></script>
          <br />
          <Link to='/done'><button className="submitTkt">Finish</button></Link>

        </p>

        <Link to='/done'><button className="submitTkt">Submit Ticket</button></Link>

      </div>

    );

  }

}

export default Dropoff;
