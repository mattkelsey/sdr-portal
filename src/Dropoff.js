import React from 'react';
import { Link } from 'react-router-dom'


class Dropoff extends React.Component{

  render(){
    return(
      <p>
              Drop off

              <button><Link to='/' onClick={this.handleSubmit}>Previous</Link></button>
              <button><Link to='/home' onClick={this.handleSubmit}>Next</Link></button>
        </p>

    );

  }

}

export default Dropoff;
