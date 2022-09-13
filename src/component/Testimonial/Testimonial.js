import React from 'react';
import ikbal from "../../assets/image/Ikbal 1.png"

const Testimonial = () => {
    return (
        <div>
            <p className='text-center'>Testimonial</p>
            <h3 className='text-center'>What They Say?</h3>
            <div class="hero min-h-screen bg-white">
                <div class="hero-content  flex-col lg:flex-row-reverse">
                    <img src={ikbal} class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="">David Jeams</h1>
                        <h1 class="">Pratient</h1>
                        <p class="py-6">simply dummy text of the printing and typesetting <br />   industry. Lorem Ipsum has been the industry's standard <br /> dummy text ever since the 1500s, when an unknown <br /> printer took a galley of type and scrambled it is a long <br /> established fact that a reader will be distracted by the <br /> readable content </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;