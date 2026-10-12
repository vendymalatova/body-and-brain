import React, { useEffect } from "react";
import styles from "./CookieBar.module.css";
import { useState } from "react";

const CookieBar = () => {
  const [visibility, setVisibility] = useState(true);

  useEffect(() => {
    const cookieBox = localStorage.getItem("cookieBoxHidden");
    if (cookieBox === "yes") setVisibility(false);
  }, []);

  const handleClick = () => {
    localStorage.setItem("cookieBoxHidden", "yes");
    setVisibility(false);
  };

  if (visibility)
    return (
      <div className={styles.cookieBar}>
        <h2 className={styles.title}>We value your privacy</h2>
        <p className={styles.text}>
          We use cookies to improve your experience on our website. By clicking
          "Understood", you agree to our use of cookies.{" "}
          <a className={styles.link} href="/cookie-policy">
            Privacy Policy
          </a>
        </p>
        <div className={styles.buttonContainer}>
          <button className="btn btn-secondary" onClick={handleClick}>
            Understood
          </button>
        </div>
      </div>
    );
};

export default CookieBar;
