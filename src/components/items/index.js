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
        <h2 className={styles.title}>
          {item.attributes.play.data.attributes.title}
        </h2>
        <div className={styles.datePlace}>
          <div className={styles.date}>
            <span className={styles.number}>
              /{date.getDate()}.{date.getMonth()}
            </span>
            <span className={styles.place}>{place.name}</span>
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
