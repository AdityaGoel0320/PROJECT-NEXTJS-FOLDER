import React from 'react';
import style from '@/app/styles/footer.module.css'
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";



const Footer = () => {
    return (
        <>
        <div className={style.footer}>

            <div className={style.container}>


                <div className={style.content}>
                    <Link href="https://courses.xzect.com/">
                        <Image src="/logo.jpg" alt="my logo image" width={150} height={40} className={style.img} />

                    </Link>

                    <h3 className={style.h3}>

                        Unlock Your Potential with Xzect’s Dynamic Courses
                    </h3>


                    <p>


                        Xzect goes beyond providing services – we’re committed to empowering both businesses and individuals through our diverse range of Services.
                        We also provides Courses and Trainings. Delve into the world of technology and innovation with our specialized training offerings, designed to enhance your skills and open new avenues of growth. Our courses cover a wide spectrum of cutting-edge fields, including software development, website design, SEO strategies, cloud solutions, robotics and automation, 3D printing and prototyping, data science and analytics, AI and machine learning, IoT applications, AR and VR experiences, blockchain technology, and more.


                    </p>

                    <p>

                        Led by our team of seasoned professionals, each course is carefully crafted to provide practical insights, hands-on experiences, and industry-relevant knowledge. Whether you’re looking to upskill, explore new horizons, or dive deeper into a specific tech discipline, Xzect’s courses are your gateway to mastering the tools and techniques that drive innovation
                    </p>
                    <div className={style.contact}>

                        <p>

                            +91 98188 06393 <br />contact@xzect.com
                        </p>
                        <p>

                            
                        </p>
                    </div>
                </div>

                <div className={style.courses}>

                    <h3 className={style.h3}>

                        Courses
                    </h3>
                    <ul>
                        <li>

                            Full Stack Dev. Training Course (Student Offer)
                        </li>
                        <li>
                            Full Stack Dev. (Professionals)

                        </li>
                        <li>

                            Full Stack Dev. (Certification Course)
                        </li>
                        <li>

                            Data Science Course
                        </li>
                        <li>

                            PowerBI Crash Course
                        </li>
                        <li>

                            Tableau Crash Course
                        </li>
                        <li>

                            UI/UX Design Course
                        </li>
                        <li>

                            Full Stack Dev. (Placement Guarantee)
                        </li>
                        <li>

                            Magento Development Course
                        </li>
                        <li>

                            WordPress Development Course
                        </li>
                        <li>

                            Arduino Complete Tutorial
                        </li>
                        <li>

                            3D Printing with Fusion 360
                        </li>

                    </ul>
                </div>

                <div className={style.about}>


                    <h3 className={style.h3}>


                        About
                    </h3>
                    <ul>
                        <li>


                            Go to Main Website
                        </li>
                        <li>


                            About Xzect
                        </li>
                        <li>

                            Tech Stack
                        </li>
                        <li>

                            Our Services
                        </li>
                        <li>

                            Industries
                        </li>
                        <li>

                            Contact Us
                        </li>
                        <li>

                            Terms & Conditions
                        </li>
                        <li>

                            Refund Policy
                        </li>
                        <li>

                            Shipping Policy
                        </li>
                        <li>

                            Privacy Policy
                        </li>
                        <li>

                            Legal Information
                        </li>
                        <li>

                            Careers
                        </li>
                    </ul>

                </div>



            </div>
            <hr className={style.hr} />
            <div className={style.footer_end}>

                <span>

                    Main Website (www.xzect.com)
                </span>
                <span>

                    © 2018 - 2023. Xzect Labs. All rights reserved.
                </span>
            </div>
            </div>

        </>
    );
}

export default Footer;