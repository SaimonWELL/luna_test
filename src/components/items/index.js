import React, { useRef, useState } from "react";


import styles from "./item.module.scss";

export default function Item() {
  return (
    <>
      <div className={styles.mainBlock}>
        <img src="/img/item1.png" alt="" />
        <h2 className={styles.title}>Мэри Поппинс - NEXT</h2>
        <div className={styles.datePlace}>
          <div className={styles.date}>
            <span className={styles.number}>/03.10</span>
            <span className={styles.place}>основная сцена</span>
          </div>
          <div className={styles.time}>
            <span>12:30</span>
            <hr />
          </div>
        </div>
        <a href="" className={styles.buy}> <p>Купить </p><div>

        </div></a>
      </div>
    </>
  )
}