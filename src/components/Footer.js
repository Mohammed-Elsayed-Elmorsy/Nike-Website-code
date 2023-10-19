import { Link } from 'react-router-dom'
import { footerLogo } from '../assets/images'
import { footerLinks, socialMedia } from '../constants/index'
import { containerClasses } from '../constants/index'
const Footer = () => {
    return (
        <footer className=' bg-black px-7'>
            <div className={`${containerClasses()} p-[40px] items-start text-white mt-[80px] flex gap-[50px] md:gap-[80px]  flex-col md:flex-row`}>
                <div className=' flex gap-4 flex-col w-full md:w-1/4'>
                    <img src={footerLogo} width={80} height={80} alt="FooterLogo" />
                    <p className=' text-gray-500'>navigate to a realm of possibilities
                        desinged to fillful your desires your journey with us is nithing short exceptional</p>
                    <div className=' flex gap-4'>
                        {socialMedia.map(item => {
                            return (
                                <Link to={'/'}>
                                    <img
                                        width={25} height={25}
                                        className={` bg-white rounded-full p-1`}
                                        src={item.src}
                                        alt={item.alt} />
                                </Link>
                            )
                        })}
                    </div>
                </div>
                <div className=' flex gap-2 justify-between flex-1'>
                    {footerLinks.map(item => {
                        return (
                            <div key={item.title} className=' flex-1 flex flex-col gap-3'>
                                <h2>{item.title}</h2>
                                <ul className=''>
                                    {item.links.map(item => {
                                        return (
                                            <Link to={item.link} className=' block mb-3 text-gray-500'>
                                                {item.name}
                                            </Link>
                                        )
                                    })}
                                </ul>
                            </div>
                        )
                    })}
                </div>
            </div>
        </footer>
    )
}

export default Footer
