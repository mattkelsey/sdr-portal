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
      <div className="initPageSelect">
        <h1>Select an Option below</h1>
        <h3>If you need immidiate assitance feel free to contact us directly.
        <br /><a href="mail">info@seattledronerepair.com</a>
        <br /><a href="phone">206-280-9766</a>
        </h3>
        <div className="centerBtnWrap">
          <Link to='/start'><div>Start a Repair</div></Link>
          <Link to='/track'><div>Track a Repair</div></Link>
        </div>
 			</div>

    );

  }

}

export default Init;
