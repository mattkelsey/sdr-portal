import * as React from 'react';
import './App.css';
import { RestHelp } from './RESThelp';


class App extends React.Component<{}, { value: string }> {

  private api: any;

  constructor(props: any) {
    super(props);
    this.state = { value: '' };

    this.api = new RestHelp();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public render() {
    return (
      <div className="App">
        <h1>Track a Repair</h1>
         <input type="text" value={this.state.value} onChange={this.handleChange} />
         <button onClick={this.handleSubmit}>Submit</button>

      </div>
    );
  }

  public handleSubmit(event: any){
    this.setState({ value: event.target.value });
    this.api.getRepair(this.state.value);
  }

  private handleChange(event: any) {
    this.setState({ value: event.target.value });
  }

}

export default App;
