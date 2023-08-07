import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { useLoaderData, useLocation } from "react-router-dom";


// TODO: provide publishable Key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const {cart} = useLoaderData();
    // console.log(cart);
    return (
        <div>
            your price {}
            <h2 className="text-3xl">Make Payment for Your Class</h2>
            {/* <Elements stripe={stripePromise}>
                <CheckoutForm item ={item}></CheckoutForm>
            </Elements> */}
        </div>
    );
};

export default Payment;