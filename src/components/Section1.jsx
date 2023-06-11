import React from 'react'
import backgroundImage from '../images/img_6.png'


const Section1 = () => {
    return (
        <div className='w-full  py-16 px-4' style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <div className='flex flex-col justify-center md:text-left text-center'>
                    <p className='text-[#00df9a] font-bold'>Lorem ipsum dolor sit.</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Lorem ipsum dolor sit.</h1>
                    <p className='leading-relaxed'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore animi similique quibusdam facere asperiores perferendis esse quas. Beatae, repellat inventore?</p>
                </div>
                <img className="w-[500px] mx-auto my-4" src={require('../images/img_2.jpg')} alt="img" />
            </div>
        </div>
    )
}

export default Section1