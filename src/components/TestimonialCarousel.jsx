import React, { useState } from 'react';
import Images from '../images/img_12.png'
import Images2 from '../images/img_13.png'
import backgroundImage from '../images/img_7.png'


const testimonials = [
    {
        id: 1,
        name: 'John Doe',
        title: 'Biker',
        image: Images,
        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quisquam nam aspernatur eligendi quas labore molestias ut cumque sunt! Quasi omnis quisquam numquam reiciendis ullam harum quaerat in hic sequi. Tempora cupiditate ex exercitationem suscipit, nobis sunt ipsam autem modi architecto maiores omnis assumenda officiis temporibus, mollitia laboriosam! Quibusdam, in.',
    },
    {
        id: 2,
        name: 'Anna Doe',
        title: 'Biker',
        image: Images2,
        message: 'Nullam id eros vitae magna volutpat condimentum sit amet sed lacus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quisquam nam aspernatur eligendi quas labore molestias ut cumque sunt! Quasi omnis quisquam numquam reiciendis ullam harum quaerat in hic sequi. Tempora cupiditate ex exercitationem suscipit, nobis sunt ipsam autem modi architecto maiores omnis assumenda officiis temporibus, mollitia laboriosam! Quibusdam, in.',
    },
    // Add more testimonials as needed
];

const TestimonialCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? testimonials.length - 1 : currentSlide - 1);
    };

    const nextSlide = () => {
        setCurrentSlide(currentSlide === testimonials.length - 1 ? 0 : currentSlide + 1);
    };

    return (
        <div className="" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="max-w-[1000px] mx-auto mt-12 transparent" >
                <div class="mb-12 justify-center text-center">
                    <h2 class="mb-6 md:text-5xl text-4xl font-bold text-neutral-800 dark:text-neutral-200">What Our Clients Say</h2>

                    <p class="text-gray-500 mb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, laudantium!.</p>
                </div>
                <div className="relative ">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.id}
                            className={`absolute w-full transform transition-transform ease-in-out duration-300 ${index === currentSlide ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
                                }`}>
                            <div class="block rounded-lg shadow-lg">
                                <div class="flex flex-wrap items-center">
                                    <div class="grow-0 shrink-0 basis-auto block lg:flex w-full lg:w-6/12 xl:w-4/12">
                                        <img src={testimonial.image} className='w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg' alt="" />
                                        {/* <img className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" src={require('../images/img_12.png')} alt="img" /> */}
                                        {/* <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/027.jpg" alt="Trendy Pants and Shoes"
                                        class="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" /> */}
                                    </div>
                                    <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
                                        <div class="px-6 py-12 md:px-12">
                                            <h2 class="text-3xl font-bold mb-2 text-blue-600">{testimonial.name}</h2>
                                            <p class="font-semibold mb-4">{testimonial.title}</p>
                                            <p class="text-gray-500 mb-6">{testimonial.message}
                                            </p>
                                            <ul class="flex justify-center md:justify-start">
                                                <li>
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-blue-600"
                                                        role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                        <path fill="currentColor"
                                                            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                                        </path>
                                                    </svg>
                                                </li>
                                                <li>
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-blue-600"
                                                        role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                        <path fill="currentColor"
                                                            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                                        </path>
                                                    </svg>
                                                </li>
                                                <li>
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-blue-600"
                                                        role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                        <path fill="currentColor"
                                                            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                                        </path>
                                                    </svg>
                                                </li>
                                                <li>
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-blue-600"
                                                        role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                        <path fill="currentColor"
                                                            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                                        </path>
                                                    </svg>
                                                </li>
                                                <li>
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-blue-600"
                                                        role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                        <path fill="currentColor"
                                                            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                                        </path>
                                                    </svg>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    ))}
                    <div className='absolute bottom-0 left-0 right-0 z-[2] mb-4 flex list-none justify-center p-0'>
                        <button className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none" onClick={prevSlide}>
                            Previous
                        </button>
                        <button className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none" onClick={nextSlide}>
                            Next
                        </button>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default TestimonialCarousel;
