import React from 'react';
import './App.css';
import { Link, Switch, Route } from 'react-router-dom'
import Init from './Init'
import Dropoff from './Dropoff'
import Ship from './Ship'
import Done from './Done'
import Start from './Start'
import Track from './Track'
import logo from './whiteLogo.png'
import Signature from './Signature'
import Label from './Label'
import Test from './Test'

class App extends React.Component{

  render(){
    return(
      <div>
          <header>
            <img src={logo} />
            <h1>Seattle Drone Repair Tickets</h1>
          </header>

          <script id="stripe-js" src="https://js.stripe.com/v3/" async></script>
          {/* Add routes to allow for embedded page swithing */}

          <Switch>
            <Route exact path='/' component={Init}/>
            <Route exact path='/start' component={Start}/>
            <Route path='/dropoff' component={Dropoff}/>
            <Route path='/ship' component={Ship}/>
            <Route path='/done' component={Done}/>
            <Route path='/track' component={Track}/>

            <Route path='/signature' component={Signature}/>
            <Route path='/label' component={Label}/>

            <Route path='/test' component={Test}/>
          </Switch>
      </div>

    );

  }

}

export default App;
