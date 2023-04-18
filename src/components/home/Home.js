import React from "react";
import Slider from "react-slick";
import Layout from "../layout/Layout";
import {carouselImagesPath} from './HomePageConstants';

const Home = () => {
    const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    const renderCarouselImages = () => {
        return carouselImagesPath.map((imagePath, index) => {
            return (
                <img src={require('../../assets/images/maxresdefault.jpg')} className={`carousel-${index}`} key={index} />
            )
        })
    }

    return (
        <Layout>
             <Slider {...carouselSettings}>
                {renderCarouselImages()}
             </Slider>
        </Layout>
    )
}

export default Home;