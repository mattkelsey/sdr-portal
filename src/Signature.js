import React from 'react'
import SignaturePad from 'signature_pad'
import { Link } from 'react-router-dom'


class Signature extends React.Component{

  constructor(props){
    super(props)
    this.clear = this.clear.bind(this);
    this.done = this.done.bind(this);
  }


  componentDidMount() {
    this.signaturePad = new SignaturePad(this.refs.canvas);

  }

  clear(){
    this.signaturePad.clear();
  }

  done(){
    if(!this.signaturePad.isEmpty()){
      this.signaturePad.toDataURL();
      alert("done");
    }
  }

  render(){
    return(
      <div className="page">
        <h1>Repair Release Contract</h1>
        <p>
Drone being repaired: _______________. Owner: ______________.
Undersigned requests services from Seattle Drone Repair LLC to repair a suspected faulty drone and understands that Seattle Drone Repair LLC is not liable or responsible for any problems or damages arising from the attempted repair. Undersigned understands and agrees the drone is in a currently broken and unusable state and that this repair is an attempt to restore usable functionality via singular repair. Undersigned understands this is a risky repair and that many things can render a drone unusable including but not limited to such things as damage in transport, and releases Seattle Drone Repair LLC from all responsibility associated with the condition of the drone upon its return to owner. Seattle Drone Repair LLC is not responsible for any failures or delays in performing under this agreement that are due to events outside its reasonable control. To the maximum extent permitted by law, Seattle Drone Repair LLC and their officers, agents, and employees will under no circumstances be liable for any and special, indirect, incidental, or consequential damages resulting from the performance or omission of any repair services, including but not limited to loss of revenue; loss of reputation; loss of business; loss of, damage to, or corruption of data; any personal injury; and property damage; or damage to or loss of aircraft. Undersigned understands we will do our best to fulfill and complete requested repair successfully, but also understands it is not always possible to effectuate a successful repair and releases Seattle Drone Repair LLC from any liability arising from their attempt to effectuate repairs.
Notwithstanding the foregoing, Seattle Drone Repair LLC provides a limited guarantee related to its work. Should Seattle Drone Repair be unable to complete a successful repair, which is defined in this instance as_________________________(the "Scope of Work"), Seattle Drone Repair LLC will refund any fees paid by owner excluding shipping charges.  Other than a potential refund of any fees paid to Seattle Drone Repair LLC by owner, it is agreed that Seattle Drone Repair LLC is not responsible for any consequential or other damages suffered by owner as the result of a repair or attempted repair. Undersigned understands that Seattle Drone Repair LLC's limited guarantee extends only to Scope of Work and that fees will be refunded only if Seattle Drone Repair LLC is unable to document the level of performance specified in the Scope of Work.
Undersigned further understands that all shipping fees to transport the drone for evaluation or repairs will be prepaid by owner regardless of the success of repairs. Undersigned understands further that failure to pick up their drone or prepay return shipping fees within 30 days of Seattle Drone Repair LLC's notification to owner may result in the drone being deemed abandoned by owner. Full payment must be made before pick up or return of a repaired drone. Seattle Drone Repair LLC estimates that owner will be charged ____________ USD for repairs. This quote is for estimation purposes and is not a guarantee of cost for services. Quote is based on current information from client about the project requirements. Actual cost may change once project elements are finalized or negotiated. Client will be notified of any changes in cost prior to them being incurred. Owner hereby authorizes Seattle Drone Repair LLC to make the following repairs:
___________________________________________________
Seattle Drone Repair LLC estimates that the work will be completed by ___________, but this is not a guaranteed completion date as work may be delayed in some instances.
I acknowledge that  this contract is subject to the laws and regulations of the state of Washington, and that I have read and agree to the above Terms and Conditions.
<br /><br />
Sign in the box below
        </p>
        <canvas width="500" height="100" ref="canvas" />
        <br />
        <button onClick={this.clear}>Clear</button>
        <button onClick={this.done}>Done</button>
      </div>
    );


  }



}

export default Signature;
