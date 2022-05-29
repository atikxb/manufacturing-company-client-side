import React from 'react';
import Header from '../Shared/Header/Header';
import SideNav from '../Shared/SideNav/SideNav';
import About from './About';
import Banner from './Banner';
import BusinessOverview from './BusinessOverview';
import Faq from './Faq';
import Parts from './Parts';
import Reviews from './Reviews';

const Home = () => {
    return (
        <main>
            <Header />
            <SideNav />
            <Banner />
            <About/>
            <Parts />
            <BusinessOverview/>
            <Reviews/>
            <Faq/>
        </main>
    );
};

export default Home;