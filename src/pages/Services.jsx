import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import backgroundImage from '../images/img_7.png'
import Section2 from '../components/Section2'
import Section7 from '../components/Section7'
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <div class="container my-20 px-6 mx-auto">

                    <section class="mb-32 ">
                        <div class="flex flex-wrap">
                            <div class="grow-0 shrink-0 basis-auto w-full lg:w-5/12 mb-12 lg:mb-0 ">
                                <div class="flex lg:py-12 ">
                                    <img className=" w-full md:item-center rounded-lg shadow-lg z-10 ml-12" src={require('../images/img_24.jpg')} alt="img" />
                                </div>
                            </div>

                            <div class="grow-0 shrink-0 basis-auto w-full lg:w-7/12">
                                <div
                                    class="bg-yellow-500 h-full rounded-lg p-6 lg:pl-12 text-white flex items-center text-center lg:text-left">
                                    <div class="lg:pl-12">
                                        <h2 class="text-3xl font-bold mb-6">The Best Services offer on the Custom Bikes</h2>
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

                </div>
                <section class="text-gray-600 body-font bg-cover bg-no-repeat" style={{ backgroundImage: `url(${backgroundImage})` }}>
                    <div class="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center md:max-w-5xl">
                        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                            <img className="object-cover object-center rounded" src={require('../images/img_8.png')} alt="img" />
                        </div>
                        <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                            <p class="flex items-center text-white hover:text-slate-300 cursor-pointer mb-2 sm:text-3xl font-semibold text-2xl">
                                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 ">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Bike Modifying
                            </p>
                            <p class="flex items-center text-white hover:text-slate-300 cursor-pointer mb-2 sm:text-3xl font-semibold text-2xl">
                                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 ">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Maintenance
                            </p>
                            <p class="flex items-center text-white hover:text-slate-300 cursor-pointer mb-2 sm:text-3xl font-semibold text-2xl">
                                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 ">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Accessories
                            </p>
                            <p class="flex items-center text-white hover:text-slate-300 cursor-pointer mb-6 sm:text-3xl font-semibold text-2xl">
                                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0 ">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Custom Build
                            </p>
                            <div class="flex justify-center">
                                <button class="inline-flex text-white bg-[#00df9a] border-0 py-2 px-6 focus:outline-none hover:bg-yellow-500 rounded text-lg">Button</button>
                            </div>
                        </div>
                    </div>
                </section>
                <div>
                    <Section2></Section2>
                </div>
                <section class="mb-32 text-gray-800">
                    <div class="container my-16 px-6 mx-auto md:max-w-screen-lg">
                        <div class="flex flex-wrap mb-12">
                            <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6 mb-6 lg:mb-0">
                                <div class="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg">
                                    <img className=" w-full rounded-lg shadow-lg" src={require('../images/img_29.jpg')} alt="img" />
                                    <a href="#!">
                                        <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"></div>
                                    </a>
                                </div>
                            </div>

                            <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6">
                                <h3 class="text-3xl text-[#00df9a] font-bold mb-4 font-mono">Bike Modifying</h3>

                                <p class="text-white mb-6">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti facilis molestiae, aspernatur iste maiores cupiditate eligendi dicta nesciunt dignissimos nisi!
                                </p>
                                <p class="flex items-center hover:text-lime-500 mb-2 text-white">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center hover:bg-lime-500 justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Vexillologist pitchfork
                                </p>
                                <p class="flex items-center hover:text-lime-500 mb-2 text-white">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center hover:bg-lime-500 justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Tumeric plaid portland
                                </p>
                                <p class="flex items-center hover:text-lime-500 mb-2 text-white">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center hover:bg-lime-500 justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Hexagon neutra unicorn
                                </p>
                                <p class="flex items-center hover:text-lime-500 mb-6 text-white">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center hover:bg-lime-500 justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Mixtape chillwave tumeric
                                </p>
                                <button class="flex items-center mt-auto font-semibold text-yellow-500 border-0  px-4  focus:outline-none  rounded"><Link to={'/about'}>check our work</Link>
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div class="flex flex-wrap lg:flex-row-reverse mb-12">
                            <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6 mb-6 lg:mb-0">
                                <div class="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg">
                                    <img className=" w-full rounded-lg shadow-lg" src={require('../images/img_30.jpg')} alt="img" />
                                    <a href="#!">
                                        <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"></div>
                                    </a>
                                </div>
                            </div>

                            <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6">
                                <h3 class="text-3xl text-[#00df9a] font-bold mb-4 font-mono">Maintenance</h3>
                                <p class="text-white mb-6">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero dolores, fugiat porro repellat incidunt illo magni suscipit similique eveniet,
                                </p>
                                <p class="flex items-center hover:text-lime-500 mb-2 text-white">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center hover:bg-lime-500 justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Vexillologist pitchfork
                                </p>
                                <p class="flex items-center hover:text-lime-500 mb-2 text-white">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center hover:bg-lime-500 justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Tumeric plaid portland
                                </p>
                                <p class="flex items-center hover:text-lime-500 mb-2 text-white">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center hover:bg-lime-500 justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Hexagon neutra unicorn
                                </p>
                                <p class="flex items-center hover:text-lime-500 mb-6 text-white">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center hover:bg-lime-500 justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Mixtape chillwave tumeric
                                </p>
                                <button class="flex items-center mt-auto font-semibold text-yellow-500 border-0  px-4  focus:outline-none  rounded"><Link to={'/about'}>check our work</Link>
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div class="flex flex-wrap mb-12">
                            <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6 mb-6 lg:mb-0">
                                <div class="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg">
                                    <img className=" w-full rounded-lg shadow-lg" src={require('../images/img_31.jpg')} alt="img" />
                                    <a href="#!">
                                        <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"></div>
                                    </a>
                                </div>
                            </div>

                            <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6">
                                <h3 class="text-3xl text-[#00df9a] font-bold mb-4 font-mono">Custom Build</h3>

                                <p class="text-white mb-6">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit sed ipsam quos culpa maiores aliquam magnam. Doloremque sunt distinctio nam minus itaque,
                                </p>
                                <p class="flex items-center hover:text-lime-500 mb-2 text-white">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center hover:bg-lime-500 justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Vexillologist pitchfork
                                </p>
                                <p class="flex items-center hover:text-lime-500 mb-2 text-white">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center hover:bg-lime-500  justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Tumeric plaid portland
                                </p>
                                <p class="flex items-center hover:text-lime-500 mb-2 text-white">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center hover:bg-lime-500 justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Hexagon neutra unicorn
                                </p>
                                <p class="flex items-center hover:text-lime-500 mb-6 text-white">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center hover:bg-lime-500 justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Mixtape chillwave tumeric
                                </p>
                                <button class="flex items-center mt-auto font-semibold text-yellow-500 border-0  px-4  focus:outline-none  rounded"><Link to={'/about'}>check our work</Link>
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                            </div>

                        </div>

                        <div class="flex flex-wrap lg:flex-row-reverse mb-12">
                            <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6 mb-6 lg:mb-0">
                                <div class="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg">
                                    <img className=" w-full rounded-lg shadow-lg" src={require('../images/img_32.jpg')} alt="img" />
                                    <a href="#!">
                                        <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"></div>
                                    </a>
                                </div>
                            </div>

                            <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6">
                                <h3 class="text-3xl text-[#00df9a] font-bold mb-4 font-mono">Custom Build</h3>
                                <p class="text-white mb-6">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum voluptatibus ipsum nemo rem mollitia facere magnam, a aperiam accusantium libero.
                                </p>
                                <p class="flex items-center hover:text-lime-500 mb-2 text-white">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center hover:bg-lime-500 justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Vexillologist pitchfork
                                </p>
                                <p class="flex items-center hover:text-lime-500 mb-2 text-white">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center hover:bg-lime-500 justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Tumeric plaid portland
                                </p>
                                <p class="flex items-center hover:text-lime-500 mb-2 text-white">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center hover:bg-lime-500 justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Hexagon neutra unicorn
                                </p>
                                <p class="flex items-center hover:text-lime-500 mb-6 text-white">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center hover:bg-lime-500  justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Mixtape chillwave tumeric
                                </p>
                                <button class="flex items-center mt-auto font-semibold text-yellow-500 border-0  px-4  focus:outline-none  rounded"><Link to={'/about'}>check our work</Link>
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>

                    </div>
                </section>
                <Section7></Section7>
            </div >
            <Footer></Footer>
        </div >
    )
}

export default Services