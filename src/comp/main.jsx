import { NavLink } from "react-router-dom";

const Main = () => {
  return (
    <div
      className="body p-0 m-0 d-flex flex-column justify-content-center align-items-center rounded"
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/bonte/image/upload/v1623181348/WhatsApp_Image_2021-06-01_at_23.05.50_w9m0zi.jpg)",
      }}
    >
      <div className="text-in-main p-0 m-0 d-flex flex-column justify-content-center align-items-center text-center">
        <h1 className="opening-title">Welcome to our Cafe</h1>
        <h3 className="">We serve you caffee and enjoy</h3>
        <button
          className="btn m-3"
          style={{
            backgroundColor: "#eb5e28",
            color: "#fffcf2",
            fontSize: "20px",
          }}
        >
          <NavLink
            style={{ color: "#fffcf2" }}
            className="bg-transparent text-decoration-none"
            acti
            to="/menu"
          >
            See our menu
          </NavLink>
        </button>
      </div>
    </div>
  );
};

export default Main;
