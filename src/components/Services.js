import React, { useEffect } from 'react'
import { services } from '../constants'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Services = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className=' mt-[80px]'>
            <h2 className=' text-center my-[30px] font-bold text-[24px]'>Our <span className=' text-red-500'>Services</span></h2>
            <div className=' flex gap-3 flex-wrap justify-between'>
                {services.map(item => {
                    return (
                        <div data-aos='fade-up' style={{ boxShadow: '0 0 10px #DDD ', padding: '20px' }}
                            key={item.label} className=' w-[98%] md:w-[32%] rounded'>
                            <img src={item.imgURL} alt={item.label} className=' bg-red-500 rounded-full p-2' />
                            <div className=''>
                                <h2 className=' my-3 font-bold text-[20px]'>{item.label}</h2>
                                <p className=' text-gray-600'>{item.subtext}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Services
