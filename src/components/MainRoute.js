import React from 'react'
import About from './about'
import Banner from './banner'
import Clothing from './clothing'
import Fashion from './fashion'
import Footer from './footer'
import Header from './header'
import Roadmap from './roadmap'

const MainRoute = () => {
    return (
        <>
            <Header />
            <Banner />
            <Fashion />
            <Clothing />
            <About />
            <Roadmap />
            <Footer />
        </>
    )
}

export default MainRoute
