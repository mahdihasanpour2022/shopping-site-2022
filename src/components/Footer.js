import React from 'react';
// scss 
import Styles from "../assets/styles/components_styles/Footer.module.scss";
// icons 
import { IoLogoWhatsapp } from "react-icons/io";
import { SiTelegram } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { AiFillLinkedin } from "react-icons/ai";


const Footer = () => {
  return (
    <>
      <div className={Styles.footerContainer}>
        <p>Html Css Sass Bootstarp Js React Redux</p>
        <div className={Styles.iconContainer}>
          <IoLogoWhatsapp />
          <SiTelegram />
          <SiGithub />
          <AiFillLinkedin />
        </div>
      </div>
    </>
  );
};

export default Footer;