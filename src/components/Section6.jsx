import React from 'react'

const Section6 = () => {
    return (
        <div>
            <div class="container my-24 px-6 mx-auto">

                <section class="mb-32 text-gray-800 text-center">
                    <p className='font-semmibold text-[#00df9a] leading-relaxed'>Our Team</p>
                    <h1 class="text-xl md:text-3xl text-white font-bold tracking-wide uppercase pb-4">Expert. experienced.</h1>
                    <div class="grid md:grid-cols-3 md:max-w-5xl">
                        <div class="mb-6 lg:mb-0">
                            <div class=" block rounded-lg ">
                                <div class="relative overflow-hidden bg-no-repeat bg-cover">
                                <img className=" w-full h-[406px] sepia" src={require('../images/img_14.jpg')} alt="img" />
                                    <a href="#!">
                                        <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>
                                    </a>
                                    <svg class="absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                        <path fill="#fff"
                                            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                                        </path>
                                    </svg>
                                </div>
                                <div class="p-6 text-white">
                                    <h5 class="text-lg font-bold mb-4">Maria Smith</h5>
                                </div>
                            </div>
                        </div>

                        <div class="mb-6 lg:mb-0">
                            <div class=" block">
                                <div class="relative overflow-hidden bg-no-repeat bg-cover">
                                <img className=" w-full h-[406px] grayscale-0" src={require('../images/img_15.jpg')} alt="img" />
                                    <a href="#!">
                                        <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>
                                    </a>
                                    <svg class="absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                        <path fill="#fff"
                                            d="M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,213.3C672,203,768,213,864,202.7C960,192,1056,160,1152,128C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                                        </path>
                                    </svg>
                                </div>
                                <div class="p-6 text-white">
                                    <h5 class="text-lg font-bold mb-4">Oleg Yeltsov</h5>
                                </div>
                            </div>
                        </div>

                        <div class="">
                            <div class=" block rounded-lg ">
                                <div class="relative overflow-hidden bg-no-repeat bg-cover">
                                <img className=" w-full h-[406px] grayscale" src={require('../images/img_16.jpg')} alt="img" />
                                    <a href="#!">
                                        <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>
                                    </a>
                                    <svg class="absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                        <path fill="#fff"
                                            d="M0,288L48,256C96,224,192,160,288,160C384,160,480,224,576,213.3C672,203,768,117,864,85.3C960,53,1056,75,1152,69.3C1248,64,1344,32,1392,16L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                                        </path>
                                    </svg>
                                </div>
                                <div class="p-6">
                                    <h5 class="text-lg text-white font-bold mb-4">Andriyko Podilnyk</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default Section6