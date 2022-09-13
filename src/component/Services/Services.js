import React from 'react';
import ServiceCard from './ServiceCard';
import './Service.css'
import heart from "../../assets/image/heart.png"
import bag from "../../assets/image/bag.png"
import teeth from '../../assets/image/teeth.png'
import list from '../../assets/image/list.png'

const Services = () => {
    return (
        <div className='service-bg'>
            <h3 className='text-secondary text-center'>Our Services</h3>
            <h1 className='text-center text-3xl mb-5'>Services For Your Health</h1>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-5 mx-20'>
                <ServiceCard title="Cardiology" img={heart} para="Seduahag perspiciati under omnised atused error."></ServiceCard>
                <ServiceCard title="Monthly Check Up" img={list} para="Seduahag perspiciati under omnised atused error."></ServiceCard>
                <ServiceCard title="Dental Care" img={teeth} para="Seduahag perspiciati under omnised atused error."></ServiceCard>
                <ServiceCard title="Opthalmology" img={bag} para="Seduahag perspiciati under omnised atused error."></ServiceCard>
            </div>

        </div>
    );
};

export default Services;