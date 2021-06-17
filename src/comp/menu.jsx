import { useState } from "react";
import { menuItem } from "../utils/menu_items";
import { FaArrowCircleUp } from "react-icons/fa";
const Menu = () => {
  // console.log(menuItem);
  const [menu, setMenu] = useState(menuItem);
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const activeScrollButton = () => {
    if (!showScrollBtn && window.pageYOffset > 150) {
      setShowScrollBtn(true);
    } else if (showScrollBtn && window.pageYOffset < 150) {
      setShowScrollBtn(false);
    }
  };
  window.addEventListener("scroll", activeScrollButton);
  return (
    <div className="menu p-1 m-0 d-flex flex-column justify-content-start align-items-center">
      <ul className="filter-section p-2 m-0 mt-2 d-flex row justify-content-start align-items-center ">
        <li
          className="col-md-3 col-6 p-1 m-0 mt-1 filter-list-item"
          onClick={() => {
            setMenu(menuItem);
          }}
        >
          All menu
        </li>
        <li
          className="col-md-3 col-6 p-1 m-0 mt-1 filter-list-item"
          onClick={() => {
            setMenu(
              menuItem?.filter(
                (item) => item.category === "espresso_based_coffee"
              )
            );
          }}
        >
          Espresso based coffee
        </li>
        <li
          className="col-md-3 col-6 p-1 m-0 mt-1 filter-list-item"
          onClick={() => {
            setMenu(
              menuItem?.filter(
                (item) => item.category === "coldei_based_coffee"
              )
            );
          }}
        >
          Coldei based coffee
        </li>
        <li
          className="col-md-3 col-6 p-1 m-0 mt-1 filter-list-item"
          onClick={() => {
            setMenu(
              menuItem?.filter((item) => item.category === "brewed_coffee")
            );
          }}
        >
          Brewed coffee
        </li>
        <li
          className="col-md-3 col-6 p-1 m-0 mt-1 filter-list-item"
          onClick={() => {
            setMenu(menuItem?.filter((item) => item.category === "shake"));
          }}
        >
          Shake
        </li>
        <li
          className="col-md-3 col-6 p-1 m-0 mt-1 filter-list-item"
          onClick={() => {
            setMenu(menuItem?.filter((item) => item.category === "mocktail"));
          }}
        >
          Mocktail
        </li>
        <li
          className="col-md-3 col-6 p-1 m-0 mt-1 filter-list-item"
          onClick={() => {
            setMenu(menuItem?.filter((item) => item.category === "smoothie"));
          }}
        >
          Smoothie
        </li>
        <li
          className="col-md-3 col-6 p-1 m-0 mt-1 filter-list-item"
          onClick={() => {
            setMenu(
              menuItem?.filter(
                (item) => item.category === "hottie_without_coffee"
              )
            );
          }}
        >
          Hottie without coffee
        </li>
        <li
          className="col-md-3 col-6 p-1 m-0 mt-1 filter-list-item"
          onClick={() => {
            setMenu(
              menuItem?.filter(
                (item) => item.category === "coldie_without_coffee"
              )
            );
          }}
        >
          Coldei without coffee
        </li>
        <li
          className="col-md-3 col-6 p-1 m-0 mt-1 filter-list-item"
          onClick={() => {
            setMenu(menuItem?.filter((item) => item.category === "sweets"));
          }}
        >
          Sweets
        </li>
      </ul>

      <div className="p-2 m-0 d-flex row justify-content-start align-items-center">
        {menu?.map((item) => {
          return (
            <div
              key={item.name}
              className="p-2 m-0 col-md-3 col-sm-6 col-12 rounded"
            >
              <div className="p-0 m-0 menu-img-container">
                <img
                  className="img-fluid p-0 m-0 w-100 menu-img"
                  src={item.image}
                  alt="bonte-item"
                />
                <div className="dec-container w-100">
                  <h4 className="w-100 text-center">{item.decription}</h4>
                </div>
              </div>
              <div className="item-card-hanger d-flex justify-content-between align-items-center">
                <div className="hanger-left"></div>
                <div className="hanger-right"></div>
              </div>
              <div className="item-card p-3 m-0  rounded d-flex justify-content-between">
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
      <FaArrowCircleUp
        className={`scroll-to-top-icon ${showScrollBtn ? "" : "d-none"}`}
        onClick={scrollTop}
      />
    </div>
  );
};

export default Menu;
