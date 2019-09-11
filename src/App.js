import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Switch, Route } from 'react-router-dom'
import Userinfo from './Userinfo'
import Dropoff from './Dropoff'
import Schedule from './Schedule'

/* function App() {
  return (
    <div className="App">



    </div>
  );
} */

class App extends React.Component{

  render(){
    return(
      <div>
          <Switch>
            <Route exact path='/' component={Userinfo}/>
            <Route path='/dropoff' component={Dropoff}/>
            <Route path='/schedule' component={Schedule}/>
          </Switch>
      </div>

    );

  }

}

export default App;
