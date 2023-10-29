import { NavLink } from "react-router-dom";
import styles from "./navigation.module.css";

const Navigation = () => {
  return (
    <nav>
      <ul className={styles.navList}>
        <li>
          <NavLink to="/" className={styles.navLink}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={styles.navLink}>Projects</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={styles.navLink}>Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
