import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="p-0 m-0 d-flex flex-column justify-content-center align-items-center">
      <div
        className="body d-flex flex-column justify-content-center align-items-center rounded"
        style={{ backgroundImage: "url(/images/back.jpeg)" }}
      >
        <div className="text-in-main d-flex flex-column justify-content-center align-items-center text-center">
          <h1 className="opening-title">Welcome to our Cafe</h1>
          <h3 className="">We serve you caffe and enjoy</h3>
          <button
            className="btn m-3"
            style={{
              backgroundColor: "#eb5e28",
              color: "#fffcf2",
              fontSize: "20px",
            }}
          >
            <Link
              style={{ color: "#fffcf2" }}
              className="bg-transparent text-decoration-none"
              to="/menu"
            >
              See our menu
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
