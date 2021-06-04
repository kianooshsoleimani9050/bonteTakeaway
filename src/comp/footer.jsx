import { FaFacebook, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="footer p-0 m-0 d-flex flex-row hustify-content-center align-items-center">
      <div className="p-0 m-0 col-md-4 col-sm-6 col-6 d-flex flex-row justify-content-center align-items-center">
        <ul className="p-0 m-0 d-flex flex-row justify-content-center align-items-center">
          <li className="social-icon p-0 m-3 ">
            <a
              className="link"
              style={{ color: "inherits" }}
              href="https://www.instagram.com/bonte_takeaway/"
            >
              <AiFillInstagram />
            </a>
          </li>
          <li className="social-icon p-0 m-3 ">
            <FaFacebook />
          </li>
          <li className="social-icon p-0 m-3 ">
            <FaTwitter />
          </li>
        </ul>
      </div>
      <div className="d-none d-md-flex col-md-4"></div>
      <div className="p-0 m-0 col-md-4 col-sm-6 col-6 d-flex flex-column  justify-content-center align-items-center">
        <h5>Address: </h5>
        <h6>Shiraz kasayi st.</h6>
      </div>
    </div>
  );
};

export default Footer;
