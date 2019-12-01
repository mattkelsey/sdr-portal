import React from 'react'
import { Link } from 'react-router-dom'
import { thisExpression } from '@babel/types'
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';
import StripeScriptLoader from 'react-stripe-script-loader'
import secrets from './env.js'

const headers = {
  "Authorization": "ShippoToken " + secrets.shippoKey,
  "Content-Type": "application/json"
}

const sdrAddrId = "487305bc9540426fb1f1ea05f5fad568"


class Label extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      fromName: '',
      fromComp: '',
      fromStOne: '',
      fromStTwo: '',
      fromState: '',
      fromCity: '',
      fromZip: '',
      fromPhone: '',
      fromRes: true,
      fromLength: '',
      fromWidth: '',
      fromHeight: '',
      fromLbs: '',
      selectCarrier: [],
      selectedShipment: '',
      loaded: false,
      chargePrice: 0,
    };
    this.createAddress = this.createAddress.bind(this);
    this.createParcel = this.createParcel.bind(this);
    this.createLabel = this.createLabel.bind(this);
    this.createShipment = this.createShipment.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.generatePrices = this.generatePrices.bind(this);
    this.createPay = this.createPay.bind(this);
    this.onComplete = this.onComplete.bind(this);
  }


  handleChange(event){
    this.setState({
		[event.target.name] : event.target.value
  });

}


handleCheck(){

  const newFromres = !this.state.fromRes;

  this.setState({
    fromRes: newFromres
  });


}


  createAddress() {
    const data = {
    	name: this.state.fromName,
    	company: this.state.fromComp,
    	street1: this.state.fromStOne,
    	street2: this.state.fromStTwo,
    	city: this.state.fromCity,
    	state: this.state.fromState,
    	zip: this.state.fromZip,
    	country: "US",
    	phone: this.state.fromPhone,
      is_residential: this.state.fromRes,
    }
    return fetch(
      'https://api.goshippo.com/addresses/',
      {
        method: 'POST',
        headers,
        body: JSON.stringify(data),
      }
    )
  }

  createParcel() {
    const data = {
      width: this.state.fromWidth,
      length: this.state.fromLength,
      height: this.state.fromHeight,
      distance_unit: 'in',
      weight: this.state.fromLbs,
      mass_unit: "lb",
    }
    return fetch(
      'https://api.goshippo.com/parcels/',
      {
        method: 'POST',
        headers,
        body: JSON.stringify(data),
      }
    )
  }

  onComplete(success /*boolean*/) {
    console.log(`it worked bitch hypers ${success}`)
  }

  createLabel() {
    this.state.loaded = false;

    const address = this.createAddress();
    const parcel = this.createParcel();
    Promise.all([address, parcel]).then((values) => {
      return values.map(res => res.json())
    }).then(bodies => {
      let parcel;
      let address;
      // Hacky af
      bodies[0]
      .then(data => {
        if (data.mass_unit !== undefined) {
          parcel = data;
        } else {
          address = data;
        }
        bodies[1]
        .then(data => {
          if (data.mass_unit !== undefined) {
            parcel = data;
          } else {
            address = data;
          }
          this.createShipment(address['object_id'], parcel['object_id'])
          .then(res => res.json())
          .then(data => {

            this.setState({
              selectCarrier: data['rates']
            })
          })
        })
      })
    })
  }

  createShipment(addressId, parcelId) {
    const shipData = {
      "address_to": sdrAddrId,
      "address_from": addressId,
      "parcels": [parcelId],
    }
    return fetch(
      'https://api.goshippo.com/shipments/',
      {
        method: 'POST',
        headers,
        body: JSON.stringify(shipData),
      }
    )
  }

  generatePrices(){
    if(this.state.selectCarrier[0] !== undefined){

    return <div className='priceContainer'>{

      this.state.selectCarrier.map((item,i) => {
        return <div key={i} className={'color'+(i%2)}>
        {item.provider} {item.servicelevel.name} - ${parseFloat(item.amount)+2.50}
        <br /> {item.duration_terms} <button onClick={() => {this.createPay(i)}}>Select</button><br />
        </div>;
      })

    }</div>;

    }else{
      return <div></div>;
    }
  }



  createPay(rate){

    this.setState({
      loaded:true,
      chargePrice:parseFloat(this.state.selectCarrier[rate].amount)+2.50,
    });
  }


  render() {
    return(

      <div className="page">
        <h1>Generate a Shipping Label</h1>
        <h3>Enter Return Shipping Address</h3>
        <input type="text" placeholder="Name" value={this.state.fromName} onChange={this.handleChange} name="fromName" />
 			  <br />
        <input type="text" placeholder="Company (Optional)" value={this.state.fromComp} onChange={this.handleChange} name="fromComp" />
 			  <br />
        <input type="text" placeholder="Address" value={this.state.fromStOne} onChange={this.handleChange} name="fromStOne" />
        <br />
 			  <input type="text" placeholder="Address Line 2" value={this.state.fromStTwo} onChange={this.handleChange} name="fromStTwo" />
 			  <br />
         <input type="text" placeholder="City" value={this.state.fromCity} onChange={this.handleChange} name="fromCity" />
 			  <br />
         <input type="text" placeholder="State" value={this.state.fromState} onChange={this.handleChange} name="fromState" />
 			  <br />
        <input type="text" placeholder="Zip" value={this.state.fromZip} onChange={this.handleChange} name="fromZip" />
        <br />
 			  <input type="phone" placeholder="Phone" value={this.state.fromPhone} onChange={this.handleChange} name="fromPhone" />
 			  <br />
        Residential Address? <input type="checkbox" checked={this.state.fromRes} onClick={this.handleCheck} />
        <br />
        <input type="text" placeholder="Package Length (in)" value={this.state.fromLength} onChange={this.handleChange} name="fromLength" />
        <br />
        <input type="text" placeholder="Package Width (in)" value={this.state.fromWidth} onChange={this.handleChange} name="fromWidth" />
        <br />
        <input type="text" placeholder="Package Height (in)" value={this.state.fromHeight} onChange={this.handleChange} name="fromHeight" />
        <br />
        <input type="text" placeholder="Weight (lbs)" value={this.state.fromLbs} onChange={this.handleChange} name="fromLbs" />
        <br />

        <button className="submitTkt" onClick={this.createLabel}>{this.state.selectCarrier.length ==0 ? 'Submit' : 'Update' }</button>
        <br />

        <div className='parcelSelect'>
          {this.generatePrices()}
        </div>

        {this.state.loaded ? <div>
        <StripeScriptLoader uniqueId='myUniqueId'
          script='https://js.stripe.com/v3/'
          loader="Loading...">
          <StripeProvider apiKey="pk_test_oIvMP7EZrfj6CrKtmSoDkwCl">
            <div className="example">
                <Elements>
                  <CheckoutForm stripePrice={this.state.chargePrice} onComplete={this.onComplete} />
                </Elements>
            </div>
          </StripeProvider>
        </StripeScriptLoader>
      </div> : <div></div>}

        <br />


      </div>
    );


  }
}

export default Label;
