import React from 'react';
import pose7 from "../../assets/image/pose_7.png"
import FeatureCard from './FeatureCard';
import woman from '../../assets/image/woman.png'
import man from '../../assets/image/man.png'
import box from '../../assets/image/box.png'
import circle from '../../assets/image/circle.png'
import './Feature.css'

const Feature = () => {
    return (
        <div className='feature-bg'>
            <div class="hero">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={pose7} class="max-w-sm" />
                    <div>
                        <p className='text-secondary'>Our Hospital Feature</p>
                        <h1 class="text-4xl font-bold">Make An Appointment Easy And Fast  </h1>
                        <h1 className='text-4xl font-bold mb-3'>Services</h1>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-y-3 gap-x-0'>
                            <FeatureCard para="simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's " title="24 Hours Doctor Support" img={woman}></FeatureCard>
                            <FeatureCard para="simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's " title="Exclusive Supports" img={box}></FeatureCard>
                            <FeatureCard para="simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's " title="Friendly Environment " img={man}></FeatureCard>
                            <FeatureCard para="simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's " title="24 Hours Nurse Support" img={circle}></FeatureCard>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feature;