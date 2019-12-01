import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {complete: false};
    this.submit = this.submit.bind(this);

  }


  async submit(ev) {

    let {token} = await this.props.stripe.createToken({name: "Name"});

    const postReq = {
        "token":token.id,
        "price":Math.round(this.props.stripePrice*100),
    }
    console.log(token.id);

    let response = await fetch("/charge", {
      method: "POST",
      headers: {"Content-Type": "text/plain"},
      body: JSON.stringify(postReq),
    });

    if (response.ok){
      console.log("Purchase Complete");
      this.setState({
        complete: true,
      });
      this.props.onComplete(true);
    } else {
      this.props.onComplete(false);
    }
  }

  render() {
    if (this.state.complete) {
      return <h1>Purchase Complete</h1>;
    }else{
      return (
        <div className="checkout">
          <p>Complete the purchase to recieve shipping label</p>
          <CardElement />
          <button onClick={this.submit}>Pay {this.props.stripePrice}</button>
        </div>
      );
    }
  }

}

export default injectStripe(CheckoutForm);
