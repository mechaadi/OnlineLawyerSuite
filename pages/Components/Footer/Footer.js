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
      <div className={footer.brand}>Branding</div>
      <div className={footer.left  + ' ' +  footer.right}>
        <ul className={footer.list}>
          <li className={footer.li}>Help Desk</li>
          <li className={footer.li}>Contact</li>
          <li className={footer.li}>Resources</li>
        </ul>
      </div>
      {/* </div> */}
    </div>
    <div className={footer.brand2}>Brand</div>
  </div>
  );
};
export default Footer;
