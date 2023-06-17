import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Cart = () => {
  const location = useLocation();
  const { cartData } = location.state;
  const navigate = useNavigate();
  const [isPurchased, setIsPurchased] = useState(false);

  useEffect(() => {
    if (isPurchased) {
      // Redirect back to the custom page after a delay
      setTimeout(() => {
        navigate('/custom');
      }, 2000);
    }
  }, [isPurchased, navigate]);

  const handleBuy = () => {
    setIsPurchased(true);
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-8">Your Cart</h2>
        <div className="bg-white rounded-md shadow-md p-4">
          <div className="flex items-center mb-4">
            <img src={cartData.selectedProduct.image} alt={cartData.selectedProduct.name} className="w-32 h-32 mr-4" />
            <div>
              <h3 className="text-xl font-bold mb-2">{cartData.selectedProduct.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{cartData.selectedProduct.description}</p>
              <p className="text-yellow-600 text-2xl font-semibold mb-4">
                Price: ${cartData.selectedProduct.price}
              </p>
            </div>
          </div>
          <h3 className="text-xl font-bold mb-2">Selected Gear</h3>
          <p className="text-sm text-gray-500 mb-4">Gear Quantity: {cartData.selectedGear}</p>
          <h3 className="text-xl font-bold mb-2">Total Price</h3>
          <p className="text-sm text-gray-500 mb-4">Total: ${cartData.totalPrice}</p>
          <button
            onClick={handleBuy}
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
            disabled={isPurchased}
          >
            Buy
          </button>
          {isPurchased && (
            <p className="text-green-500 mt-4">Your item has been purchased. Redirecting back to the custom page...</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
