import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const company = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar></Navbar>
      <div>
        <div class="container my-12 mx-auto md:px-6">
          <section class="mb-24 text-center lg:text-left">
            <div class="px-6 py-12 md:px-12">
              <div class="grid items-center lg:grid-cols-2 lg:gap-x-12">
                <div class="mb-12 lg:mb-0">
                  <h2 class="my-12 text-5xl font-bold leading-tight tracking-tight">
                    DGenx brings your custom dreams <br />
                    <span class="text-success dark:text-success-400">into reality</span>
                  </h2>
                  <a class="mb-2 inline-block rounded bg-success px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] md:mr-2 md:mb-0"
                    data-te-ripple-init data-te-ripple-color="light" href="#!" role="button">Get started</a>
                </div>

                <div class="mb-12 lg:mb-0">
                  <img className=" w-full rounded-lg shadow-lg dark:shadow-black/20" src={require('../images/img_33.jpg')} alt="img" />
                </div>
              </div>
            </div>
          </section>
          {/* <section class="mb-32 text-center">
            <h2 class="mb-20 text-3xl text-[#00df9a] font-bold">What Our Company Gives</h2>

            <div class="grid lg:grid-cols-3 lg:gap-x-12">
              <div class="mb-12 lg:mb-0">
                <div
                  class="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-gradient-to-r from-amber-700 to-yellow-400 ">
                  <div class="flex justify-center">
                    <div class="-mt-8 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 text-[#00df9a]">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                      </svg>

                    </div>
                  </div>
                  <div class="p-6">
                    <h5 class="mb-4 text-lg text-[#00df9a] font-semibold">Creative Design</h5>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur asperiores deserunt neque deleniti pariatur enim incidunt facere provident commodi animi.
                    </p>
                  </div>
                </div>
              </div>

              <div class="mb-12 lg:mb-0">
                <div
                  class="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-gradient-to-r from-amber-700 to-yellow-400">
                  <div class="flex justify-center">
                    <div class="-mt-8 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 text-[#00df9a]">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
                      </svg>

                    </div>
                  </div>
                  <div class="p-6">
                    <h5 class="mb-4 text-lg text-[#00df9a] font-semibold">Super Ideas</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ullam exercitationem doloremque enim cumque repellat ratione illo perferendis, quidem est.
                    </p>
                  </div>
                </div>
              </div>

              <div class="">
                <div
                  class="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-gradient-to-r from-amber-700 to-yellow-400">
                  <div class="flex justify-center">
                    <div class="-mt-8 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 text-[#00df9a]">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
                      </svg>

                    </div>
                  </div>
                  <div class="p-6">
                    <h5 class="mb-4 text-lg text-[#00df9a] font-semibold">Smart Planning</h5>
                    <p>
                      Enim cupiditate, minus nulla dolor cumque iure eveniet facere
                      ullam beatae hic voluptatibus dolores exercitationem? Facilis
                      debitis aspernatur amet nisi?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          <section class="mb-32 text-center">
            <h2 class="mb-20 text-3xl text-[#00df9a] font-bold">What Our Company Gives</h2>

            <div class="grid lg:grid-cols-3 lg:gap-x-12">
              <div class="mb-12 lg:mb-0 animate-fade-in-down">
                <div class="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-gradient-to-r from-amber-700 to-yellow-400">
                  <div class="flex justify-center">
                    <div class="-mt-8 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 text-[#00df9a]">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                      </svg>
                    </div>
                  </div>
                  <div class="p-6">
                    <h5 class="mb-4 text-lg text-[#00df9a] font-semibold">Creative Design</h5>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur asperiores deserunt neque deleniti pariatur enim incidunt facere provident commodi animi.
                    </p>
                  </div>
                </div>
              </div>

              <div class="mb-12 lg:mb-0 animate-fade-in-down">
                <div class="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-gradient-to-r from-amber-700 to-yellow-400">
                  <div class="flex justify-center">
                    <div class="-mt-8 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 text-[#00df9a]">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
                      </svg>
                    </div>
                  </div>
                  <div class="p-6">
                    <h5 class="mb-4 text-lg text-[#00df9a] font-semibold">Super Ideas</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ullam exercitationem doloremque enim cumque repellat ratione illo perferendis, quidem est.
                    </p>
                  </div>
                </div>
              </div>

              <div class="animate-fade-in-down">
                <div class="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-gradient-to-r from-amber-700 to-yellow-400">
                  <div class="flex justify-center">
                    <div class="-mt-8 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 text-[#00df9a]">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.63.349a.64.64 0 01.643.658v0c0 .355-.186.676-.401.959a1.647 1.647 0 00-.349 1.003c0 1.036 1.007 1.875 2.25 1.875s2.25-.84 2.25-1.875c0-.369-.128-.713-.349-1.003a1.752 1.752 0 00-.401-.959c-.025-.31.222-.57.532-.57 1.572-.04 3.112-.159 4.63-.349a.64.64 0 01.643.658v0a.64.64 0 01-.658.643c-1.548-.009-3.098-.128-4.63-.33-.283-.038-.543-.283-.519-.591v0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a.75.75 0 00-1.5 0 .75.75 0 001.5 0zM12 10.5a.75.75 0 00-1.5 0 .75.75 0 001.5 0zM9 10.5a.75.75 0 00-1.5 0 .75.75 0 001.5 0z" />
                      </svg>
                    </div>
                  </div>
                  <div class="p-6">
                    <h5 class="mb-4 text-lg text-[#00df9a] font-semibold">Technical Expertise</h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptates, dolorum magnam sunt minus explicabo?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="text-gray-600 body-font">
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold font-mono text-gray-900">We Design
                  <br class="hidden lg:inline-block" />Build Brands & <br className='hidden lg:inline-block' />Custom Projects
                </h1>
                <p class="mb-8 leading-relaxed text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. At exercitationem magni tempora sunt doloremque ad blanditiis reiciendis sapiente suscipit, repellat quaerat aperiam illum.</p>
                <div class="flex justify-center">
                  {/* <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button> */}
                  <div>
                    <button
                      className="bg-blue-500 text-white py-2 px-4 rounded"
                      onClick={handleToggle}
                    >
                      Read More
                    </button>
                    {isOpen && (
                      <div className="mt-4 ">
                        <p className='text-white'>This content will collapse/show when the button is clicked. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quam?</p>
                      </div>
                    )}
                  </div>
                </div>

              </div>
              <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img className="object-cover object-center rounded rounded-l-[50%] rounded-br-[50%]" src={require('../images/img_34.jpg')} alt="img" />
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default company