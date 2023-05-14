import React from 'react'
import '../index.css'

const section4 = () => {
    return (
        <div className='py-16'>
            <div class="mx-auto text-center md:max-w-xl lg:max-w-3xl">
                <p className='text-[#00df9a] font-bold'>Custom Bike Builder</p>
                <h3
                    class="mb-6 md:text-5xl text-4xl font-bold text-neutral-800 dark:text-neutral-200">
                    Our Latest Works
                </h3>
                <p class="mb-6 pb-2 md:mb- md:pb-0 text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
                    amet numquam iure provident voluptate esse quasi, veritatis totam
                    voluptas nostrum quisquam eum porro a pariatur veniam.
                </p>
            </div>
            <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-6">
                <div class="-m-1 flex flex-wrap md:-m-2">
                    <div class="flex w-1/2 flex-wrap">
                        <div class="w-full p-1 md:p-2">
                            <img className="h-full w-full block cursor-pointer rounded-md object-center mx-auto " src={require('../images/img_9.jpg')} alt="img" />
                        </div>
                    </div>
                    <div class="flex w-1/4 flex-wrap">
                        <div class="w-full p-1 md:p-2">
                            <img className="h-full w-full block cursor-pointer rounded-md object-center mx-auto " src={require('../images/img_10.jpg')} alt="img" />
                        </div>
                    </div>
                    <div class="flex w-1/4 flex-wrap">
                        <div class="w-full p-1 md:p-2">
                            <img className="h-full w-full block cursor-pointer rounded-md object-center mx-auto " src={require('../images/img_11.jpg')} alt="img" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default section4