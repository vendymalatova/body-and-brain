import React from "react";
import styles from "./Bar.module.css";

const SearchBar = ({ onSearch }: any) => {
  return (
    <form>
      <label className={styles.label} htmlFor="search">
        Label
      </label>
      <div className={styles.bar}>
        <i className="bi bi-person fs-5"></i>
        <input
          id="search"
          className={styles.input}
          type="text"
          placeholder="Seach article..."
          onChange={onSearch}
        />
      </div>
    </form>
  );
};

export default SearchBar;
