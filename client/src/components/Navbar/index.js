import { React, useContext, useEffect, useState } from "react";
import { IoMdArrowDropdown } from 'react-icons/io';
import Logo from '../../images/logo.png';
import Styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { UserContext } from "../../Contexts/userContext";

function Navbar() {

  const [menu, setMenu] = useState(false);

  const {name, profilePic, handleLogout} = useContext(UserContext);

  const handleClickOutside = (event) => {
    if (event.target.closest('#navMenu')) {
      return;
    }
    setMenu(false);
  }
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <nav className={Styles.nav}>
      <div className={Styles.nav_left}>
        <Link to="/home">
          <img src={Logo} alt="Logo" className={Styles.logo} />
          <span>Samvad</span>
        </Link>
        <input type="text" placeholder="# Explore" />
      </div>
      <div className={Styles.nav_right} id="navMenu" onClick={() => setMenu(t => !t)} >
        <div className={Styles.userName}>
          <img src={profilePic} alt="user" className={Styles.userIcon} />
          <span>{name}</span>
          <IoMdArrowDropdown className={Styles.arrowIcon} />
        </div>
        {menu && (
          <div className={Styles.menu}>
            <Link to="/profile" className={Styles.menu_item}>
              <span>Profile </span>
            </Link>
            <div className={Styles.menu_item} onClick={handleLogout}>
              <span>Logout </span>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
export default Navbar;