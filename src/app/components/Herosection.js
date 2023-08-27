import heroStyles from "@/app/styles/herosection.module.css"
import Image from "next/image";
import Box from "./Box";
import Certificate from "./Certificate";
import AccordionNextJs from "./Accordion";
import AccordianMain from "./Main";


const Herosection = () => {
    return (
        <>
            <h3 className={heroStyles.heading}>Full Stack Web Development Training (Student Offer)</h3>

            <main>
                <div className={heroStyles.main_div}>
                    <div className={heroStyles.leftPart} >
                        <div  className={heroStyles.img}>

                        <Image  className={heroStyles.poster} src="/pic1.jpg" alt="" width={500} height={500} />
                        </div>

                        <p className={heroStyles.line}>
                            <span className={heroStyles.big}>₹7,000.00</span>
                            <span className={heroStyles.small}>₹24,000.00</span>
                        </p>
                        <button className={heroStyles.btn}>Add to Cart</button>
                        <hr className={heroStyles.hr} />

                        <p className={heroStyles.features}>
                            <p className={heroStyles.line}> All Levels</p>
                            <p className={heroStyles.line}>12 Month Duration</p>
                            <p className={heroStyles.line}> August 23, 2023 Last Updated</p>

                        </p>


                        <hr className={heroStyles.hr} />

                        <div className={heroStyles.about_section}>

                            <h3 className={heroStyles.h3}> About Course</h3>
                            <h4 className={heroStyles.h4}>

                                Training will start from: 09 September 2023.

                            </h4>
                            <p className={heroStyles.p}>

                                Get ready for a year-long journey into the exciting world of web development with our Full Stack Web Development Training. Designed for students like you, this program will take you from the foundations of HTML, CSS, and JavaScript to mastering advanced technologies like ReactJS, NodeJS, databases, and server management. This curriculum is designed to provide you with a solid foundation and the advanced knowledge needed to excel in the rapidly evolving field of technology. As you progress through each module, you’ll engage in hands-on projects, interactive classes, and gain practical experience that will set you apart as a skilled and proficient full stack developer. Upon successful completion, you’ll receive an internship certificate, validating your expertise and preparing you for a successful career in the dynamic world of web development.
                            </p>

                            <div className={heroStyles.learn}>
                                <h3 className={heroStyles.h3}>What Will You Learn?</h3>


                            <div className={heroStyles.cont}>
                            <div>
                                    <ul>
                                        <li>

                                            HTML
                                        </li>
                                        <li>

                                            Tailwind
                                        </li>
                                        <li>

                                            JQuery
                                        </li>
                                        <li>

                                            CSS
                                        </li>
                                        <li>

                                            Bootstrap
                                        </li>
                                        <li>

                                            Sass
                                        </li>
                                        <li>

                                            Javascript
                                        </li>
                                        <li>

                                            ReactJS + NextJS
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <li>


                                            PWA
                                        </li>
                                        <li>

                                            NodeJS
                                        </li>
                                        <li>

                                            MySQL
                                        </li>
                                        <li>

                                            MongoDB
                                        </li>
                                        <li>

                                            Linux
                                        </li>
                                        <li>

                                            Nginx
                                        </li>
                                        <li>

                                            Apache
                                        </li>
                                        <li>

                                            Git
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>

                                        <li>

                                            Docker
                                        </li>
                                        <li>

                                            AWS / GCP / Azure
                                        </li>
                                        <li>

                                            Hosting on CPanel
                                        </li>
                                        <li>

                                            SSL
                                        </li>
                                        <li>

                                            Domain Setup (DNS)
                                        </li>
                                        <li>

                                            Email Setup (MX Record)
                                        </li>
                                        <li>

                                            Chrome Extension
                                        </li>
                                        <li>

                                            Chat-GPT use in Coding
                                        </li>
                                    </ul>
                                </div>
                            </div>


                            </div>

                        </div>



                    </div>

                    <div className={heroStyles.rightPart}>
                        <h3 className={heroStyles.h3}>A course by</h3>
                        <p className={heroStyles.line}>
                            <Image className={heroStyles.smallLogo} src="/smallLogo.png" alt="" width={25} height={25} />Xzect


                        </p>
                        <hr className={heroStyles.hr} />
                        <div className={heroStyles.right_courses}>
                            <h4 className={heroStyles.h4}>
                                Course Suitable For
                            </h4>
                            <ul>
                                <li>
                                    Recently Completed High School.

                                </li>
                                <li>

                                    Undergraduates (B.Tech, BCA, MCA, B.VOC,)
                                </li>
                                <li>

                                    Aspiring Developers
                                </li>
                                <li>
                                    Tech Enthusiasts

                                </li>
                            </ul>




                        </div>

                        <div className={heroStyles.right_highlights}>

                            <h4 className={heroStyles.h4}>Course Highlights</h4>
                            <ul>

                                <li>

                                    Live Interactive Sessions
                                </li>
                                <li>

                                    Real-World Projects and Practical Use Cases
                                </li>
                                <li>

                                    Industry Relevance
                                </li>
                                <li>

                                    Doubt Clearing Expert Sessions
                                </li>
                                <li>

                                    Career Assistance
                                </li>
                                <li>

                                    Certificates
                                </li>
                                <li>

                                    Resume and Portfolio Building
                                </li>
                                <li>

                                    Training will Continue until you become a Full Stack Developer even after 12 months timeline is over
                                </li>
                            </ul>


                        </div>

                        <div className={heroStyles.timing} >

                            <h4 className={heroStyles.h4}> Course Timings (IST)</h4>


                            <ul>
                                <li>

                                    Tentative Slots: You can choose any one slot. Link will be provided after course registration.
                                </li>
                                <li>

                                    Sat & Sun: 7:00 PM - 9:00 PM
                                </li>
                                <li>

                                    Wed & Fri: 7:00 PM - 9:00 PM
                                </li>
                                <li>

                                    Wed & Fri: 1:00 PM - 3:00 PM
                                </li>
                                <li>

                                    Tue & Thu: 11:00 AM - 1:00 PM
                                </li>
                            </ul>


                        </div>

                        <div className={heroStyles.req} >

                            <h4 className={heroStyles.h4}>Requirements</h4>



                            <ul>

                                <li>

                                    Basic Computer Literacy (Familiarity with using a computer, browsing the internet, and using common software applications.)
                                </li>
                                <li>

                                    A Laptop, PC or Mac with internet connectivity.
                                </li>

                            </ul>

                        </div>

                        <div className={heroStyles.tag} >

                            <h4 className={heroStyles.h4}>Tags</h4>
                            <span>

                                Certificate
                            </span>
                            <span>

                                Full Stack Development
                            </span>
                            <span>

                                Live Classes
                            </span>
                            <span>

                                Software
                            </span>
                            <span>

                                Student Discount
                            </span>


                        </div>



                    </div>

                </div>
            </main>


            {/* box */}

            <Box />

            <Certificate />
            {/* <AccordianMain/> */}
            {/* <Accordion  title="Section 1" content="Content for section 1." /> */}
            <AccordionNextJs title="Section 1" content="Content for section 1." />
            <AccordianMain />
        </>

    );
};

export default Herosection;