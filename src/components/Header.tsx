import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.container}>
      <Link to="/">
        <img className={styles.logo} src="/pictures/logo.png" />
      </Link>
    </div>
  );
};

export default Header;
