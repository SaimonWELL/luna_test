import React from "react";

import styles from "./item.module.scss";

const PLACES = {
  "Малый зал": {
    name: "малый зал",
    text_color: "#FEFFBB",
  },
  "Большой зал": {
    name: "большой зал",
    text_color: "#C5C5C5",
  },
  'Зал "Маленькая Луна"': {
    name: "маленькая луна",
    text_color: "#9FDDFF",
  },
};

export default function Item({ item, width }) {
  const date = new Date(item.attributes.date);
  const place = PLACES[item.attributes.place];
  console.log(item);
  return (
    <>
      <div
        className={styles.mainBlock}
        style={{
          "--item-width": `${width}px`,
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
          />
        </a>
        <div className={styles.meta}>
          <img src="/img/item_curtain.png" alt="" className={styles.curtain} />
          <div className={styles.mid}>
            <div className={styles.date}>
              {date.getDate()}.{date.getMonth()}
            </div>
            <div className={styles.time}>
              {item.attributes.time.slice(0, 5)}
            </div>
            <div className={styles.title}>
              {item.attributes.play.data.attributes.title}
            </div>
          </div>
          <div className={styles.bottom}>
            <div
              className={styles.place}
              style={{
                "--text-color": place.text_color,
              }}
            >
              {place.name}
            </div>
            <div className={styles.buy}>
              <a className={styles.link} href={item.attributes.tickets_link}>
                БИЛЕТЫ
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
