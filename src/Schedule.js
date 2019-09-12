import React from 'react';
import Dropoff from './Dropoff'
import { Link } from 'react-router-dom'

class Schedule extends React.Component{

  render(){
    return(
      <div>
        <p>Appoitment booking calendar</p>
        <script src='https://squareup.com/appointments/buyer/widget/90j4ygqentx9y2/CYM231YHMWE5D.js'></script>
        <p>If the timing doesn't work for you let us know. We are often available outside of office hours or you can</p>
        <Link to='/desk'>drop off</Link>
        <br />
        <Link to='/done'>Finish</Link>

      </div>

    );

  }

}

export default Schedule;
