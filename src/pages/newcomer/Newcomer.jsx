import "./Newcomer.css";
import { FaHeart } from "react-icons/fa6";
import { MdOutlineCreateNewFolder } from "react-icons/md";

const Newcomer = () => {
  return (
    <div className="newcomer">
      <div className="newcomer-info">
        <h1>Newcomer Tools</h1>
        <p>
          Wow! see the latest update of the most recommended tools from reliable
          designers and developers
        </p>
        <button>Explore more</button>
      </div>
      <div className="newcomer-carts">
        <div className="carts">
          <div className="cart">
            <div className="cart-logo">
              <div className="logo-img">
                <img src="./src/assets/zeplin.png" alt="" />
              </div>
              <div className="logo-info">
                <h3>Zeplin</h3>
                <p>Free & Paid</p>
              </div>
            </div>
            <p className="cart-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            <div className="cart-visit">
              <div className="visit-icons">
                <div className="heart-icon">
                  <FaHeart />
                </div>
                <div className="folder-icon">
                  <MdOutlineCreateNewFolder />
                </div>
              </div>
              <div className="visit-btn">
                <button>Visit</button>
              </div>
            </div>
          </div>
          <div className="cart">
            <div className="cart-logo">
              <div className="logo-img">
                <img src="./src/assets/phpstorm.png" alt="" />
              </div>
              <div className="logo-info">
                <h3>PHPStorm</h3>
                <p>Free</p>
              </div>
            </div>
            <p className="cart-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            <div className="cart-visit">
              <div className="visit-icons">
                <div className="heart-icon">
                  <FaHeart />
                </div>
                <div className="folder-icon">
                  <MdOutlineCreateNewFolder />
                </div>
              </div>
              <div className="visit-btn">
                <button>Visit</button>
              </div>
            </div>
          </div>
        </div>
        <div className="carts">
          <div className="cart">
            <div className="cart-logo">
              <div className="logo-img">
                <img src="./src/assets/toolbox.png" alt="" />
              </div>
              <div className="logo-info">
                <h3>Toolbox</h3>
                <p>Free</p>
              </div>
            </div>
            <p className="cart-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            <div className="cart-visit">
              <div className="visit-icons">
                <div className="heart-icon">
                  <FaHeart />
                </div>
                <div className="folder-icon">
                  <MdOutlineCreateNewFolder />
                </div>
              </div>
              <div className="visit-btn">
                <button>Visit</button>
              </div>
            </div>
          </div>
          <div className="cart">
            <div className="cart-logo">
              <div className="logo-img">
                <img src="./src/assets/procreate.png" alt="" />
              </div>
              <div className="logo-info">
                <h3>Procreate</h3>
                <p>Paid</p>
              </div>
            </div>
            <p className="cart-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            <div className="cart-visit">
              <div className="visit-icons">
                <div className="heart-icon">
                  <FaHeart />
                </div>
                <div className="folder-icon">
                  <MdOutlineCreateNewFolder />
                </div>
              </div>
              <div className="visit-btn">
                <button>Visit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newcomer;
