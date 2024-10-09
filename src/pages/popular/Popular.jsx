import "./Popular.css"
import { FaHeart } from "react-icons/fa6";
import { MdOutlineCreateNewFolder } from "react-icons/md";

const Popular = () => {
  return (
    <div className="popular">
      <h1>Most Popular Tools</h1>
      <p className="popular-p">Tools for the best Designers and Developers <br />
      most popularly used in the world</p>
      <div className="popular-carts">
        <div className="popular-cart">
            <div className="cart-logo">
                <div className="logo-img">
                    <img src="./src/assets/logo1.png" alt="" />
                </div>
                <div className="logo-info">
                    <h3>FIGMA</h3>
                    <p>Free</p>
                </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
        <div className="popular-cart">
            <div className="cart-logo">
                <div className="logo-img">
                    <img src="./src/assets/logo2.png" alt="" />
                </div>
                <div className="logo-info">
                    <h3>Sketch</h3>
                    <p>Trial & Paid</p>
                </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
        <div className="popular-cart">
            <div className="cart-logo">
                <div className="logo-img">
                    <img src="./src/assets/logo3.png" alt=""/>
                </div>
                <div className="logo-info">
                    <h3>VS Code</h3>
                    <p>Free</p>
                </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
      <div className="popular-carts">
        <div className="popular-cart">
            <div className="cart-logo">
                <div className="logo-img">
                    <img src="./src/assets/logo4.png" alt="" />
                </div>
                <div className="logo-info">
                    <h3>Notion</h3>
                    <p>Free & Paid</p>
                </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
        <div className="popular-cart">
            <div className="cart-logo">
                <div className="logo-img">
                    <img src="./src/assets/logo5.png" alt="" />
                </div>
                <div className="logo-info">
                    <h3>Slack</h3>
                    <p>Free & Paid</p>
                </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
        <div className="popular-cart">
            <div className="cart-logo">
                <div className="logo-img">
                    <img src="./src/assets/logo6.png" alt="" />
                </div>
                <div className="logo-info">
                    <h3>Invision</h3>
                    <p>Free & Paid</p>
                </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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

      <button className="popular-btn">Load more</button>
      
    </div>
  )
}

export default Popular
