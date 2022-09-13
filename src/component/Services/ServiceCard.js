import React from 'react';

const ServiceCard = ({ title, img, para }) => {
    return (
        <div>
            <div class="card w-72 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="flex justify-between">
                        {title}
                        <img src={img} alt="" />
                    </h2>
                    <p>{para}</p>
                    <a href="" className='font-bold'> Explore Now</a>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;