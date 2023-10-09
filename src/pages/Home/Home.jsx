import React from 'react';
import Header from './../../components/Header/Header';
import useGetJsonData from '../../custom/useGetJsonData';
import Services from './../../components/Services/Services';
import Partnerships from '../../components/Partnerships/Partnerships';
import Gallery from './../../components/Gallery/Gallery';

const Home = () => {
    const [dataLoad] = useGetJsonData();
    return (
        <div>
            <Header></Header>
            <div>
                <Services dataload={dataLoad}></Services>
            </div>
            <div className='my-10'>
                <Partnerships></Partnerships>
            </div>
            <div className='mt-10 bg-black'>
                <Gallery dataload={dataLoad}></Gallery>
            </div>
        </div>
    );
};

export default Home;