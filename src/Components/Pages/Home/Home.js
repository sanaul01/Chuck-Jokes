import React from 'react';
import './Home.css';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div>
           <Navbar/>
           <Banner/>
           <Header/>
           <Footer/>
        </div>
    );
};

export default Home;