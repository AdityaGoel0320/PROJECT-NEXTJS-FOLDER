import styles from "@/app/styles/common.module.css"
import heroStyles from "@/app/styles/herosection.module.css"
import Image from "next/image";
import Link from "next/link";
import { Mulish } from 'next/font/google';

const mulish = Mulish({
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    display: 'swap'
})


const Herosection = (props) => {
    let { title, imageUrl } = props;
    return (
        <>
            <h1 >Full Stack Web Development Training (Student Offer)</h1>

            <main>
                <div className={heroStyles.container}>
                    <div className={heroStyles.main_div}>
                        <div className={heroStyles.leftPart} >
                            <Image className={heroStyles.img} src="/pic1.jpg" alt="" width={1000} height={800} />

                            <p className={heroStyles.line}>
                                <span className={heroStyles.big}>₹7,000.00</span>
                                <span className={heroStyles.small}>₹24,000.00</span>
                            </p>
                            <button>Add to Cart</button>
                            <hr className={heroStyles.hr} />

                            <p className={heroStyles.features}>
                                <p className={heroStyles.line}> All Levels</p>
                                <p className={heroStyles.line}>12 Month Duration</p>
                                <p className={heroStyles.line}> August 23, 2023 Last Updated</p>

                            </p>

                            <hr className={heroStyles.hr} />

                            <p>

                                About Course
                                Training will start from: 09 September 2023.

                                Get ready for a year-long journey into the exciting world of web development with our Full Stack Web Development Training. Designed for students like you, this program will take you from the foundations of HTML, CSS, and JavaScript to mastering advanced technologies like ReactJS, NodeJS, databases, and server management. This curriculum is designed to provide you with a solid foundation and the advanced knowledge needed to excel in the rapidly evolving field of technology. As you progress through each module, you’ll engage in hands-on projects, interactive classes, and gain practical experience that will set you apart as a skilled and proficient full stack developer. Upon successful completion, you’ll receive an internship certificate, validating your expertise and preparing you for a successful career in the dynamic world of web development.

                            </p>
                            <p>

                                What Will You Learn?

                                HTML
                                CSS
                                Bootstrap
                                Tailwind
                                Sass
                                Javascript
                                JQuery
                                ReactJS + NextJS
                                PWA
                                NodeJS
                                MySQL
                                MongoDB
                                Linux
                                Nginx
                                Apache
                                Git
                                Docker
                                AWS / GCP / Azure
                                Hosting on CPanel
                                SSL
                                Domain Setup (DNS)
                                Email Setup (MX Record)
                                Chrome Extension
                                Chat-GPT use in Coding


                            </p>
                        </div>

                        <div className={heroStyles.rightPart}>
                            A course by
                        </div>

                    </div>
                </div>
            </main>


            {/* box */}
            Live Sessions Recordings

            Access recordings of all live sessions, ensuring you never miss a class and can review concepts at your own pace.
            Doubt Clearing Support

            Get dedicated doubt clearing sessions to address any questions and clarify concepts for a thorough understanding.
            Training Certificate

            Earn a valuable training certificate upon successful completion, boosting your resume and demonstrating practical skills.
            Career Assistance

            Receive guidance and support for your career journey, including resume building and interview preparation.


            <p>

                Get certificates on course completion

                Receive Certificates When You Successfully Complete Our Courses, Validating Your Achievements and Skill Development.

            </p>
        </>

    );
};

export default Herosection;