import style from "@/app/styles/box.module.css"


const Box = () => {
  return (
    <div className={style.box}>


      <div className={style.smallBox}>
        <h3>Live Sessions Recordings</h3>

        <p>
          Access recordings of all live sessions, ensuring you never miss a class and can review concepts at your own pace.
        </p>
      </div>
      <div className={style.smallBox}>


        <h3>Doubt Clearing Support</h3>
        <p>
          Get dedicated doubt clearing sessions to address any questions and clarify concepts for a thorough understanding.
        </p>
      </div>

      <div className={style.smallBox}>
        <h3>Training Certificate</h3>
        <p>
          Earn a valuable training certificate upon successful completion, boosting your resume and demonstrating practical skills.
        </p>
      </div>

      <div className={style.smallBox}>
        <h3>Career Assistance</h3>
        <p>
          Receive guidance and support for your career journey, including resume building and interview preparation.
        </p>
      </div>

    </div>
  )
}

export default Box