import "./navbar.scss";

import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="container -z-50">
      <div className="navbar">
        <nav className="nav">
          <h1>Moneret.</h1>
          <div className="menu-collapse">
            <AiOutlineMenu />
            <ul>
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>Product</Link>
              </li>
              <li>
                <Link>FAQ</Link>
              </li>
              <li>
                <Link>About</Link>
              </li>
              <li>
                <Link>Resource</Link>
              </li>
              <li>
                <Link>Help</Link>
              </li>
              <button>
                <Link>Get in Touch</Link>
              </button>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
