import * as React from 'react';
import './App.css';
/* import { RestHelp } from './RESThelp'; */


class App extends React.Component<any,any> {

  /* private api: any; */

  constructor(props: any) {
    super(props);
    this.state = {
	userDesc: '',
	userDrone: '',
	userEmail: '',
	userName: '',
	userPhone: '' 
	};

    /* this.api = new RestHelp(); */

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public render() {
    return (
      <div className="App">
        <h1>Track a Repair</h1>
		<form>
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
		 <button onClick={this.handleSubmit}>Next</button>
		 </form>
      </div>
    );
  }

  public handleSubmit(event: any){
    this.setState({ 
		[event.target.name] : event.target.value
	});
	alert("val "+this.state.userName);
	alert("val "+this.state.userEmail);
  }

  private handleChange(event: any) {
    this.setState({ 
		[event.target.name] : event.target.value
	});
  }

}

export default App;
