import React from 'react';
import image from '../../assets/image/pose_2.png'
const Header = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={image} />
                <div>
                    <h1 class="text-5xl font-bold">Your <span className='text-primary'>Health</span> Is Our</h1>
                    <h1 class="text-5xl font-bold">Top <span className='text-secondary'>Priority</span> </h1>
                    <p class="py-6">There are many variations of passages of lpsum <br />
                        available, but the majority hae suffered.</p>
                    <button class="btn btn-primary">Meet Our Specialist</button>
                    <br />
                    <div class="stats shadow">
                        <div class="stat">
                            <div class="stat-value text-secondary">262k+</div>
                            <div class="stat-desc">Recovered Patients</div>
                        </div>
                        <div class="stat">
                            <div class="stat-value text-secondary">96%</div>
                            <div class="stat-desc">Satisfaction Rate</div>
                        </div>
                        <div class="stat">
                            <div class="stat-value text-secondary">86+</div>
                            <div class="stat-desc">Expert Doctors</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;