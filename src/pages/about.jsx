import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// import '../components/test.css'

function about() {
  return (
    <div>
      <Navbar></Navbar>
      <section className="text-gray-600 body-font">
        <div class="container my-18 px-6 mx-auto">

          <section class="mb-28 ">
            <div class="px-6 py-12 md:px-12 text-center lg:text-left">
              <div class="container mx-auto xl:px-32">
                <div class="grid lg:grid-cols-2 gap-12 flex items-center md:max-w-[1020px]">
                  <div class="mt-12 lg:mt-0">
                    <h1 class="text-5xl md:text-5xl xl:text-4xl font-bold tracking-tight mb-12 text-white" >What We're All About</h1>
                    <p className='tracking-tight mb-2 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, ullam optio enim quas asperiores aut obcaecati sit delectus voluptates sint? Obcaecati optio labore tempore assumenda laboriosam corrupti cum esse perspiciatis laudantium ipsa doloremque id magni,!</p>
                  </div>
                  <div class="mb-12 lg:mb-0">
                    <img className=" w-full rounded-lg shadow-lg" src={require('../images/img_9.jpg')} alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="mb-32 text-gray-800">
            <div className='justify-center text-center mb-4 text-4xl text-white '>Made in India</div>
            <img className=" w-full rounded-lg shadow-lg mb-6" src={require('../images/img_18.jpg')} alt="img" />

            <h1 class="font-bold text-3xl mb-6">Hand Build</h1>

            <p className='text-white'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi harum tempore
              cupiditate asperiores provident, itaque, quo ex iusto rerum voluptatum delectus corporis
              quisquam maxime a ipsam nisi sapiente qui optio! Dignissimos harum quod culpa officiis
              suscipit soluta labore! Expedita quas, nesciunt similique autem, sunt, doloribus pariatur
              maxime qui sint id enim. Placeat, maxime labore. Dolores ex provident ipsa impedit, omnis
              magni earum. Sed fuga ex ducimus consequatur corporis, architecto nesciunt vitae ipsum
              consequuntur perspiciatis nulla esse voluptatem quos dolorum delectus similique eum vero
              in est velit quasi pariatur blanditiis incidunt quam.
            </p>
          </section>
        </div>
      </section>
      <Footer></Footer>
    </div>
  )
}

export default about