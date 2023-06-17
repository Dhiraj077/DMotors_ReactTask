import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from '../components/Navbar';
import Image from '../images/img_36.jpg';
import Images2 from '../images/img_37.jpg';
import Images3 from '../images/img_38.jpg';
import Footer from '../components/Footer';
import Section7 from '../components/Section7';
import '../custo.css'; 

const Custom = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: 'Helmet',
      price: 100,
      description: 'Vega Helmets at BIKERSTORE.IN',
      image: Image,
    },
    {
      id: 2,
      name: 'Axor Flow Riding Jacket',
      price: 200,
      description: 'Armoured up with Safe-Tech C.E level 2 protectors at elbows, shoulders, and back.',
      image: Images2,
    },
    {
      id: 3,
      name: 'Riding Gloves',
      price: 300,
      description: 'Probiker Leather Bike, Motorcycle Riding Gloves (Black, Xxl) (Blk-Probiker-Xxl-939, Cycling)',
      image: Images3,
    },
    // Add more products here
  ];

  const [selectedProductIndex, setSelectedProductIndex] = useState(0);
  const [selectedGear, setSelectedGear] = useState('');
  const [price, setPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [numPurchases, setNumPurchases] = useState(0);

  const selectedProduct = products[selectedProductIndex];

  const handleGearChange = (event) => {
    setSelectedGear(event.target.value);
    setPrice(parseInt(event.target.value) * selectedProduct.price);
  };

  const handlePurchase = () => {
    setTotalPrice(totalPrice + price);
    setNumPurchases(numPurchases + 1);
  };

  const handleAddToCart = () => {
    const cartData = {
      selectedProduct: selectedProduct,
      selectedGear: selectedGear,
      totalPrice: totalPrice,
    };

    // Navigate to cart page and pass cartData as route data
    navigate('/cart', { state: { cartData } });
  };

  return (
    <div className="custom-page">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-8">Buy Your Bike Gear Here</h2>
        <div className="lg:flex lg:items-center lg:justify-center">
          <div className="lg:w-1/2">
            <h3 className="text-xl font-bold mb-2 text-yellow-600">{selectedProduct.name}</h3>
            <Slider
              dots
              infinite
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              beforeChange={(current, next) => {
                setSelectedProductIndex(next);
                setSelectedGear('');
                setPrice(0);
              }}
            >
              {products.map((product) => (
                <div key={product.id}>
                  <img src={product.image} alt={product.name} className="h-64 w-full object-cover rounded" />
                </div>
              ))}
            </Slider>
            <div className="flex justify-between items-center mt-4">
              <label htmlFor="gear" className="text-gray-700 mr-2">
                Select Gear:
              </label>
              <select
                id="gear"
                className="p-2 border rounded-md"
                value={selectedGear}
                onChange={handleGearChange}
              >
                <option value="">Select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div className="flex justify-center mt-4">
              <button
                onClick={handlePurchase}
                className="bg-blue-500 text-white px-4 py-2 rounded"
                disabled={!selectedGear}
              >
                Purchase
              </button>
            </div>
            <div className="flex justify-center mt-4">
              <button
                onClick={handleAddToCart}
                className="bg-green-500 text-white px-4 py-2 rounded"
                disabled={!selectedGear}
              >
                Add to Cart
              </button>
            </div>
            <div className="flex justify-center mt-4 gap-4">
              <p className="text-yellow-200 font-semibold">Total Gear Price: ${totalPrice}</p>
              <p className="text-yellow-200 font-semibold">Number of Purchases: {numPurchases}</p>
            </div>
          </div>
          <div className="lg:w-1/2 ml-20">
            <h3 className="text-xl font-bold mb-2">Description</h3>
            <p className="text-sm text-gray-500 mb-4">
              {selectedProduct.description} - ${selectedProduct.price}
            </p>
          </div>
        </div>
      </div>
      <Section7 />
      <Footer />
    </div>
  );
};

export default Custom;
