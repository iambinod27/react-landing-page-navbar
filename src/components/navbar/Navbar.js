import "./navbar.css";
import logo from "../../Assets/Logo.svg";
import spense from "../../Assets/Spense_Icon.svg";
import fiber from "../../Assets/Fiber_Icon.svg";
import gradie from "../../Assets/Gradie_Icon.svg";
import { useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);

  function handleShow() {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  }

  return (
    <nav>
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      {/* Middle  */}
      <ul className="middle ">
        <li onClick={handleShow}>Products</li>
        <li>Challenges</li>
        <li>Resources</li>
        <li>Other Links</li>

        <div className={show ? "product-links" : "product-hidden"}>
          <div className="product-container">
            <div className="links">
              <div className="link-img">
                <img src={spense} alt="" />
              </div>
              <div className="link-content">
                <h3>Spense</h3>
                <p>
                  spense is a landing page for writers. Great fro practicing
                  absolute positioning and flex layouts.
                </p>
              </div>
            </div>

            <div className="links">
              <div className="link-img">
                <img src={fiber} alt="" />
              </div>
              <div className="link-content">
                <h3>Fiber Landing page</h3>
                <p>
                  An online portfolio generator. Great to practice flex/grid
                  layouts, and absolute positioning.
                </p>
              </div>
            </div>

            <div className="links">
              <div className="link-img">
                <img src={gradie} alt="" />
              </div>
              <div className="link-content">
                <h3>Gradie Sign Up page</h3>
                <p>
                  Gradie is a simple sign up page, great to practice centery
                  layouts
                </p>
              </div>
            </div>
          </div>
        </div>
      </ul>

      {/* right */}
      <div className="right">
        <div>Sign in</div>
        <button className="btn">Try for Free</button>
      </div>
    </nav>
  );
};

export default Navbar;
