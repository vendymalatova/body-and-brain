import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.gridContainer}>
          <div className={styles.aboutAuthor}>
            <h3 className={styles.heading}>About Author</h3>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
              laudantium incidunt molestiae ipsam impedit culpa quos sint. Vel
              est rerum quis, alias sunt possimus numquam quia molestiae
              dignissimos ut assumenda minus aut, recusandae rem nulla? Suscipit
              voluptatum accusamus id vitae assumenda ipsa dolorem corporis
              inventore tempora? Eaque sed provident commodi modi? At ullam
              consequuntur, incidunt ut culpa officiis facilis ad nam impedit
              officia temporibus sint mollitia eligendi aliquam ipsum tempora.
            </p>
          </div>
          <div className={styles.forVisitors}>
            <h3 className={styles.heading}>For visitors</h3>
            <ul className={styles.list}>
              <Link className={styles.listItem} to="/terms-of-service">
                <li className={styles.listItem}>Terms of Service</li>
              </Link>
              <Link className={styles.listItem} to="/privacy-policy">
                <li className={styles.listItem}>Privacy Policy</li>
              </Link>
              <li className={styles.listItem}>Portfolio</li>
            </ul>
          </div>
          <div className={styles.contact}>
            <h3 className={styles.heading}>Contact</h3>
            <ul className={styles.list}>
              <li className={styles.listItem}>You can find me on:</li>
              <li className={styles.listItem}>
                <a
                  target="_blank"
                  href="https://cz.linkedin.com/in/vendula-mal%C3%A1tov%C3%A1-97866b3b1"
                >
                  <i className={`bi bi-linkedin ${styles.icon}`}></i>
                </a>
                <a href="mailto:vendymalatova@gmail.com">
                  <i className={`bi bi-envelope ${styles.icon}`}></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className={styles.textRights}>
        © 2026 Body and Brain. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
