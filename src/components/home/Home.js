import React from "react";
import Layout from "../layout/Layout";
import MainCarousel from "./MainCarousel";
import HomeStories from "../home/HomeStories";

const Home = () => {

    return (
        <Layout>
            <div>
                <MainCarousel />
                <HomeStories/>
             </div>
        </Layout>
    )
}

export default Home;