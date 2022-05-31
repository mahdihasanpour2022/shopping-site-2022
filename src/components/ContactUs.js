import React, { useState, useEffect } from 'react';
// helper function 
import { validation } from "../helper_function/validation";
// scss 
import Styles from "../assets/styles/components_styles/ContactUs.module.scss";
// icons 
import { IoLogoWhatsapp } from "react-icons/io";
import { SiTelegram } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { AiFillLinkedin } from "react-icons/ai";
// notify 
import { notify } from "../helper_function/toastify";
// Breadcrumb
import { Breadcrumb } from "react-bootstrap";




const ContactUs = () => {


  const [userMessage, setUserMessage] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})

  useEffect(() => {
    setErrors(validation(userMessage, "contactus"))
  }, [userMessage])

  const inputHandler = e => {
    setUserMessage({ ...userMessage, [e.target.name]: e.target.value })
  }

  const inputTouched = e => {
    setTouched({ ...touched, [e.target.name]: true })
  }

  const submitForm = e => {
    e.preventDefault();

    if (!!Object.keys(errors).length) {
      setTouched({
        name: true,
        email: true,
        subject: true,
        message: true,
      })
      notify("failed", "send message failed.you have errors");
      return false;
    } else {
      notify("success", "message sent successfully");
      localStorage.setItem("userMessage", JSON.stringify(userMessage))
    }
  }


  return (
    <>
      <div className="container-fluid p-0">
        <div className="row m-0 ">

          <div className='col-12 p-0'>
            <div className={Styles.contactHeaderImage}>
              <div className={Styles.content}>
                <p>Contact Us</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Breadcrumb */}
      <div className="container mt-2">
        <div className="row">
          <div>
            <Breadcrumb style={{fontSize:"15px"}}>
              <Breadcrumb.Item href="/" >Home</Breadcrumb.Item>
              <Breadcrumb.Item active>Contactus</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
      </div>

      <div className="container mt-3">
        <div className="row">

          <div className={`${Styles.leftForm} col-md-8`}>
            {/* form  */}
            <form onSubmit={e => submitForm(e)} className={Styles.contactForm}>
              <p className={Styles.formTitle}>contact form</p>
              <div className="container-fluid p-0">
                <div className='row mt-2'>
                  <div className='col-lg-6'>
                    <div>
                      <label htmlFor="name_input">Your name</label>
                      <input onFocus={e => inputTouched(e)} onChange={e => inputHandler(e)} name="name" type="text" className='form-control' id="name_input" />
                      <span className={Styles.errorSpan}>{(errors.name && touched.name) && errors.name}</span>
                    </div>
                  </div>
                  <div className='col-lg-6'>
                    <div>
                      <label htmlFor="email">Your email</label>
                      <input onFocus={e => inputTouched(e)} onChange={e => inputHandler(e)} name="email" type="email" className='form-control' id="email" />
                      <span className={Styles.errorSpan}>{(errors.email && touched.email) && errors.email}</span>
                    </div>
                  </div>
                </div>
                <div className="row mt-2">
                  <div>
                    <label htmlFor="Subject">Subject</label>
                    <input onFocus={e => inputTouched(e)} onChange={e => inputHandler(e)} name="subject" type="text" className='form-control' id="Subject" />
                    <span className={Styles.errorSpan}>{(errors.subject && touched.subject) && errors.subject}</span>
                  </div>
                </div>
                <div className="row mt-2">
                  <div>
                    <label>Your message</label>
                    <textarea onFocus={e => inputTouched(e)} onChange={e => inputHandler(e)} name="message" className={`${Styles.contactTextarea} form-control`}></textarea>
                    <span className={Styles.errorSpan}>{(errors.message && touched.message) && errors.message}</span>
                  </div>
                </div>
                <button type='submit' className={Styles.contactFormBtn}>Send</button>
              </div>
            </form>
          </div>

          <div className={`${Styles.rightForm} col-md-4`}>
            <div>
              <p>Address:</p>
              <span>tehran province, tehran, kaj square 9 street </span>
              <p>Phone:</p>
              <span>+98 2122665587 Call Now</span>
              <p>Website:</p>
              <span>https://redq.io/ Visit This Site</span>
              <div className={Styles.socialIcon}>
                <IoLogoWhatsapp />
                <SiTelegram />
                <SiGithub />
                <AiFillLinkedin />
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};
export default React.memo(ContactUs);