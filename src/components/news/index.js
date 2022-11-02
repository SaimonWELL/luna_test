import React from "react";

import styles from "./news.module.scss";

export default function News({ itemsNews }) {
  console.log(itemsNews);
  return (
    <>
      <div className={styles.header}>
        <div className={styles.title}>
          <p>НОВОСТИ ТЕАТРА</p>
        </div>
        <a href="http://www.lunatheatre.ru/news" target={"_blank"}>
          <div className={styles.btn}>
            <p>Читать все</p>
          </div>
        </a>
      </div>
      <div className={styles.newsContent}>
        <div className={styles.image}>
          <img src="/img/news_bg.png" alt="" />
        </div>
        <div className={styles.news}>
          {itemsNews.map((item) => (
            <div className={styles.news_item} key={item.id}>
              <p className={styles.item_title}>
                <a
                  className={styles.newslink}
                  href={`http://www.lunatheatre.ru/news/${item.id}`}
                >
                  {item.attributes.title}
                </a>
              </p>
              <p>{item.attributes.date_str}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

