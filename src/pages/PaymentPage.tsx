
import React, { useState } from 'react';
import EnhancedNavbar from '@/components/EnhancedNavbar';
import PaymentForm from '@/components/payment/PaymentForm';
import PaymentMethodSelector from '@/components/payment/PaymentMethodSelector';
import { Card } from '@/components/ui/card';

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('credit');
  
  return (
    <>
      <EnhancedNavbar />
      <div className="container mx-auto py-20 px-4">
        <h1 className="text-3xl font-bold text-center mb-10 text-primary-purple">Complete Your Purchase</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="animate-fade-in">
            <Card className="p-6 bg-dark-purple border-primary-purple/30">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between border-b border-primary-purple/20 pb-2">
                  <span>JavaScript Mastery Course</span>
                  <span className="font-semibold">$49.99</span>
                </div>
                
                <div className="flex justify-between border-b border-primary-purple/20 pb-2">
                  <span>Platform fee</span>
                  <span className="font-semibold">$1.99</span>
                </div>
                
                <div className="flex justify-between pt-2">
                  <span className="font-bold">Total</span>
                  <span className="font-bold text-primary-purple">$51.98</span>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="font-semibold mb-4">Select Payment Method</h3>
                <PaymentMethodSelector 
                  selectedMethod={paymentMethod}
                  onChange={setPaymentMethod}
                />
              </div>
            </Card>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {paymentMethod === 'credit' ? (
              <PaymentForm />
            ) : (
              <div className="flex items-center justify-center h-full">
                <Card className="w-full p-8 bg-dark-purple border border-primary-purple/30 text-center">
                  <h2 className="text-xl font-semibold mb-4">Continue with {
                    paymentMethod === 'google' ? 'Google Pay' :
                    paymentMethod === 'apple' ? 'Apple Pay' :
                    paymentMethod === 'paypal' ? 'PayPal' : 'Credit Card'
                  }</h2>
                  
                  <button className="bg-primary-purple hover:bg-transparent hover:text-primary-purple border-2 border-transparent hover:border-primary-purple px-6 py-3 rounded-lg transition-all duration-300 w-full mt-4">
                    Continue to {
                      paymentMethod === 'google' ? 'Google Pay' :
                      paymentMethod === 'apple' ? 'Apple Pay' :
                      paymentMethod === 'paypal' ? 'PayPal' : 'Credit Card'
                    }
                  </button>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
