import React from 'react'
import { Link } from 'react-router-dom'


class Track extends React.Component{

  render(){
    return(
      <div className="page">
        <h1>Repair Status</h1>
        <p>

          <h3>Repair ID</h3>
          <div>#kal1417</div>

          <h3>Contact Info</h3>
          <div>Kale Z</div>
          <div>kale@seattledronerepair.com</div>
          <div>206-280-9766</div>

          <h3>Drop off</h3>
          <div>Method Ship in</div>
          <Link to='/'>Print Shipping Label</Link>
          <div>Tracking 38828429939203020</div>
          <div>Recieved False</div>

          <h3>Drop off</h3>
          <div>Method Drop off</div>
          <div>Recieved False</div>

          <h3>Diagnostics</h3>
          <div>Technician Notes: Drone had damged ribbon</div>
          <div>Estimated Cost $143</div>
          <div>Completed False</div>
          <Link to='/signature'>Sign Paperwork</Link>

          <h3>Status</h3>
          <div>Awaiting Parts</div>
          <div>Picked up false</div>
          <div>Return Tracking</div>

        </p>

      </div>
    );


  }



}

export default Track;
