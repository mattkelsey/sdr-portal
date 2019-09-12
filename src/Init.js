import React from 'react';
import { Link } from 'react-router-dom'

class Init extends React.Component{

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
      <div>
        <Link to='/start'>Start a Repair</Link>
        <br />
        <Link to='/track'>Track a Repair</Link>
 			</div>

    );

  }

}

export default Init;
