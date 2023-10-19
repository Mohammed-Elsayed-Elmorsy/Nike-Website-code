import React, { useState } from 'react'
import { RiArrowDropRightFill, RiCheckFill } from 'react-icons/ri'
import { statistics } from '../constants/index'
import { shoes } from '../constants/index'
const Hero = () => {
    const [image, setImage] = useState(shoes[0].bigShoe)
    const [active, setActive] = useState(1)
    const activate = (id) => {
        setActive(id)
    }
    return (
        <section className='text-center md:text-left flex flex-col md:flex-row items-center'>
            <div className=' flex-1 flex flex-col gap-5 mb-3'>
                <p className=' text-blue-400 capitalize flex gap-1 items-center'>
                    Our summer collection <RiCheckFill />
                </p>
                <h1 className=' text-[49px] font-bold' style={{ lineHeight: '60px' }}>
                    The New Arrival <span className=' text-red-500 '>Nike</span> Shoes
                </h1>
                <p className=' text-gray-600'>
                    Discover Nike Stylish Arrivals , Quality , comfort , innovation for your active life
                </p>
                <button className='text-white mx-auto md:mx-0 flex gap-1 items-center justify-center rounded bg-orange-500 w-[140px] py-[10px] px-2'>
                    Shop now <RiArrowDropRightFill className=' text-[23px]' />
                </button>
                <div className=' flex gap-[50px] justify-center md:justify-start'>
                    {statistics.map(item => {
                        return (
                            <div >
                                <h2 className=' font-bold text-[22px]'>{item.value}</h2>
                                <span >{item.label}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='text-center flex-1 bg-hero bg-cover bg-center relative h-[43vh] md:h-[74vh]'>
                <img src={image} width={400} height={400} alt="" className='mx-auto block' />
                <div className=' flex gap-2 absolute bottom-[-6%] translate-x-[-50%] left-[50%]'>
                    {shoes.map(image => {
                        return (
                            <div onClick={() => activate(image.id)}
                                className={` rounded bg-hero bg-center border border-blue-200 bg-cover ${active === image.id ? 'active' : ''}`}>
                                <img
                                    className={` rounded cursor-pointer`}
                                    onClick={(e) => setImage(e.target.src)}
                                    src={image.bigShoe} alt=""
                                    width={100}
                                    height={100} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Hero
