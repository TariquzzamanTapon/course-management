import React from 'react';
import { Helmet } from 'react-helmet-async';
import Carousel from '../Carousel/Carousel';
import PopularClass from '../PopularClass/PopularClass';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title> Sports Academy</title>
            </Helmet>
            <Carousel></Carousel>
            <PopularClass></PopularClass>
        </div>
    );
};

export default Home;