import React from 'react'
import Typed from "react-typed";
import backgroundImage from '../images/img_5.jpg';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './section4';
import Section5 from './section5';
import Section6 from './Section6';
import Section7 from './Section7';
import TestimonialCarousel from './TestimonialCarousel';

const Hero = () => {
    return (
        <>
        <div className="bg-cover bg-center "
            style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className='text-white'>
                <div className='max-w-[800px]  w-full h-screen mx-auto text-center flex flex-col justify-center'>
                    <p className='text-[#00df9a] font-extrabold p-2'>Custom Bike Builder</p>
                    <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Make Your Bike Truly Yours</h1>
                    <div className='flex justify-center items-center'>
                        <p className='md:text-4xl sm:text-3xl text-xl font-bold '>The Ride for </p>
                        <Typed className='md:text-4xl sm:text-3xl text-xl font-bold md:pl-4 pl-2' strings={['Lifetime', ' Comfort', 'Style', 'Passion']} typeSpeed={80} backSpeed={100} loop />
                    </div>
                    <p className='p-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, sed! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, assumenda?</p>
                    <button className='border-white border-2 rounded-md font-medium mx-auto my-6 p-2 hover:bg-white hover:text-[#00df9a] uppercase'>cheak our works</button>
                </div>
            </div>
        </div>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <TestimonialCarousel />
            <Section5 />
            <Section6 />
            <Section7 />
            </>
    )
}

export default Hero