import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Check, ArrowLeft, CreditCard, Building2, Smartphone, Shield } from 'lucide-react';

interface PaymentLocationState {
  serviceId: string;
  serviceName: string;
  tier: 'basic' | 'standard' | 'premium';
  price: string;
  deliveryTime: string;
  features: string[];
}

export default function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as PaymentLocationState;

  const [paymentMethod, setPaymentMethod] = useState<'card' | 'bank' | 'mobile' | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  // Redirect back if no payment info
  if (!state) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Invalid Payment Request</h2>
          <p className="text-gray-600 mb-6">Please select a service package to continue</p>
          <Link
            to="/services"
            className="inline-block bg-[#0CB35D] text-white px-6 py-3 rounded-full font-medium hover:bg-[#0a9d4f] transition-colors"
          >
            Browse Services
          </Link>
        </div>
      </div>
    );
  }

  const handlePayment = async () => {
    if (!paymentMethod) return;

    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      navigate('/dashboard', { 
        state: { 
          orderPlaced: true,
          orderDetails: {
            serviceId: state.serviceId,
            serviceName: state.serviceName,
            tier: state.tier,
            price: state.price,
            deliveryTime: state.deliveryTime,
            paymentMethod,
            orderDate: new Date().toISOString(),
            status: 'pending'
          }
        } 
      });
    }, 2000);
  };

  const paymentMethods = [
    {
      id: 'card',
      name: 'Credit/Debit Card',
      icon: CreditCard,
      description: 'Visa, Mastercard, American Express',
    },
    {
      id: 'bank',
      name: 'Bank Transfer',
      icon: Building2,
      description: 'Direct bank transfer',
    },
    {
      id: 'mobile',
      name: 'Mobile Payment',
      icon: Smartphone,
      description: 'PayPal, Apple Pay, Google Pay',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to={`/services/${state.serviceId}`}
          className="inline-flex items-center gap-2 text-gray-600 hover:text-[#0CB35D] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Service
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Service</p>
                  <p className="font-medium text-gray-900">{state.serviceName}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-600 mb-1">Package</p>
                  <p className="font-medium text-gray-900 capitalize">{state.tier}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-600 mb-1">Delivery Time</p>
                  <p className="font-medium text-gray-900">{state.deliveryTime}</p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Included Features</h3>
                <ul className="space-y-2">
                  {state.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#0CB35D] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium text-gray-900">{state.price}</span>
                </div>
                <div className="flex justify-between items-center text-lg font-bold">
                  <span className="text-gray-900">Total</span>
                  <span className="text-[#0CB35D]">{state.price}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Method Selection */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Complete Your Payment</h1>
              <p className="text-gray-600 mb-8">Select your preferred payment method</p>

              {/* Security Badge */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-8 flex items-start gap-3">
                <Shield className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-green-900 mb-1">Secure Payment</p>
                  <p className="text-sm text-green-700">
                    Your payment information is encrypted and secure
                  </p>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="space-y-4 mb-8">
                {paymentMethods.map((method) => {
                  const Icon = method.icon;
                  return (
                    <button
                      key={method.id}
                      onClick={() => setPaymentMethod(method.id as any)}
                      className={`w-full text-left border-2 rounded-xl p-6 transition-all ${
                        paymentMethod === method.id
                          ? 'border-[#0CB35D] bg-green-50'
                          : 'border-gray-200 hover:border-gray-300 bg-white'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`p-3 rounded-lg ${
                            paymentMethod === method.id
                              ? 'bg-[#0CB35D] text-white'
                              : 'bg-gray-100 text-gray-600'
                          }`}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1">{method.name}</h3>
                          <p className="text-sm text-gray-600">{method.description}</p>
                        </div>
                        {paymentMethod === method.id && (
                          <Check className="w-6 h-6 text-[#0CB35D] flex-shrink-0" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Payment Form (Simplified) */}
              {paymentMethod === 'card' && (
                <div className="border-t border-gray-200 pt-6 mb-8">
                  <h3 className="font-semibold text-gray-900 mb-4">Card Information</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Card Number
                      </label>
                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0CB35D] focus:border-transparent"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0CB35D] focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          CVV
                        </label>
                        <input
                          type="text"
                          placeholder="123"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0CB35D] focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {paymentMethod === 'bank' && (
                <div className="border-t border-gray-200 pt-6 mb-8">
                  <h3 className="font-semibold text-gray-900 mb-4">Bank Transfer Details</h3>
                  <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700">
                    <p className="mb-2">
                      <strong>Bank Name:</strong> Example Bank
                    </p>
                    <p className="mb-2">
                      <strong>Account Number:</strong> 1234567890
                    </p>
                    <p className="mb-2">
                      <strong>Routing Number:</strong> 987654321
                    </p>
                    <p className="text-xs text-gray-600 mt-3">
                      Please include your order reference in the transfer description
                    </p>
                  </div>
                </div>
              )}

              {paymentMethod === 'mobile' && (
                <div className="border-t border-gray-200 pt-6 mb-8">
                  <h3 className="font-semibold text-gray-900 mb-4">Mobile Payment</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    You will be redirected to complete your payment securely
                  </p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handlePayment}
                  disabled={!paymentMethod || isProcessing}
                  className={`flex-1 py-4 rounded-full font-medium text-lg transition-colors ${
                    !paymentMethod || isProcessing
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-[#0CB35D] text-white hover:bg-[#0a9d4f]'
                  }`}
                >
                  {isProcessing ? 'Processing...' : `Pay ${state.price}`}
                </button>
                <Link
                  to={`/services/${state.serviceId}`}
                  className="flex-1 py-4 rounded-full font-medium text-lg text-center border-2 border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </Link>
              </div>

              <p className="text-xs text-gray-500 text-center mt-6">
                By completing this payment, you agree to our Terms of Service and Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
