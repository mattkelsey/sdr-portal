import React from 'react';
import { Link } from 'react-router-dom'

class Userinfo extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
  	userDesc: '',
  	userDrone: '',
  	userEmail: '',
  	userName: '',
  	userPhone: ''
  	};


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(event){
    this.setState({
        [event.target.name] : event.target.value
    });
    alert("val "+this.state.userName);
    alert("val "+this.state.userEmail);
  }

  handleChange(event){
    this.setState({
		[event.target.name] : event.target.value
	});
}


  render(){
    return(
      <div className="page">
 			<h1>Track a Repair</h1>
 			 <input type="text" placeholder="Name" value={this.state.userName} onChange={this.handleChange} name="userName" />
 			 <br />
 			 <input type="email" placeholder="Email" value={this.state.userEmail} onChange={this.handleChange} name="userEmail" />
 			 <br />
 			 <input type="phone" placeholder="Phone" value={this.state.userPhone} onChange={this.handleChange} name="userPhone" />
 			 <br />
 			 <input type="text" placeholder="Drone" value={this.state.userDrone} onChange={this.handleChange} name="userDrone" />
 			 <br />
 			 <textarea placeholder="Description" value={this.state.userDesc} onChange={this.handleChange} name="userDesc" />
 			 <br />
 			 <button><Link to='/dropoff' onClick={this.handleSubmit}>Next</Link></button>
 		</div>

    );

  }

}

export default Userinfo;
