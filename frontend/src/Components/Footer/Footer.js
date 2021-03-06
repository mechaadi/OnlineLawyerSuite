/* eslint-disable jsx-a11y/alt-text */
import footer from "./footer.module.css";
import React from 'react'
const Footer = (props) => {
  return (
    <div>
    <div className={footer.App}>
      <div className={footer.left}>
        <ul className={footer.list}>
          <li className={footer.li}>Mobile App</li>
          <li className={footer.li}>Community</li>
          <li className={footer.li}>Company</li>
        </ul>
      </div>
      <div className={footer.brand}>
      <img src={require('../../assets/images/uplawwhite.png')} height={80}/>
      </div>
      <div className={footer.left  + ' ' +  footer.right}>
        <ul className={footer.list}>
          <li className={footer.li}>Help Desk</li>
          <li onClick={props.onContactClick} className={footer.li}>Contact</li>
          <li className={footer.li}>Resources</li>
        </ul>
      </div>
      {/* </div> */}
    </div>
    <div className={footer.brand2}>
      <img src={require('../../assets/images/uplawwhite.png')} height={80}/>
    </div>
  </div>
  );
};
export default Footer;
