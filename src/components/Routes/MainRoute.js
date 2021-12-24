import React from 'react'
import UserMetaDataTable from '../UserTable/UserMetaDataTable'
import { About, Banner, Clothing, Fashion, Footer, Header, RoadMap } from '../Views'

const MainRoute = () => {
    return (
        <>
            <Header />
            <Banner />
            <Fashion />
            <Clothing />
            <About />
            <RoadMap />
            <UserMetaDataTable />
            <Footer />
        </>
    )
}

export default MainRoute
