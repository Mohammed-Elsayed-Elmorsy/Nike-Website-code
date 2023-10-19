import React from 'react'

import { AOS } from 'aos'
import { reviews } from '../constants'
import { RiStarFill } from 'react-icons/ri'
const CustomerReviews = () => {
    return (
        <section className=' mt-[100px] text-center bg-primary py-8 px-4'>
            <div className=' mb-10'>
                <h2 className=' font-bold text-[24px]'>What Our <span className=' text-red-500'>Cusomers</span> Says about Us ?</h2>
                <p className=' text-gray-600'>Here ture stories about our customers who are satisfied with us </p>
            </div>
            <div className=' flex justify-center gap-4 flex-col md:flex-row'>
                {reviews.map(item => {
                    return (
                        <div key={item.customerName} data-aos={item.aos} className=' px-8 flex flex-col gap-3'>
                            <img width={180} height={180} className=' mx-auto rounded-full' src={item.imgURL} alt={item.customerName} />
                            <p className=' text-gray-700'>{item.feedback}</p>
                            <span className=' font-bold mx-auto flex gap-1 items-center justify-center'><RiStarFill className=' text-orange-500' />{item.rating}</span>
                            <h1 className=' text-red-500 font-bold text-[25px]'>{item.customerName}</h1>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default CustomerReviews
