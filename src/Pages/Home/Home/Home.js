import React from 'react';
import Footer from '../Footer/Footer';


import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';

import Ourvices from '../OurServices/Ourservice';
import About from '../About/About';
import Our from '../Our/Our';

const Home = () => {
    return (
        <div>
            <Banner></Banner> 
            <Ourvices></Ourvices>
            <Services></Services>
            <About></About>
            <Our></Our>
             <Contact></Contact>
            {/* <Footer></Footer> */}
         
        </div>
    );
};

export default Home;