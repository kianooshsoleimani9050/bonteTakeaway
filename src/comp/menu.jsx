import { menuItem } from "../utils/menu_items";
const Menu = () => {
  console.log(menuItem);
  return (
    <div className="menu p-0 m-0 d-flex justify-content-center align-items-center">
      <div className="p-3 m-0 d-flex row justify-content-start align-items-center">
        {menuItem?.map((item) => {
          return (
            <div
              key={item.name}
              className="p-2 m-0 col-md-3 col-sm-6 col-12 rounded"
            >
              <div className="p-0 m-0 ">
                <img
                  className="img-fluid p-0 m-0 w-100"
                  src={item.image}
                  alt="bonte-item"
                />
              </div>
              <div className="item-card p-3 m-0 mt-2 rounded d-flex justify-content-between">
                <div className="p-1 m-0">
                  <label>Name: </label>
                  <h4>{item.name}</h4>
                </div>
                <div className="p-1 m-0">
                  <strong>Price: </strong>
                  <h4>{item.price}</h4>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
