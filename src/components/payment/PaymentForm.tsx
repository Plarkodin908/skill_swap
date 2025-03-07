
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

const PaymentForm = () => {
  const [cardHolder, setCardHolder] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleCheckout = () => {
    if (!cardHolder || !cardNumber || !expiryDate || !cvv) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please fill in all fields",
      });
      return;
    }
    
    toast({
      title: "Payment Successful",
      description: "Your payment has been processed successfully!",
    });
    
    // Reset form
    setCardHolder('');
    setCardNumber('');
    setExpiryDate('');
    setCvv('');
  };

  return (
    <div className="form bg-dark-purple max-w-md w-full mx-auto rounded-xl border border-primary-purple/30 shadow-xl hover:shadow-primary-purple/20 transition-all duration-300">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-primary-purple">Payment Details</h2>
        <div className="flex space-x-2">
          <div className="w-8 h-5 bg-blue-500 rounded"></div>
          <div className="w-8 h-5 bg-red-500 rounded"></div>
        </div>
      </div>
      
      <label htmlFor="name" className="label">
        <span className="title">Card holder full name</span>
        <input
          className="input-field bg-transparent border border-primary-purple/30 rounded-md focus:border-primary-purple focus:ring-primary-purple text-white"
          type="text"
          name="input-name"
          placeholder="Enter your full name"
          value={cardHolder}
          onChange={(e) => setCardHolder(e.target.value)}
        />
      </label>
      
      <label htmlFor="serialCardNumber" className="label">
        <span className="title">Card Number</span>
        <input
          id="serialCardNumber"
          className="input-field bg-transparent border border-primary-purple/30 rounded-md focus:border-primary-purple focus:ring-primary-purple text-white"
          type="text"
          name="card-number"
          placeholder="0000 0000 0000 0000"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          maxLength={19}
        />
      </label>
      
      <div className="split">
        <label htmlFor="ExDate" className="label">
          <span className="title">Expiry Date</span>
          <input
            id="ExDate"
            className="input-field bg-transparent border border-primary-purple/30 rounded-md focus:border-primary-purple focus:ring-primary-purple text-white"
            type="text"
            name="expiry-date"
            placeholder="MM/YY"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            maxLength={5}
          />
        </label>
        
        <label htmlFor="cvv" className="label">
          <span className="title">CVV</span>
          <input
            id="cvv"
            className="input-field bg-transparent border border-primary-purple/30 rounded-md focus:border-primary-purple focus:ring-primary-purple text-white"
            type="text"
            name="cvv"
            placeholder="CVV"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            maxLength={3}
          />
        </label>
      </div>
      
      <Button 
        onClick={handleCheckout}
        className="checkout-btn bg-primary-purple hover:bg-transparent hover:text-primary-purple hover:border-primary-purple border-2 border-transparent w-full py-6 mt-4 rounded-xl font-semibold transition-all duration-300"
      >
        Checkout
      </Button>
    </div>
  );
};

export default PaymentForm;
