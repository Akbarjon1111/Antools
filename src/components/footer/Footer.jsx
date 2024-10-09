import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="line"></div>
      <div className="footer-components">
        <div className="footer-logo">
          <div className="logo">
            <img src="./src/assets/Logo.png" alt="" />
            <h2>antools.</h2>
          </div>
          <div className="logo-info">
            <h3>Copyright 2021. Antools</h3>
            <p>
              Antool is a web collection of information on paid or free Design
              and Development tools
            </p>
          </div>
        </div>
        <div className="footer-info">
          <div className="info-logo">
            <h2>Contact us</h2>
          </div>
          <div className="info-p">
            <p>+621987463</p>
            <p>M Building, No.10 A</p>
            <p>antools@awesome.com</p>
          </div>
        </div>
        <div className="footer-info">
          <div className="info-logo">
            <h2>Categories</h2>
          </div>
          <div className="info-p">
            <p>Design</p>
            <p>Development</p>
          </div>
        </div>
        <div className="footer-info">
          <div className="info-logo">
            <h2>Company Info</h2>
          </div>
          <div className="info-p">
            <p>About Us</p>
            <p>Our Partners</p>
            <p>Blog</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
