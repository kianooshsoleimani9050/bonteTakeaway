import { AiFillInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="footer p-0 m-0 d-flex flex-row hustify-content-center align-items-center">
      <div className="p-0 m-0 col-md-4 col-sm-6 col-6 d-flex flex-row justify-content-center align-items-center">
        <a
          className="link"
          style={{ color: "inherits" }}
          href="https://www.instagram.com/bonte_takeaway/"
        >
          <ul className="p-0 m-0 d-flex flex-row justify-content-center align-items-center">
            <li className="social-icon p-0 m-0">
              <AiFillInstagram />
            </li>
            <li className="p-0 m-0 d-flex justify-content-center align-items-center">
              <p className="p-1 m-0">bonte_takeaway</p>
            </li>
          </ul>
        </a>
      </div>
      <div className="d-none d-md-flex col-md-4"></div>
      <div className="p-0 m-0 mt-2 col-md-4 col-sm-6 col-6 d-flex flex-column  justify-content-center align-items-center">
        <h5>Shiraz kasayi st.</h5>
      </div>
    </div>
  );
};

export default Footer;
