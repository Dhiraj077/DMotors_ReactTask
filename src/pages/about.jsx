import React from 'react'
import Navbar from '../components/Navbar'

function about() {
  return (
    <div>
      <Navbar></Navbar>
      <section className="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-12 items-center justify-center flex-col">
          <img className='lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded' src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
            <div className="text-center lg:w-2/3 w-full">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Growth your business with us</h1>
              <p className="mb-8 leading-relaxed">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda maiores ipsa aliquid, perspiciatis, asperiores quis similique eum, provident ab quos officia dicta exercitationem at expedita eligendi consequatur earum. Pariatur, molestiae!</p>
              <div className="flex justify-center">
                <button className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">Know More</button>
              </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default about