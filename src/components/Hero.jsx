import React from 'react'
import  Typed  from "react-typed";

const Hero = () => {
    return (
        <div className='text-white'>
            {/* <img className="object-cover object-center saturate-150 opacity-95" src={require('../images/img-1.jpg')} alt="img" /> */}
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold p-2'>Custom Bike Builder</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Make Your Bike Truly Yours</h1>
                <div>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold'>The Ride for</p>
                    <Typed strings={['Lifetime', 'Comfort', 'Style', 'Passion']} typeSpeed={80} backSpeed={100} loop />
                </div>
            </div>
        </div>
    )
}

export default Hero