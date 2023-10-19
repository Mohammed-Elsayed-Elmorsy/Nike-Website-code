import React from 'react'

const Subscribe = () => {
    return (
        <section className=''>
            <h2
                className='text-[24px] font-bold text-center mb-5'>Subscripe to our Newsletter for <span className=' text-red-500'>Updates</span>
            </h2>
            <div className=' relative md:w-[60%] mx-auto'>
                <input className=' rounded-full w-full py-3 px-4 border focus:outline-blue-400' type="email" placeholder='Enter Your Email' />
                <span className=' bg-red-500 rounded-full p-2 user-select-none cursor-pointer text-white absolute right-[5px] top-[10%]'>Sign Up</span>
            </div>
        </section>
    )
}

export default Subscribe
