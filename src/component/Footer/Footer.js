import React from 'react';
import { FaFacebook, FaTwitterSquare, FaYoutube } from 'react-icons/fa'
import { RiInstagramFill } from "react-icons/ri";
import { AiFillGoogleCircle, AiFillTwitterCircle } from "react-icons/ai";
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <footer class="footer px-16 pt-20 text-base-content footer-bg">
                <div>
                    <a class=" normal-case text-xl text-primary w-10 font-bold" >Doc<span className='text-secondary'>mic.</span> </a>

                    <p>simply dummy text of the printing<br />nd typesetting industry. Lorem <br />Ipsum has bee</p>
                    <div>
                        <div class="grid grid-flow-col gap-4">
                            <a href='' className='text-primary text-4xl' > <FaFacebook ></FaFacebook></a>
                            <a href="" target="_blank" className='text-primary text-4xl'><RiInstagramFill></RiInstagramFill></a>
                            <a href="" target="_blank" className='text-primary text-4xl'><AiFillGoogleCircle></AiFillGoogleCircle></a>
                            <a href="" target="_blank" className='text-primary text-4xl'><AiFillTwitterCircle></AiFillTwitterCircle></a>
                            <a href="" target="_blank" className='text-primary text-4xl'><FaYoutube></FaYoutube></a>
                        </div>
                    </div>
                    <div>
                        <p>Copyright @222 Medicom All Rights Reserved</p>
                    </div>
                </div>
                <div>
                    <span class=" text-secondary font-bold">Quick Links</span>
                    <a class="link link-hover">About Us</a>
                    <a class="link link-hover">Our Pricing</a>
                    <a class="link link-hover">Our Gallery</a>
                    <a class="link link-hover">Appointment</a>
                    <a class="link link-hover">Privacy Policy</a>
                </div>
                <div>
                    {/* <span class="footer-title">Company</span> */}
                    <a class="link link-hover">Services</a>
                    <a class="link link-hover">Our Doctors</a>
                    <a class="link link-hover">Our Latest News</a>
                    <a class="link link-hover">Careers</a>
                    <a class="link link-hover">Contact Us</a>
                </div>
                <div>
                    <span class=" text-secondary font-bold ">Opening Hours</span>
                    <a class="link link-hover"> <span className='text-primary pr-6'>Mon- Tue</span>  08:00 AM- 05:00 PM</a>
                    <a class="link link-hover"><span className='text-primary pr-6'>Wed- Thu </span>  09:00 AM- 06:00 PM</a>
                    <a class="link link-hover"><span className='text-primary pr-6'>Fri- Sat</span>   10:00 AM- 07:00 PM</a>
                    <a class="link link-hover"><span className='text-primary pr-6'>Sunday</span>   Emergency Only</a>
                    <a class="link link-hover"> <span className='text-primary pr-6'>Personal</span>   Mon- 05:00 PM</a>

                </div>
            </footer>
        </div>
    );
};

export default Footer;