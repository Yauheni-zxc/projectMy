import styles from "./Header.module.css";
import { SlBasket } from "react-icons/sl";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { ImMenu } from "react-icons/im";

import ThemeToggle from "../ToggleTheme/ToggleTheme";
import {toggleMenu} from "../../features/basketCount/Menu";

function Header() {
  const dispatch = useDispatch();

  const menu = useSelector((state) => state.menu.isMenu);
  const count = useSelector((state) => state.item.count);
  const totalPrice = useSelector((state) => state.item.totalPrice);

  const menuOpen = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className={styles.container1}>
      <div className={styles.header}>
        <div className={styles.icon_wrapper}>
          <ImMenu onClick={() => menuOpen()} className={styles.icon_menu} />
        </div>
        <ul className={!menu ? `${styles.menu_list}` : `${styles.menu_none}`}>
          <ThemeToggle />

          <li className={styles.menu_link}>
            <NavLink className={styles.nav_link} to="/">
              Home
            </NavLink>
          </li>
          <li className={styles.menu_link}>
            <NavLink className={styles.nav_link} to="/Favorites">
              Favorites
            </NavLink>
          </li>
          <li className={styles.menu_link}>
            <NavLink className={styles.nav_link} to="/Oplata">
              Oplata
            </NavLink>
          </li>
          <li className={styles.menu_link}>
            <NavLink className={styles.nav_link} to="/Contacts">
              Contacts
            </NavLink>
          </li>
          <li className={styles.menu_link}>
            <NavLink className={styles.nav_link} to="/Login">
              Login
            </NavLink>
          </li>
          <li className={styles.menu_link}>
            <NavLink className={styles.nav_link} to="/Basket">
              {" "}
              <div className={styles.wrapper_buttons}>
                <SlBasket />
                <p className={styles.count}>{count}</p>
                <p className={styles.total}>{totalPrice}</p>$
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Header;
