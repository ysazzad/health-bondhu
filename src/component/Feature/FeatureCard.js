import React from 'react';

const FeatureCard = ({ title, img, para }) => {
    return (
        <div>
            <div class="card w-72 bg-white">
                <div class="card-body">
                    <h2 class="flex justify-between">
                        {title}
                        <img src={img} alt="" />
                    </h2>
                    <p>{para}</p>
                </div>
            </div>

        </div>
    );
};

export default FeatureCard;