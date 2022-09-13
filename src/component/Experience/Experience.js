import React from 'react';
import pose4 from "../../assets/image/pose_4.png"
import './Experience.css'

const Experience = () => {
    return (
        <div className='experience-bg'>
            <div class="hero">
                <div class="hero-content flex-col lg:flex-row-reverse mt-10">
                    <img src={pose4} class="max-w-sm rounded-lg" />
                    <div>
                        <h1 class="text-secondary">16+ Years Experiences </h1>
                        <h1 className='text-4xl'>We Are Always ensure Best Medical</h1>
                        <h1 className='text-4xl'>Treatment For Your Health</h1>
                        <p class="py-6">simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            <br /> industry's standard dummy text ever since the 1500s, when an unknown printer took a <br />
                            galley of type and scrambled it is a long established fact that a reader will be distracted <br />  by the readable content of a page when looking at its layout. The point of using </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;