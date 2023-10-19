import React, { useEffect } from 'react'
import { products } from '../constants/index'
import { RiStarFill } from 'react-icons/ri'
import AOS from 'aos';
import 'aos/dist/aos.css';

const PopularProducts = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <div className=' mt-[100px]'>
                <h1 className=' text-center md:text-left font-bold text-[24px] capitalize'>Our <span className=' text-red-500'>popular</span> products</h1>
                <p className=' text-center md:text-left mt-1 text-gray-600'>Discover a world of comfort , Design , value </p>
            </div>
            <div className='my-5 flex gap-3 justify-center flex-wrap'>
                {products.map(item => {
                    return (
                        <div data-aos='zoom-in' key={item.name} className=' w-[45%] md:w-[32%] lg:w-[24%]'>
                            <img src={item.imgURL} alt="" className=' w-full' />
                            <div className='py-2 flex flex-col gap-1 mt-2'>
                                <span className=' flex gap-1 items-center'><RiStarFill className=' text-orange-500' />4.2</span>
                                <h2 className=' font-bold text-[20px]' >{item.name}</h2>
                                <span className=' text-red-500 font-bold'>{item.price}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default PopularProducts
