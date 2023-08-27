import React from 'react'

import style from "@/app/styles/certificate.module.css"
import Image from "next/image";

const Certificate = () => {
    return (
        <>
            <div className={style.certicate_container}>

                <h3 className={style.h3}>Get certificates on course completion</h3>
                <h4 className={style.h4}>

                    Receive Certificates When You Successfully Complete Our Courses, Validating Your Achievements and Skill Development.
                </h4>
                <Image className={style.img} src="/certicate.jpg" alt="" width={500} height={500} />
            </div>
        </>
    )
}

export default Certificate