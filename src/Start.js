import React from 'react';
import { Link } from 'react-router-dom'

class Start extends React.Component{

  //initialize props for input field values
  constructor(props) {
    super(props);
    this.state = {
  	userDesc: '',
  	userDrone: '',
  	userEmail: '',
  	userFName: '',
    userLName: '',
  	userPhone: ''
  	};

    //bind event functions
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  //On submit update props and make API call for Mongo
  handleSubmit(event){

    //WORK ON THIS check if valid email address
    if(this.state.userEmail.indexOf('@')==-1 || this.state.userEmail.indexOf('@')==0 || this.state.userEmail.indexOf('.')==-1 || this.state.userEmail.indexOf('.')==0){
      alert("Enter Valid Email");
    }

    //TODO add Mongo DB API Call

    //set states from input fields
    this.setState({
        [event.target.name] : event.target.value
    });

  }

  //On keypress update the input field accordingly
  handleChange(event){
    this.setState({
		[event.target.name] : event.target.value
	});
}

  render(){
    return(
      <div className="page">
      <center>
 			<h1>Start a Repair</h1>
 			 <input type="text" placeholder="First Name" value={this.state.userFName} onChange={this.handleChange} name="userFName" />
 			 <br />
       <input type="text" placeholder="Last Name" value={this.state.userLName} onChange={this.handleChange} name="userLName" />
 			 <br />
 			 <input type="email" placeholder="Email" value={this.state.userEmail} onChange={this.handleChange} name="userEmail" />
 			 <br />
 			 <input type="phone" placeholder="Phone" value={this.state.userPhone} onChange={this.handleChange} name="userPhone" />
 			 <br />
 			 <input type="text" placeholder="Drone" value={this.state.userDrone} onChange={this.handleChange} name="userDrone" />
 			 <br />
 			 <textarea placeholder="Description" value={this.state.userDesc} onChange={this.handleChange} name="userDesc" />
 			 <br />
 			 <Link to='/dropoff' onClick={this.handleSubmit}><button className="nxtBtn">Next</button></Link>
       </center>
 		</div>

    );

  }

}

export default Start;
