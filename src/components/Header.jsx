import styles from "./Header.module.css";
import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <header className={styles.header}>
      <h1>{title}</h1>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;
