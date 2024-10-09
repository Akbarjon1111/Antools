import "./About.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const About = () => {
  return (
    <div className="about">
      <div className="about-img">
        <div className="belgi">
          <FaAngleLeft />
        </div>
        <div className="img">
          <img src="./src/assets/manager.png" alt="" />
        </div>
      </div>
      <div className="about-info">
        <div className="info">
          <p>
            Incididunt cillum do sint sint enim ullamco id deserunt mollit qui
            reprehenderit do. Velit ex tempor cillum ad sint occaecat. Do nulla
            velit labore occaecat do deserunt Lorem magna officia incididunt
            consectetur amet. Sunt consectetur veniam minim ex commodo sint non.
            Occaecat aute officia excepteur non laboris id qui ad.
          </p>
        </div>
        <div className="belgi">
            <FaAngleRight  />
        </div>
      </div>
    </div>
  );
};

export default About;
