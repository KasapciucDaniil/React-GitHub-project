import React, { Fragment } from 'react'
import { CarouselBox } from '../components/CarouselBox'
import { InfoHome } from '../components/InfoHome'

export const Home = () => {
    return(
       <Fragment>
        <CarouselBox />
        <InfoHome />
        </Fragment>  
    )
}