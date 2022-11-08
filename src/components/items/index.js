import React from "react";

import styles from "./item.module.scss";

export default function Item({ item, position }) {
  const date = new Date(item.attributes.date);
  return (
    <>
      <div
        className={styles.mainBlock}
        style={{
          left: `${169 + 282 * position}px`,
          opacity: position >= 0 && position < 4 ? 1 : 0,
        }}
      >
        <img
          className={styles.cardImg}
          src={`http://theatre.restomatik.ru:1337${item.attributes.play.data.attributes.cover.data.attributes.formats.small.url}`}
          alt=""
        />
        <h2 className={styles.title}>
          {item.attributes.play.data.attributes.title}
        </h2>
        <div className={styles.datePlace}>
          <div className={styles.date}>
            <span className={styles.number}>
              /{date.getDate()}.{date.getMonth()}
            </span>
            <span className={styles.place}>основная сцена</span>
          </div>
          <div className={styles.time}>
            <span>{item.attributes.time.slice(0, 5)}</span>
            <hr />
          </div>
        </div>
        <a href={item.attributes.tickets_link} className={styles.buy}>
          <p>Билеты</p>
        </a>
      </div>
    </>
  );
}
