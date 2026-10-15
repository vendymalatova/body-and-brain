import React from "react";
import styles from "./Page404.module.css";

const Page404 = () => {
  return (
    <div className={styles.container}>
      <div>
        <span className={`badge text-bg ${styles.badge}`}>Page not found</span>
      </div>
      <h1 className={styles.code}>404</h1>
      <p className={styles.message}>
        Oops, sorry. The page you are looking for does not exist.
      </p>
      <button
        className={`btn btn-secondary ${styles.button}`}
        onClick={() => window.history.back()}
      >
        Go back
      </button>
    </div>
  );
};

export default Page404;
