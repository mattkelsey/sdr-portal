import React from 'react'
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';
import StripeScriptLoader from 'react-stripe-script-loader'

class Test extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <StripeScriptLoader
      uniqueId='myUniqueId'
      script='https://js.stripe.com/v3/'
      loader="Loading..."
    >
       <StripeProvider apiKey="pk_test_oIvMP7EZrfj6CrKtmSoDkwCl">
      
        <div className="example">
          <h1>React Stripe Elements Example</h1>
          <Elements>
            <CheckoutForm stripePrice={1270} />
          </Elements>
        </div>
    </StripeProvider>
    </StripeScriptLoader>
      </div>
    );
  }


}

export default Test;
