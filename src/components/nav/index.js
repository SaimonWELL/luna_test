import React from "react";

import styles from "./nav.module.scss";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <a href="http://www.lunatheatre.ru/afisha">Афиша</a>
        </li>
        <li>
          <a href="http://www.lunatheatre.ru/shows">Спектакли</a>
        </li>
        <li>
          <a href="http://www.lunatheatre.ru/actors">труппа</a>
        </li>
        <li>
          <a href="http://www.lunatheatre.ru/pages/o-lune">театр</a>
        </li>
        <li>
          <a href="http://www.lunatheatre.ru/news">Новости</a>
        </li>
        <li>
          <a href="http://www.lunatheatre.ru/smi">Пресса</a>
        </li>
        <li>
          <a href="http://www.lunatheatre.ru/pages/kontakty">Контакты</a>
        </li>
      </ul>
      <div className={styles.logoContainer}>
        <div
          className={styles.back_elipse}
        />
        <img
          className={styles.moon_logo}
          src="/img/moon_logo.png"
          alt=""
          width="227px"
          height="241px"
        />
        <img
          className={styles.text_logo}
          id={"href"}
          src="/img/text_logo.png"
          alt=""
          width="260px"
          height="175px"
        />
      </div>
    </nav>
  );
}
export default Nav;
