import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// import '../components/test.css'
import backgroundImage from '../images/img_17.jpg'


function about() {
  return (
    <div>
      <Navbar></Navbar>
      <section className="text-gray-600 body-font">
        <div class="container my-18 px-6 mx-auto">

          <section class="mb-28 ">
            <div class="px-6 py-12 md:px-12 text-center lg:text-left">
              <div class="container mx-auto xl:px-32">
                <div class="grid lg:grid-cols-2 gap-12  items-center md:max-w-[1020px]">
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
            <div className='justify-center text-center mb-6 text-4xl border-t-2 border-b-2 p-2 font-bold md:text-5xl px-2 mx-92 py-3 text-orange-400'>Made in India</div>
            <img className=" w-full rounded-lg shadow-lg mb-6" src={require('../images/img_18.jpg')} alt="img" />
            <div className='grid grid-cols-2'>
              <div>
                <h1 class="font-bold text-3xl mb-6">Hand Build</h1>

                <p className='text-white'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi harum tempore
                  cupiditate asperiores provident, itaque, quo ex iusto rerum voluptatum delectus corporis
                  quisquam maxime a ipsam nisi sapiente qui optio! Dignissimos harum quod culpa officiis
                  suscipit soluta labore! Expedita quas, nesciunt similique autem, sunt, doloribus pariatur
                  maxime qui sint id enim. Placeat, maxime labore. Dolores ex provident ipsa impedit, omnis
                  magni earum. Sed fuga ex ducimus consequatur corporis, architecto nesciunt vitae ipsum
                  consequuntur perspiciatis nulla esse voluptatem quos dolorum delectus similique eum vero
                  in est vel
                </p>
              </div>
              <img className="  rounded-lg shadow-lg" src={require('../images/img_19.jpg')} alt="img" />it quasi pariatur blanditiis incidunt quam.
            </div>
          </section>
          <section class="text-gray-600 body-font">
            <div class="container px-5 py-4 mx-auto">
              <div class="flex flex-col text-center w-full mb-12">
                <h1 class="sm:text-4xl text-2xl font-medium title-font mb-4 text-gray-900">What Brands we modify</h1>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum autem voluptatibus dolorem repellat ratione, tenetur animi inventore! Magnam quia, aspernatur tenetur non aut dignissimos rem? </p>
              </div>
              <div class="flex flex-wrap -m-4 mb-4 ">
                <div class="lg:w-1/3 sm:w-1/2 p-4 ">
                  <div class="flex relative ">
                    {/* <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/600x360"/> */}
                    <img className=" w-full rounded-lg shadow-lg mb-6 absolute inset-0 h-full object-cover object-center transition-transform " src={require('../images/img_24.jpg')} alt="img" />
                    <div
                      class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
                    </div>
                    <div class="px-8 py-10 relative z-10 w-full border-2 rounded-lg border-[#00df9a] bg-transparent opacity-0 hover:opacity-100">
                      <h2 class="tracking-widest text-2xl title-font font-extrabold text-[#00df9a] mb-1 uppercase">BMW</h2>
                      <h1 class="title-font text-lg font-medium text-lime-400 mb-3">G 310 RR</h1>
                      <p class="leading-relaxed text-white">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    </div>
                  </div>
                </div>
                <div class="lg:w-1/3 sm:w-1/2 p-4 ">
                  <div class="flex relative ">
                    {/* <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/600x360"/> */}
                    <img className=" w-full rounded-lg shadow-lg mb-6 absolute inset-0 h-full object-cover object-center transition-transform " src={require('../images/img_23.jpg')} alt="img" />
                    <div
                      class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
                    </div>
                    <div class="px-8 py-10 relative z-10 w-full border-2 rounded-lg border-[#00df9a] bg-transparent opacity-0 hover:opacity-100">
                      <h2 class="tracking-widest text-2xl title-font font-extrabold text-[#00df9a] mb-1 uppercase">Royal Enfield</h2>
                      <h1 class="title-font text-lg font-medium text-lime-400 mb-3">Shooting Stars</h1>
                      <p class="leading-relaxed text-white">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    </div>
                  </div>
                </div>
                <div class="lg:w-1/3 sm:w-1/2 p-4 ">
                  <div class="flex relative ">
                    {/* <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/600x360"/> */}
                    <img className=" w-full rounded-lg shadow-lg mb-6 absolute inset-0 h-full object-cover object-center transition-transform " src={require('../images/img_25.jpg')} alt="img" />
                    <div
                      class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
                    </div>
                    <div class="px-8 py-10 relative z-10 w-full border-2 rounded-lg border-[#00df9a] bg-transparent opacity-0 hover:opacity-100">
                      <h2 class="tracking-widest text-2xl title-font font-extrabold text-[#00df9a] mb-1 uppercase">Yamaha</h2>
                      <h1 class="title-font text-lg font-medium text-lime-400 mb-3">Y2F-R6</h1>
                      <p class="leading-relaxed text-white">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    </div>
                  </div>
                </div>
                <div class="lg:w-1/3 sm:w-1/2 p-4 ">
                  <div class="flex relative ">
                    {/* <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/600x360"/> */}
                    <img className=" w-full rounded-lg shadow-lg mb-6 absolute inset-0 h-full object-cover object-center transition-transform " src={require('../images/img_21.jpg')} alt="img" />
                    <div
                      class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
                    </div>
                    <div class="px-8 py-10 relative z-10 w-full border-2 rounded-lg border-[#00df9a] bg-transparent opacity-0 hover:opacity-100">
                      <h2 class="tracking-widest text-2xl title-font font-extrabold text-[#00df9a] mb-1 uppercase">Ducati</h2>
                      <h1 class="title-font text-lg font-medium text-lime-400 mb-3">Shooting Stars</h1>
                      <p class="leading-relaxed text-white">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    </div>
                  </div>
                </div>
                <div class="lg:w-1/3 sm:w-1/2 p-4 ">
                  <div class="flex relative ">
                    {/* <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/600x360"/> */}
                    <img className=" w-full rounded-lg shadow-lg mb-6 absolute inset-0 h-full object-cover object-center transition-transform " src={require('../images/img_20.jpg')} alt="img" />
                    <div
                      class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
                    </div>
                    <div class="px-8 py-10 relative z-10 w-full border-2 rounded-lg border-[#00df9a] bg-transparent opacity-0 hover:opacity-100">
                      <h2 class="tracking-widest text-2xl title-font font-extrabold text-[#00df9a] mb-1 uppercase">Harley Devidson</h2>
                      <h1 class="title-font text-lg font-medium text-lime-400 mb-3">Shooting Stars</h1>
                      <p class="leading-relaxed text-white">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    </div>
                  </div>
                </div>
                <div class="lg:w-1/3 sm:w-1/2 p-4 ">
                  <div class="flex relative ">
                    {/* <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/600x360"/> */}
                    <img className=" w-full rounded-lg shadow-lg mb-6 absolute inset-0 h-full object-cover object-center transition-transform " src={require('../images/img_22.jpg')} alt="img" />
                    <div
                      class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
                    </div>
                    <div class="px-8 py-10 relative z-10 w-full border-2 rounded-lg border-[#00df9a] bg-transparent opacity-0 hover:opacity-100">
                      <h2 class="tracking-widest text-2xl title-font font-extrabold text-[#00df9a] mb-1 uppercase">Suzuki</h2>
                      <h1 class="title-font text-lg font-medium text-lime-400 mb-3">AMZ DA CRUZ</h1>
                      <p class="leading-relaxed text-white">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 py-8">
                <div class="h-96 w-full">
                  <img className="h-full w-full object-cover transition-transform duration-500" src={require('../images/img_27.jpg')} alt="img" />
                </div>
                <div
                  class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
                </div>
                <div
                  class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h1 class="text-lg text-orange-500 font-semibold font-sans">We are Riders</h1>
                  <h1 class="font-dmserif text-3xl font-bold text-white">Start Customizing</h1>
                  <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
                  <button
                    class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 hover:bg-gray-500">See
                    More</button>
                </div>
              </div>
            </div>
          </section>
          
        </div>
        <div className='md:mt-12'>
            <div class=" px-6 mx-auto bg-cover bg-no-repeat" style={{ backgroundImage: `url(${backgroundImage})` }}>

              <section class=" ">

                <div class="px-6 py-12 md:px-12 text-center lg:text-left">
                  <div class="container mx-auto xl:px-32">
                    <div class="lg:grid-cols-2 gap-12 flex items-center">
                      <div class="mt-12 lg:mt-0">
                        <h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12" >Let's Build Your <br /><span>Dream Bike!</span></h1>
                        <p className='leading-relaxed mb-4 text-center lg:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi totam aut quae quo, ducimus voluptas reprehenderit facilis ullam maxime cupiditate explicabo quidem molestiae dicta harum consequatur ratione, numquam distinctio hic nam, temporibus porro quia. Tenetur, similique commodi possimus explicabo harum quae. Aperiam error nesciunt explicabo iste, sapiente vel animi eaque.</p>
                        <a class="inline-block px-7 py-3 mr-2 bg-gray-200 text-gray-700 font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Let's Talk!</a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
      </section>
      <Footer></Footer>
    </div>
  )
}

export default about