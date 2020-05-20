import footer from "./footer.module.css";
const Footer = () => {
  return (
    <div className={footer.main +' '+ footer.footer}>
      <div>
        <div className={footer.row}>
          <div className={footer.col}>Mobile app</div>
          <div className={footer.col}>Community</div>
          <div className={footer.col}>Company</div>
          <div className={footer.col + ' ' + footer.brand}>Branding</div>
          <div className={footer.col}>Help desk</div>
          <div className={footer.col}>Contact</div>
          <div className={footer.col}>Resources</div>
        </div>
        <div className={footer.gola_container}>
          <div className={footer.Hello} />
          <div className={footer.Hello} />
          <div className={footer.Hello} />
          <div className={footer.Hello} />

        </div>
        <div className={footer.row2}>
          <p className={footer.col + ' ' + footer.bla}>&copy; Copyright Info and social media</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
