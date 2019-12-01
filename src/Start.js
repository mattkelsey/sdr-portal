import React from 'react';
import { Link, Redirect } from 'react-router-dom'

class Start extends React.Component{

  //initialize props for input field values
  constructor(props) {
    super(props);
    this.state = {
    readySubmit: false,
    submitError:false,
    userCompany: '',
  	userDesc: '',
  	userDrone: '',
    userDrop: 'def',
  	userEmail: '',
  	userFName: '',
    userLName: '',
  	userPhone: ''
  	};

    //bind event functions
    this.handleChange = this.handleChange.bind(this);

  }

  //On keypress update the input field accordingly
  handleChange(event){
    this.setState({
		[event.target.name] : event.target.value
	});

}

  //On submit update props and make API call for Mongo
setRedirect = (event) => {

//check if form is ready to submit
  if(
    this.state.userDesc == '' ||
    this.state.userDrone == '' ||
    this.state.userDrop == 'def' ||
    this.state.userEmail == '' ||
    this.state.userFname == '' ||
    this.state.userLname == '' ||
    this.state.userPhone == '' ||
    //Basic email verification
    this.state.userEmail.indexOf('@') <= 0 ||
    this.state.userEmail.indexOf('.') <= 0

  ){
    this.setState({
      submitError: true
    })
  }else{

    this.setState({
      [event.target.name] : event.target.value,
      readySubmit: true
    })

  }

  }
  //Redirect to next if form submit successful
  renderRedirect = () => {
    if (this.state.readySubmit) {
      this.urlGen = '/'+this.state.userDrop;
      return <Redirect to={this.urlGen} />
    }
  }



  render(){
    return(
      <div className="page">
      {this.renderRedirect()}
      <center>
 			<h1>Start a Repair</h1>
        {this.state.submitError ? <p className="error">Please complete all fields</p> : <span></span>}
 			  <input type="text" placeholder="First Name" value={this.state.userFName} onChange={this.handleChange} name="userFName" />
 			  <br />
        <input type="text" placeholder="Last Name" value={this.state.userLName} onChange={this.handleChange} name="userLName" />
 			  <br />
        <input type="text" placeholder="Company/Organization (Optional)" value={this.state.userCompany} onChange={this.handleChange} name="userCompany" />
        <br />
 			  <input type="email" placeholder="Email" value={this.state.userEmail} onChange={this.handleChange} name="userEmail" />
 			  <br />
 			  <input type="phone" placeholder="Phone" value={this.state.userPhone} onChange={this.handleChange} name="userPhone" />
 			  <br />
 			  <input type="text" placeholder="Drone" value={this.state.userDrone} onChange={this.handleChange} name="userDrone" />
 			  <br />
 			  <textarea placeholder="Description" value={this.state.userDesc} onChange={this.handleChange} name="userDesc" />
 			  <br />
        <select defaultValue={this.state.userDrop} onChange={this.handleChange} name="userDrop">
        <option value="def" default>- Select Delivery Method -</option>
        <option value="dropoff">Drop off</option>
        <option value="ship">Ship in</option>
        </select>
        <br />
        {this.state.submitError ? <p className="error">Please complete all fields</p> : <span></span>}
        <button className="nxtBtn" onClick={this.setRedirect}>Submit</button>

       </center>
 		</div>

    );

  }

}

export default Start;
