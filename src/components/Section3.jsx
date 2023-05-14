import React from 'react'
import backgroundImage from '../images/img_7.png'

const Section3 = () => {
  return (
    <section class="text-gray-600 body-font" style={{ backgroundImage: `url(${backgroundImage})` }}>
    <div class="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img className="object-cover object-center rounded" src={require('../images/img_8.png')} alt="img" />
      </div>
      <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 class="title-font sm:text-5xl text-3xl mb-4 font-medium text-white">Before they sold out
          <br class="hidden lg:inline-block"/>readymade gluten
        </h1>
        <p class="mb-8 leading-relaxed text-gray-800 font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eos quis porro, corrupti fugit adipisci vitae, sit fuga velit exercitationem molestias inventore saepe. Sint eveniet nesciunt alias libero qui ratione?</p>
        <div class="flex justify-center">
          <button class="inline-flex text-white bg-[#00df9a] border-0 py-2 px-6 focus:outline-none hover:bg-green-400 rounded text-lg">learn more</button>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Section3