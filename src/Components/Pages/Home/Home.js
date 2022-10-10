import React from 'react';
import './Home.css';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Jokes from '../Jokes/Jokes';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Jokes />
            <Header />
            <Footer />
        </div>
    );
};

export default Home;