import React from 'react';
import { Link } from 'react-router-dom'



class Dropoff extends React.Component{

  render(){
    return(
      <p>
        <Link to='/desk'>Drop Off with Receptionist</Link>
        <br />
        <Link to='/schedule'>Schedule an Appointment with a Technician</Link>
        <br />
        <Link to='/ship'>Ship in</Link>
        <br /><br />
        <button><Link to='/start'>Previous</Link></button>
      </p>
    );

  }

}

export default Dropoff;
