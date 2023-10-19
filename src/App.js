import React from 'react'
import './App.css'
import {
  Nav,
  SpecialOffers,
  Services,
  SuperQuality,
  Footer,
  PopularProducts,
  CustomerReviews,
  Hero,
  Subscribe
} from './components'
import { containerClasses } from './constants/index'
const App = () => {
  return (
    <>
      <Nav />
      <div className={containerClasses()}>
        <Hero />
        <PopularProducts />
        <SuperQuality />
        <Services />
        <SpecialOffers />
      </div>
      <CustomerReviews />
      <div className={containerClasses()}>
        <Subscribe />
      </div>
      <Footer />
    </>
  )
}

export default App
