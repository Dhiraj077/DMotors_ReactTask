import React, { useState, useEffect } from 'react';
import Images from '../images/img_12.png'
import Images2 from '../images/img_13.png'
import backgroundImage from '../images/img_7.png'
import Images3 from '../images/img_28.png'
// import "./Slider.css";
import "./test.css";


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
    {
        id: 3,
        name: 'John Doe 3',
        title: 'Biker 3',
        image: Images3,
        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quisquam nam aspernatur eligendi quas labore molestias ut cumque sunt! Quasi omnis quisquam numquam reiciendis ullam harum quaerat in hic sequi. Tempora cupiditate ex exercitationem suscipit, nobis sunt ipsam autem modi architecto maiores omnis assumenda officiis temporibus, mollitia laboriosam! Quibusdam, in.',
    },
    // Add more testimonials as needed
];

const TestimonialCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);


    // const prevSlide = () => {
    //     setCurrentSlide(currentSlide === 0 ? testimonials.length - 1 : currentSlide - 1);
    // };

    // const nextSlide = () => {
    //     setCurrentSlide(currentSlide === testimonials.length - 1 ? 0 : currentSlide + 1);
    // };

  
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const lastIndex = testimonials.length - 1;
      if (index < 0) {
        setIndex(lastIndex);
      }
      if (index > lastIndex) {
        setIndex(0);
      }
    }, [index, testimonials]);

    return (
        
        <div className="bg-cover bg-no-repeat h-[820px]" style={{ backgroundImage: `url(${backgroundImage})` }}>
              <div class=" justify-center text-center">
                    <h2 class="mb-6 md:text-5xl text-4xl font-bold text-neutral-800 dark:text-neutral-200">What Our Clients Say</h2>

                    <p class="text-gray-500 mb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, laudantium!.</p>
                </div>
            <div className="md:max-w-[1000px] mx-auto mt-12 transparent" >
              
                <div className="relative overflow-hidden h-[500px] section-center">
                    { testimonials.map((item, indexPeople) => {
                        const { id, name, title, image, message } = item;
                        let position = "nextSlide";

                        if (indexPeople === index) {
                            position = "activeSlide";
                        }
                        if ( indexPeople === index - 1 ||  (index === 0 && indexPeople === testimonials.length - 1)) {
                            position = "lastSlide";
                        }
                        return (
                            <article className={position}>
                        <div>
                            <div class="block rounded-lg shadow-lg">
                                <div class="flex flex-wrap items-center">
                                    <div class="grow-0 shrink-0 basis-auto block lg:flex w-full lg:w-6/12 xl:w-4/12">
                                        <img src={image} className='md:w-full w-64 rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg' alt="" />
                                    </div>
                                    <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
                                        <div class="px-6 py-12 md:px-12">
                                            <h2 class="text-3xl font-bold mb-2 text-blue-600">{name}</h2>
                                            <p class="font-semibold mb-4">{title}</p>
                                            <p class="text-gray-500 mb-6">{message}
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
                        </article>

                    )})}
                    <div className='absolute bottom-0 left-0 right-0 z-[2] mb-4 flex list-none justify-center p-0'>
                        <button  onClick={() => setIndex(index - 1)}
                        className="absolute bottom-0 left-0 top-0 z-[1] flex w-[7%] items-center justify-center border-0 bg-none p-0 text-center font-bold text-white text-lg transition-opacity duration-150 " >
                            Previous
                        </button>
                        <button onClick={() => setIndex(index + 1)} 
                        className="absolute bottom-0 right-0 top-0 z-[1] flex w-[5%] items-center justify-center bg-black p-0 text-center font-bold text-white text-lg transition-opacity duration-150 ">
                            Next
                        </button>
                    </div>

                </div>

         {/* <div className="section-center">
        {testimonials.map((item, indexPeople) => {
          const { id, name, title, image, message } = item;
          let position = "nextSlide";

          if (indexPeople === index) {
            position = "activeSlide";
          }
          if ( indexPeople === index - 1 ||  (index === 0 && indexPeople === testimonials.length - 1)) {
             position = "lastSlide";
          }
          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{message }</p>
            </article>
          );
        })}

        <button className="prev" onClick={() => setIndex(index - 1)}>
         <div className="a">P</div>
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
        <div className="a">N</div>
        </button>
          </div> */}


            </div>
        </div>

    );
};

export default TestimonialCarousel;