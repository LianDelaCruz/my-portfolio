import Navigation from "./Navigation"
import styles from "./Header.module.css";
import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.headerTitle}>{title}</h1>
      <Navigation/>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;
