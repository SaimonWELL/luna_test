import React from "react";

import styles from "./header.module.scss";

function Header() {
  return (
    <header>
      <div className={styles.header_top}>
        <div className={styles.phone_blind}>
          <a href="tel:+74959531317" className={styles.phone}>
            +7 (495) 953-13-17
          </a>
          <a href="#" className={styles.blind}>
            Версия для слабовидящих
          </a>
        </div>
      </div>
    </header>
  );
}
export default Header;
