import React from 'react'
import { Link } from 'react-router-dom'


class Ship extends React.Component{

  render(){
    return(
      <div>
        <p>Ship page</p>

        <Link to='/dropoff'>Previous</Link>

      </div>
    );


  }



}

export default Ship;
