import React from 'react';
import { Link } from 'react-router-dom'

class Done extends React.Component{

  render(){
    return(
      <div className="page">
            <h1>Thanks! Ticket Succesfully Sumbitted</h1>
            <p>We will send you a confirmation email with instructions shortly. As always if you have any questions let us know.
            </p>
            <br />
            <a href="https://seattledronerepair.com/"><button className="submitTkt">SDR Homepage</button></a>
      </div>

    );

  }

}

export default Done;
