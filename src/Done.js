import React from 'react';
import { Link, Redirect } from 'react-router-dom'

class Done extends React.Component{

  state = {
      redirect: false
    }

    componentDidMount() {
      this.id = setTimeout(() => this.setState({ redirect: true }), 6500)
    }

    componentWillUnmount() {
      clearTimeout(this.id)
    }

  render(){
    return(
      <div className="page">
      {this.state.redirect ? <Redirect to="/track" /> : <span></span>}
            <h1>Thanks! Ticket Succesfully Sumbitted</h1>
            <p>We will send you a confirmation email with instructions shortly.<br />
             You will now be directed to the ticket tracking page.<br />
            As always if you have any questions let us know.
            </p>
            <br />
            <Link to='/track'><button className="submitTkt">Track Ticket</button></Link>
      </div>

    );

  }

}

export default Done;
