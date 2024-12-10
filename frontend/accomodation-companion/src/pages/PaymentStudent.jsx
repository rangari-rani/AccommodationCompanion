import { useState } from 'react';
import './App.css';
import StripeCheckout from 'react-stripe-checkout'
import {toast} from 'react-toastify'

//import "react-toastify/dist/react-toastify";
import axios from 'axios'

function App() {

//toast.configure()

const [product] = useState({
  name: "House",
  price: 6000,
  description:'Your New House!!'
})

async function handleToken(token, addresses){
  const response = await axios.post('http://localhost:3001/checkout',{token, product})

  console.log(response.status)

  if(response.status === 200) {
    toast("Success Payment is Completed", {type:'success'})
  } else{
    toast("Failed", {type:"error"})
  }
}
  return (
    <div className="App">
      <div className="container">
        <br/><br/>
        <h1 className="text-centre">Stripe Payment Checkout</h1>
        <br/><br/>
        <h2 className="text-center">Product Info</h2>
        <h3 className="text-center">Product Name: {product.name}</h3>
        <h3 className="text-center">Product Price: {product.price}</h3>
        <h3 className="text-center">Product Description: {product.description}</h3>
        
        <br/><br/>
        <div className='form-group container'>
          <StripeCheckout
            className="center"
            stripeKey="pk_test_51NjbLtSCttUcDfYstbq8m4EXSVqzbSUOTza6WCTSEmyECjU5XsJyTq331I8C6LnwTjoXLKszwJf5ZhGHtRIdFF1Y000910SSIc"
            token={handleToken}
            amount={product.price}
            name={product.name}
            
          />
        </div>
      </div>
    </div>
  );
}

export default App;
