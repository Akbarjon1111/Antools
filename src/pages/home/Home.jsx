import "./Home.css"
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

const Home = () => {
  return (
    <div className="home">
      <div className="home-info">
        <h1>Awesome tools for
        Designer & Developer<span>.</span></h1>
        <p>Antool is a web collection of information on paid or free Design and Development tools</p>
        <form>
            <CiSearch className="search"/>
            <input type="search" placeholder="find more than 430+ tools..." />
            <button>Search</button>
        </form>
        <div className="home-icons">
            <FaFacebookF className="home-icon"/>
            <FaInstagram className="home-icon"/>
            <FaTwitter className="home-icon"/>
        </div>
      </div>
      <div className="home-img">
        <img src="../../../src/assets/home-img.png" alt="" />
      </div>
    </div>
  )
}

export default Home
