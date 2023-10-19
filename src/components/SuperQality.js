import React, { useEffect } from 'react'
import { shoe8 } from '../assets/images'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Superqality = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <section className='text-center md:text-left flex flex-col md:flex-row justify-between items-center mt-[100px]'>
            <div data-aos='zoom-in' className=' flex-1 flex flex-col gap-4'>
                <h2 className=' font-bold text-[24px] capitalize'>
                    we provide you <span className=' text-red-500'> superQuality </span> products
                </h2>
                <p className=' text-gray-600'> A shoe is an item of footwear intended to protect and comfort the human foot while doing various activities.
                    Shoes are also used as an item</p>
                <button className='mx-auto md:mx-0 hover:bg-red-600 text-white bg-red-500 py-2 px-3 w-fit rounded'>show details</button>
            </div>
            <div className=' flex-1' data-aos='zoom-in-left'>
                <img src={shoe8} alt="" />
            </div>
        </section>
    )
}

export default Superqality
