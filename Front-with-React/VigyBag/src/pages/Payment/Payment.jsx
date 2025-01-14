// src/components/PaymentPage.js
import React from 'react';
import ProgressBar from '../../components/Order/ProgressBar'

const PaymentPage = () => {
  return (
    
    <div className="flex flex-col items-center bg-[#fff0e3ff] p-4">
        <div style={{width:'100%',height:'100%',backgroundColor:'#fff0e3ff'}}>
       
     
        
        <ProgressBar style={{width:'60vw'}}/>
      <div className="flex flex-row w-full max-w-6xl space-x-6">
            
        <div className="w-1/2 bg-[#fff0e3ff] shadow-lg rounded-lg
         p-6 mr-5 ml-80 mb-10"style={{border:'2px solid black'}}>
          
          
          <div className="mb-6">
            <h2 className="text-lg font-medium mb-2">Select a payment method</h2>
            <div className="border p-4 rounded-lg"style={{border:'2px solid black'}}>
              <div className="mb-4">
                <input
                  type="radio"
                  id="cod"
                  name="payment-method"
                  className="mr-2"
                />
                <label htmlFor="cod" className="font-medium">
                  Cash on Delivery / Pay on Delivery
                </label>
                <p className="text-sm text-gray-600">Cash and UPI accepted. Know more.</p>
              </div>
              
              <div className="mb-4">
                <input
                  type="radio"
                  id="upi"
                  name="payment-method"
                  className="mr-2"
                />
                <label htmlFor="upi" className="font-medium">
                  UPI (Pay via any app)
                </label>
                <p className="text-sm text-gray-600">Google Pay, PhonePe, Paytm and more</p>
              </div>
              
              <div className="mb-4">
                <input
                  type="radio"
                  id="card"
                  name="payment-method"
                  className="mr-2"
                />
                <label htmlFor="card" className="font-medium">
                  Credit or debit card
                </label>
              </div>
              
              <div className="mb-4">
                <input
                  type="radio"
                  id="netbanking"
                  name="payment-method"
                  className="mr-2"
                />
                <label htmlFor="netbanking" className="font-medium">
                  Net Banking
                </label>
              </div>
            </div>
          </div>
          
          <button className="bg-green-500 text-white font-medium py-2 px-4 rounded-lg w-full">
            Pay ₹1100
          </button>
        </div>
        

        <div className="w-1/2 bg-[#fff0e3ff] shadow-lg rounded-lg p-5 h-[50vh]"style={{border:'2px solid black'}}>
          <h1 className="text-2xl font-semibold mb-4">Order Summary</h1>
          <ul className="list-none mb-4">
            <li className="flex justify-between mb-2">
              <span>Eco-friendly Coffee Mug</span>
              <span>₹300</span>
            </li>
            <li className="flex justify-between mb-2">
              <span>Handwoven Doormat</span>
              <span>₹275</span>
            </li>
            <li className="flex justify-between mb-2">
              <span>Bamboo Insulated Tumbler with Strainer</span>
              <span>₹350</span>
            </li>
            <li className="flex justify-between mb-2">
              <span>Storage basket and container</span>
              <span>₹175</span>
            </li>
          </ul>
          <div className="flex justify-between font-medium mb-4">
            <span>Shipping Charges:</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>₹1100</span>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default PaymentPage;
