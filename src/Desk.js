import React from 'react';
import { Link } from 'react-router-dom'

class Desk extends React.Component{

  render(){
    return(
      <div className="pageTxt">
        <h1>Drop off at front desk</h1>
        <p>Drop off 9am-5pm Monday-Thursday 9am-3pm Friday. Weekends or outside these hours are by <Link to='/schedule'>appointment</Link> only
        <br /><br />
        1) pack in box, leave name, etc etc etc
        </p>

        <button className="submitTkt"><Link to='/done'>Submit Ticket</Link></button>
        <br />

      </div>

    );

  }

}

export default Desk;
