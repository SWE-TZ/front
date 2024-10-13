'use client'
import React, { useState } from 'react';
import Image from "next/image";
import clean from "/public/images/cleaning.jpg";
import elec from "/public/images/Electricity.jpg";
import plum from "/public/images/plumbing.jpg";
import { FaShoppingCart, FaMinus, FaPlus, FaCreditCard, FaPaypal } from 'react-icons/fa'; 
import { MdEmail, MdPerson, MdDateRange, MdSecurity } from 'react-icons/md';  
import Header from "@/app/components/checkout/header"; 
import Place from '@mui/icons-material/Place';  
import DesignServices from '@mui/icons-material/DesignServices';  
import Badge from '@mui/icons-material/Badge';  
import DeleteForever from '@mui/icons-material/DeleteForever'; 

const ShoppingCart = () => {
  const [paymentMethod, setPaymentMethod] = useState('credit-card'); 
  return (
    <div className="relative min-h-screen">
      <Header />
      <div className="relative flex flex-col lg:flex-row pb-20 w-11/12 mx-auto justify-between space-y-8 lg:space-x-8">
        <div></div>
        {/* Checkout Section */}
        <div className="w-full lg:w-1/2 border-dark p-6 rounded-lg shadow-2xl border-double border-4 border-dark">
          <h2 className="text-3xl font-semibold mb-6">Checkout</h2>
          <div className="mb-4">
            <label className="block mb-2 text-gray-600 flex items-center">
              <MdEmail className="mr-2 text-orange-500" />Email Address
            </label>
            <input
              type="email"
              placeholder="annabelledesign@gmail.com"
              className="w-full p-2 border border-gray-300 rounded "
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-gray-600">Select Payment Method</label>
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  type="radio"
                  name="payment"
                  id="credit-card"
                  checked={paymentMethod === 'credit-card'}
                  onChange={() => setPaymentMethod('credit-card')}
                />
                <label htmlFor="credit-card" className="ml-2 flex items-center">
                  <FaCreditCard className="mr-2 text-blue-500" /> Credit Card
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="payment"
                  id="paypal"
                  checked={paymentMethod === 'paypal'}
                  onChange={() => setPaymentMethod('paypal')}
                />
                <label htmlFor="paypal" className="ml-2 flex items-center">
                  <FaPaypal className="mr-2 text-indigo-600" /> PayPal - Pay Now or Pay Later
                </label>
              </div>
            </div>
          </div>

          {/* Conditionally render based on payment method */}
          {paymentMethod === 'credit-card' ? (
            <>
              <div className="mb-4">
                <label className="block mb-2 text-gray-600 flex items-center">
                  <MdPerson className="mr-2 text-yellow-500" /> Name on Card
                </label>
                <input
                  type="text"
                  placeholder="Annabelle Design"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>

              <div className="mb-4">
                <label className="block mb-2 text-gray-600 flex items-center">
                  <FaCreditCard className="mr-2 text-blue-500" /> Card Number
                </label>
                <input
                  type="text"
                  placeholder="Visa 4••• 0284"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label className="block mb-2 text-gray-600 flex items-center">
                    <MdDateRange className="mr-2 text-green-500" /> Exp. Date
                  </label>
                  <input
                    type="text"
                    placeholder="03/29"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="w-1/2">
                  <label className="block mb-2 text-gray-600 flex items-center">
                    <MdSecurity className="mr-2 text-red-500" /> CVV
                  </label>
                  <input
                    type="text"
                    placeholder="185"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
              </div>
            </>
          ) : (
            <div className="mb-4">
              <label className="block mb-2 text-gray-600 flex items-center">
                <FaPaypal className="mr-2 text-indigo-600" /> PayPal Email
              </label>
              <input
                type="email"
                placeholder="youremail@paypal.com"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          )}
          <div className="mt-6 border-t pt-4">
            <p className="text-gray-600">Tax: $2.88</p>
            <h3 className="text-xl font-semibold mt-2">Total: $86.88</h3>
          </div>
          <button className="mt-6 w-full bg-dark hover:bg-gray-400 text-white p-3 rounded-lg font-semibold">
            PLACE ORDER
          </button>
        </div>
        {/* Shopping Cart Section */}
        <div className="w-full lg:w-1/3 shadow-2xl p-6 rounded-lg border-double border-4 border-dark">
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <FaShoppingCart className="mr-2 text-dark" /> Your Services
          </h2>
          {/* Cart Item */}
          <div className="flex items-center justify-between mb-6 border-b pb-4">
            <Image
              src={clean}
              alt="Indoor House Plant"
              width={400}   
              height={300}  
              className="w-24 h-26 rounded-lg"
            />
            <div className="flex-1 ml-4">
              <h4 className="font-medium text-lg">Cleaning</h4>
              <p className="block mb-2 text-gray-600 flex items-center "><MdDateRange className="mr-2 text-gray-500"/>Mon, sep 16 at 11:00am </p>
              <p className="block mb-2 text-gray-600 flex items-center"><Place className="mr-2 text-gray-500"/>1600 Pennsylvania Ave NW, Washington, DC 20500</p>
              <p className="block mb-2 text-gray-600 flex items-center"><DesignServices className="mr-2 text-gray-500"/>Large Est.3hr</p>
              <p className="block mb-2 text-gray-600 flex items-center"><Badge className="mr-2 text-gray-500"/>Tasker Name:Sophia Carter </p>
            </div>
            <div className="flex items-center space-x-2 ">
              <button className=" px-2 py-1 rounded">
                <DeleteForever className="text-dark w-1/2 md:w-full" />
              </button>
            </div>
          </div>
          {/* Repeat for other products */}
          <div className="flex items-center justify-between mb-6 border-b pb-4">
            <Image
              src={plum}
              alt="Bouquet of Pink Tulips"
              width={400}   
              height={300} 
              className="w-24 h-24 rounded-lg"
            />
            <div className="flex-1 ml-4">
              <h4 className="font-medium text-lg">Plumbing</h4>
              <p className="block mb-2 text-gray-600 flex items-center "><MdDateRange className="mr-2 text-gray-500"/>Fri, Nov 10 at 9:45am</p>
              <p className="block mb-2 text-gray-600 flex items-center"><Place className="mr-2 text-gray-500"/>742 Evergreen Terrace, Springfield, IL 62704</p>
              <p className="block mb-2 text-gray-600 flex items-center"><DesignServices className="mr-2 text-gray-500"/>small Est.2hr</p>
              <p className="block mb-2 text-gray-600 flex items-center"><Badge className="mr-2 text-gray-500"/>Tasker Name:Daniel Martinez </p>
            </div>
            <div className="flex items-center space-x-2">
              <button className=" px-2 py-1 rounded">
                <DeleteForever className="text-dark" />
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between mb-6 border-b pb-4">
            <Image
              src={elec}
              alt="Small Succulent"
              width={400}   
              height={300} 
              className="w-24 h-24 rounded-lg"
            />
            <div className="flex-1 ml-4">
              <h4 className="font-medium text-lg">Electrical</h4>
              <p className="block mb-2 text-gray-600 flex items-center "><MdDateRange className="mr-2 text-gray-500"/>Wed, Oct 4 at 2:30pm</p>
              <p className="block mb-2 text-gray-600 flex items-center"><Place className="mr-2 text-gray-500"/>123 Elmwood Avenue Apt 4B Springfield, IL 62704</p>
              <p className="block mb-2 text-gray-600 flex items-center"><DesignServices className="mr-2 text-gray-500"/>small Est.1hr</p>
              <p className="block mb-2 text-gray-600 flex items-center"><Badge className="mr-2 text-gray-500"/>Tasker Name:William Harris </p>
            </div>
            <div className="flex items-center space-x-2">
              <button className=  "px-2 py-1 rounded">
                <DeleteForever className="text-dark" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;