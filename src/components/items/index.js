import React from "react";

import styles from "./item.module.scss";

const PLACES = {
  "Малый зал": {
    name: "малая сцена",
    color: "#f0eab0",
    text_color: "#000000",
  },
  "Большой зал": {
    name: "основная сцена",
    color: "#d9d9d9",
    text_color: "#000000",
  },
  'Зал "Маленькая Луна"': {
    name: "маленькая луна",
    color: "#5f96b9",
    text_color: "#ffffff",
  },
};

export default function Item({ item, width }) {
  const date = new Date(item.attributes.date);
  const place = PLACES[item.attributes.place];
  return (
    <>
      <div
        className={styles.mainBlock}
        style={{
          width: `${width}vw`,
          "--item-width": `${width}vw`,
          "--place-color": place.color,
          "--place-text-color": place.text_color,
        }}
      >
        <a
          href={`http://theatre.restomatik.ru:1337/play/${item.id}`}
          className={styles.imgLink}
        >
          <img
            className={styles.cardImg}
            src={`http://theatre.restomatik.ru:1337${item.attributes.play.data.attributes.cover.data.attributes.formats.small.url}`}
            alt=""
            style={{
              width: `${width}vw`,
            }}
          />
        </a>
        <div className={styles.meta}>
          <img src="/img/item_curtain.png" alt="" className={styles.curtain} />
          <div className={styles.mid}></div>
          <div className={styles.bottom}></div>
        </div>
      </div>
    </>
  );
}
