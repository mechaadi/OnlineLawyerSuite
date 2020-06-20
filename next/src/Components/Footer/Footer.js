import footer from "./footer.module.css";
const Footer = () => {
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
      <img  alt="" src={require('../../../public/static/uplawwhite.png')} height={80}/>
      </div>
      <div className={footer.left  + ' ' +  footer.right}>
        <ul className={footer.list}>
          <li className={footer.li}>Help Desk</li>
          <li className={footer.li}>Contact</li>
          <li className={footer.li}>Resources</li>
        </ul>
      </div>
      {/* </div> */}
    </div>
    <div className={footer.brand2}>
      <img alt="" src={require('../../../public/static/uplawwhite.png')} height={80}/>
    </div>
  </div>
  );
};
export default Footer;
