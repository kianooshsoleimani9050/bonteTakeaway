const Main = () => {
  return (
    <div className="body p-0 m-0 d-flex flex-column justify-content-center align-items-center">
      <div
        className="body w-100 d-flex flex-column justify-content-center align-items-center rounded"
        style={{ backgroundImage: "url(/images/back.jpeg)" }}
      >
        <div className="text-in-main w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center">
          <h1 className="" style={{ fontSize: "70px" }}>
            Welcome to our Cafe
          </h1>
          <h3 className="">We serve you caffe and enjoy</h3>
        </div>
      </div>
    </div>
  );
};

export default Main;
