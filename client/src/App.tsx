import * as React from 'react';
import './App.css';

class App extends React.Component<{}, { value: string }> {

  public static baseURL: string = "api.seattledrone.repair";

  constructor(props: any) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public render() {
    return (
      <div className="App">
        <h1>Track a Repair</h1>

        <form onSubmit={this.handleSubmit}>
         <label>
           Repair ID
           <input type="text" value={this.state.value} onChange={this.handleChange} />
         </label>
         <input type="submit" value="Submit" />
        </form>

      </div>
    );
  }

  private handleChange(event: any) {
    this.setState({ value: event.target.value });
  }

  private handleSubmit(event: any){
    this.setState({ value: event.target.value });
    // api call
  }

}

export default App;
