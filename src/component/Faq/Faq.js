import React from 'react';
import pose from '../../assets/image/pose_8.png'
import './Faq.css'

const Faq = () => {
    return (
        <div className='faq-bg'>
            <div class="hero ">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={pose} class="max-w-sm" />
                    <div>
                        <p className='text-secondary'>FAQ Questions</p>
                        <h1 className='text-4xl font-bold mb-3'>Get Your General Answer </h1>
                        <div tabindex="0" class="collapse collapse-plus">
                            <div class="collapse-title text-xl font-medium">
                                Get Your General Answer
                            </div>
                            <div class="collapse-content">
                                <p>tabindex="0" attribute is necessary to make the div focusable</p>
                            </div>
                        </div>
                        <div tabindex="0" class="collapse collapse-plus ">
                            <div class="collapse-title text-xl font-medium">
                                Will I always see my own doctor?
                            </div>
                            <div class="collapse-content">
                                <p>tabindex="0" attribute is necessary to make the div focusable</p>
                            </div>

                        </div>
                        <div tabindex="0" class="collapse collapse-plus ">
                            <div class="collapse-title text-xl font-medium">
                                What is one Medical’s care?
                            </div>
                            <div class="collapse-content">
                                <p>tabindex="0" attribute is necessary to make the div focusable</p>
                            </div>

                        </div>
                        <div tabindex="0" class="collapse collapse-plus ">
                            <div class="collapse-title text-xl font-medium">
                                What is evidence based medicine?
                            </div>
                            <div class="collapse-content">
                                <p>tabindex="0" attribute is necessary to make the div focusable</p>
                            </div>

                        </div>
                        <div tabindex="0" class="collapse collapse-plus ">
                            <div class="collapse-title text-xl font-medium">
                                What is an academic medical center?
                            </div>
                            <div class="collapse-content">
                                <p>tabindex="0" attribute is necessary to make the div focusable</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;