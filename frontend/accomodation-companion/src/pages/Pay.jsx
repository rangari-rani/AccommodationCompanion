import { housesData } from "../data";
import StripeCheckout from 'react-stripe-checkout';
import { useParams } from "react-router-dom";
const Pay = () => {

    const onToken = (token) => {
        console.log(token);
    }
    const { id } = useParams();
    console.log(id);
    //get the house based on the id
    const house = housesData.find((house) => {
      return house.id === parseInt(id);
    });
  
    console.log(house);
  return (
    <div className='container align-middle min-h-[800px] mb-14 mr-16 '>
        
        <StripeCheckout
        token={onToken}
        name='Payment Gateway'
        currency='INR'
        // amount={house.price}
        stripeKey='pk_test_51NnBCFSFmZmFFVMETr3GF9fhXEGwEg3hNGhpjbcwFUFMntjdvqH1s2s14NSNC0FD3jzmyt3v8et6CPaZMwWlGauh00NxmcuDhx'
        />
    </div>
  )
}

export default Pay
