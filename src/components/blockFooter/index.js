import React from "react";

import styles from "./block.module.scss";

const social = ["tg_logo", "vk_logo", "rutube_logo"]
const links = ["https://t.me/lunatheatre", "https://vk.com/teatr_luny", "https://rutube.ru/channel/26047198/"]


export default function Block() {
  return (
    <>
      <div className={styles.block1}>
        <div className={styles.group1}>
          <div className={styles.item1}>
            <h1>Касса</h1>
            <a href="tel:84959531317">+7 (495) 953-13-17</a>
          </div>
          <div className={styles.item2}>
            <p>
              Понедельник–Воскресенье 12:00– 19:30 <br /> Перерыв 15:00–16.00
            </p>
          </div>
        </div>
        <div className={styles.group2}>
          <div className={styles.item1}>
            <h1>Мы в соцсетях</h1>
            {social.map((filename, i) => (
              <a key={i} href={links[i]}>
                <img src={`/img/${filename}.png`} alt={filename} />
              </a>
            ))}
          </div>
        </div>
        <div className={styles.group3}>
          <img src="/img/footer_logo.png" alt="" />
        </div>
      </div>
      <div className={styles.block2}>
        <div className={styles.group2}></div>
      </div>
    </>
  );
}
