import React from 'react';
import Hero from '../../components/Hero';
import FeaturedProduct from '../../components/FeaturedProduct';
import FeaturedShoes from '../../components/FeaturedShoes';
import RunningShoes from '../../components/RunningShoes';
import TopsellingShoe from '../../components/TopsellingShoe';
import TrustIndicators from '../../components/TrustIndicators';

const Home = () => {
    return (
        <div className='mt-16'>
            <Hero />
            <FeaturedShoes />
            <RunningShoes />
            <TopsellingShoe />
            <FeaturedProduct />
            <TrustIndicators />
      
        </div>
    )
}

export default Home
