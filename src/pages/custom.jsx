import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from '../components/Navbar';
import Image from '../images/img_36.jpg'
import Images2 from '../images/img_37.jpg'
import Images3 from '../images/img_38.jpg'
import Footer from '../components/Footer';
import Section7 from '../components/Section7';


const Custom = () => {
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
            description: 'Armoured up with Safe-Tech C.E level 2 protectors at elbows, shoulders, and back. ',
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

    return (
        <div>
            <Navbar></Navbar>
        <div className="container mx-auto px-4 py-8">
            <section class="mb-32 ">
                <div class="flex flex-wrap">
                    <div class="grow-0 shrink-0 basis-auto w-full lg:w-5/12 mb-12 lg:mb-0 ">
                        <div class="flex lg:py-12 ">
                            <img className=" w-full md:item-center rounded-lg shadow-lg z-10 ml-12" src={require('../images/img_35.jpg')} alt="img" />
                        </div>
                    </div>

                    <div class="grow-0 shrink-0 basis-auto w-full lg:w-7/12">
                        <div
                            class="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-full rounded-lg p-6 lg:pl-12 text-white flex items-center text-center lg:text-left">
                            <div class="lg:pl-12">
                                <h2 class="text-3xl font-bold mb-6">Start to buy your own Custom Gear</h2>
                                <p class="mb-6 pb-2 lg:pb-0">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, sint, repellat
                                    vel quo quisquam accusamus in qui at ipsa enim quibusdam illo laboriosam omnis.
                                    Labore itaque illum distinctio eum neque!
                                </p>

                                <div class="flex flex-col md:flex-row md:justify-around xl:justify-start mb-6 mx-auto">
                                    <p class="flex items-center mb-4 md:mb-2 lg:mb-0 mx-auto md:mx-0 xl:mr-20">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 mr-2">
                                            <path fill="currentColor"
                                                d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                                            </path>
                                        </svg>
                                        Best team
                                    </p>

                                    <p class="flex items-center mb-4 md:mb-2 lg:mb-0 mx-auto md:mx-0 xl:mr-20">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 mr-2">
                                            <path fill="currentColor"
                                                d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                                            </path>
                                        </svg>
                                        Best quality
                                    </p>

                                    <p class="flex items-center mb-2 lg:mb-0 mx-auto md:mx-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 mr-2">
                                            <path fill="currentColor"
                                                d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                                            </path>
                                        </svg>
                                        Best experience
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <h2 className="text-2xl font-bold mb-4">Buy your Bike Gear here</h2>
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
                                <img src={product.image} alt={product.name} className="mx-auto w-64 h-64 mb-4 object-cover" />
                                <div>
                                    <p className="mb-2 font-semibold text-white">Description: {product.description}</p>
                                    <p className="mb-2 font-semibold text-white">Selected Gear: {selectedGear}</p>
                                    <p className="mb-2 font-semibold text-white">Price: ${price}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                    <div className="flex justify-center mt-8">
                        <label htmlFor={`gear-${selectedProduct.id}`} className="mr-2 mb-8 text-xl text-white">
                            Select Gear:
                        </label>
                        <input
                            type="range"
                            id={`gear-${selectedProduct.id}`}
                            min="1"
                            max="10"
                            step="1"
                            value={selectedGear}
                            onChange={handleGearChange}
                            className="w-64"
                        />
                    </div>
                </div>
                <div className="lg:w-1/2 lg:ml-4">
                <img className=" w-full rounded-lg shadow-lg" src={require('../images/img_29.jpg')} alt="img" />
                    <div className="flex justify-center mt-4">
                        <button onClick={handlePurchase} className="bg-green-500 text-white px-4 py-2 rounded">
                            Purchase
                        </button>
                    </div>
                    <div className="flex justify-center mt-4 gap-4">
                        <p className='text-white font-semibold'>Total Gear Price: ${totalPrice}</p>
                        <p className='text-white font-semibold'>Number of Purchases: {numPurchases}</p>
                    </div>
                </div>
            </div>
        </div>
        <Section7></Section7>
        <Footer></Footer>
        </div>
    );
};

export default Custom;
