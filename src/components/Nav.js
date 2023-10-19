import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks, LiClasses, LinkClasses, showMenuClasses, NavClasses, UlClasses, MenuClasses } from '../constants'
import { RiArrowDropLeftLine } from 'react-icons/ri'
const Nav = () => {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <header className='bg-white shadow fixed z-10 w-full left-0 top-0'>
            <nav className={NavClasses()}>
                <Link to={'/'} className=''>
                    <img src={headerLogo} alt={'headerLogo'} />
                    <p className=' m-0 w-[250px] text-[12px] font-bold text-blue-400'>Mohammed Elmorsy</p>
                    <p className='  w-[250px] text-[13px] tracking-wider  text-gray-400 mt-[-3px]'>Front End Developer</p>
                </Link>
                <ul className={`${showMenu ? showMenuClasses() : 'h-[0]'} ${UlClasses()}`}>
                    {navLinks.map(link => {
                        return (
                            <li className={LiClasses()}>
                                <Link
                                    onClick={() => setShowMenu(false)}
                                    className={LinkClasses()}
                                    to={link.to}>
                                    {link.label}
                                </Link>
                            </li>
                        )
                    })}
                    <RiArrowDropLeftLine
                        onClick={() => setShowMenu(false)}
                        className={`${MenuClasses()} ${showMenu ? '' : ' hidden'}`} />
                </ul>
                <img
                    onClick={() => setShowMenu(!showMenu)}
                    className='block md:hidden cursor-pointer'
                    src={hamburger}
                    alt={'hamburger'}
                    width={30} height={30} />
            </nav>
        </header>
    )
}

export default Nav
