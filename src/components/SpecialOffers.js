import React, { useEffect } from 'react'
import { offer } from '../assets/images'
import { RiArrowDropRightLine } from 'react-icons/ri'
import AOS from 'aos';
import 'aos/dist/aos.css';
const SpecialOffers = () => {
    useEffect(() => {
        AOS.init({
            duration: 600,
            easing: 'ease-in-out',
            delay: 100,
        });
    }, [])
    return (
        <section className=' text-center md:text-left mt-[100px] flex-col md:flex-row flex gap-3 justify-between items-center'>
            <div data-aos='fade-up'>
                <img src={offer} alt="" />
            </div>
            <div data-aos='zoom-in' className=' flex flex-col gap-5'>
                <h2 className='mt-3 md:mt-0 font-bold text-[24px]'>Special <span className=' text-red-500'>Offer</span></h2>
                <p style={{ lineHeight: '1.7' }} className=' text-gray-600'>navigate to a realm of possibilities desinged to fillful your desires
                    your journey with us is nithing short exceptional
                </p>
                <p className=' text-gray-600'>navigate to a realm of possibilities desinged to fillful your desires
                    your journey with us is nithing short exceptional
                </p>
                <div className=' flex gap-3 justify-center md:justify-start'>
                    <button className=' w-[120px] text-center rounded hover:bg-red-600 transition bg-red-500 text-white flex gap-1 items-center p-2'>shop now <RiArrowDropRightLine /></button>
                    <button className=' w-[120px] text-center rounded hover:bg-gray-300 transition bg-white border flex gap-1 items-center p-2'>learn more</button>
                </div>
            </div>
        </section>
    )
}

export default SpecialOffers
