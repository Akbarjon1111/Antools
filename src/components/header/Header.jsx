import "./Header.css"
import { FaAngleDown } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="../../../src/assets/Logo.png" alt="" />
        <h2>antools.</h2>
      </div>
      <div className="nav">
        <ul>
            <li>Home</li>
            <li className="nav-list">Categories <FaAngleDown /></li>
            <li>My Collections</li>
            <li>Blog</li>
        </ul>
      </div>
      <div className="header-btns">
        <a href="/">Login</a>
        <button>sign up</button>
      </div>
    </div>
  )
}

export default Header
