import React from 'react'


class Track extends React.Component{

  render(){
    return(
      <div className="page">
        <h1>Repair Status</h1>
        <p>
          <h3>Contact Info</h3>
          <div>Kale Z</div>
          <div>kale@seattledronerepair.com</div>
          <div>206-280-9766</div>

          <h3>Drop off</h3>
          <div>Method Ship in</div>
          <div>Tracking 38828429939203020</div>
          <div>Recieved False</div>

          <h3>Diagnostics</h3>
          <div>Done True</div>
          <div>Technician Notes: Drone had damged ribbon</div>
          <div>Estimated Cost $143</div>
          <button className="submitTkt">Approve</button>

          <h3>Paperwork</h3>
          <div>Completed False</div>
          <a>Complete Now</a>

          <h3>Status</h3>
          <div>Awaiting Parts</div>

        </p>

      </div>
    );


  }



}

export default Track;
