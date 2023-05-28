import React from 'react'
import backgroundImage from '../images/img_17.jpg'

const Section7 = () => {
    return (
        <div>
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
    )
}

export default Section7