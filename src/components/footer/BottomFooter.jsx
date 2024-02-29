import { FaCcMastercard, FaCcVisa, FaPaypal, FaStripeS } from "react-icons/fa6";
import { GiNecklaceDisplay } from "react-icons/gi";

//import {  FaCcStripe  } from "react-icons/fa";

import './footer.css';

const logoData = {
    id: "1",
    title: "Logo",
    link: "/",
    desc: "logo",
    image: "",
    className: ""
}

// const paymentData = [
//   {
//     id: "1",
//     title: "MasterCard", 
//     link: "",
//     desc: "MasterCard Pymnt",
//     image: <FaCcMastercard />
//   },
//   {
//     id: "2",
//     title: "Visa", 
//     link: "",
//     desc: "Visa Pymnt",
//     image: <FaCcVisa />
//   },
//   {
//     id: "3",
//     title: "PayPal", 
//     link: "",
//     desc: "PayPal Pymnt",
//     image: <FaPaypal />
//   },
//   {
//     id: "4",
//     title: "Stripe", 
//     link: "",
//     desc: "Stripe Pymnt",
//     image: <FaStripe />
//   },    
// ]


export default function BottomFooter() {
  return (
    <div className="bottom-footer responsive ">  
      <div>
        <GiNecklaceDisplay className="icon logo" />
      </div>    

      <div className="social-icons">
        <FaCcMastercard className="icon"/> 
        <FaCcVisa className="icon"/> 
        <FaPaypal className="icon"/> 
        <FaStripeS className="icon"/>

          {/* {paymentData.map(item => 
            <img src={item.image} alt={item.desc} />
          )} */}
      </div>
    </div>
  )
}
