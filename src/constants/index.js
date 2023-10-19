import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about-us", label: "About Us" },
    { to: "/products", label: "Products" },
    { to: "/contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        id: 1,
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        id: 2,
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        id: 3,
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Nike Air Jordan-01",
        price: "$200.20",
    },
    {
        imgURL: shoe5,
        name: "Nike Air Jordan-10",
        price: "$210.20",
    },
    {
        imgURL: shoe6,
        name: "Nike Air Jordan-100",
        price: "$220.20",
    },
    {
        imgURL: shoe7,
        name: "Nike Air Jordan-001",
        price: "$230.20",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        aos: 'fade-left',
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        aos: 'fade-right',
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];

// HEADER STYLES START
export const showMenuClasses = () => {
    return 'bg-black absolute md:static top-0 left-0 h-[100vh] w-full text-white flex-col md:flex-row transition-all justify-center md:justify-end items-center'
}
export const LinkClasses = () => {
    return 'py-[10px]  md:py-[5px] md:pl-[8px] pl-[10px] block relative w-[120px] hover:text-white text-left transition-all md:w-fit hover:ml-2 md:hover:text-gray-500 md:text-black md:mx-2 text-gray-500 md:hover:ml-2 px-[10px] '
}
export const LiClasses = () => {
    return 'md:border-0  border-gray-500 hover:border-white my-3 md:my-0'
}
export const NavClasses = () => {
    return ' container mx-auto p-4 flex justify-between items-center h-[80px]'
}
export const UlClasses = () => {
    return 'md:h-auto flex overflow-hidden  md:bg-white'
}
export const HeaderClasses = () => {
    return ' shadow fixed z-20 w-full left-0 top-0'
}
export const MenuClasses = () => {
    return ' md:hidden cursor-pointer w-[40px]  h-[40px] bg-gray-700 hover:rounded  text-[35px] text-gray hover:text-white hover:bg-gray-500 transition absolute left-2 top-2 z-10'
}
// HEADER STYLES END

// Container Classes
export const containerClasses = () => {
    return ' container py-10 px-2   md:px-4 lg:px-[150px] mx-auto mt-[70px]'
}

