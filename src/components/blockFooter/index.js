import React, { useRef, useState } from "react";

import styles from "./block.module.scss";

const SPONSORS = [
  "http://персональныеданные.дети/",
  "https://organizations.kultura.mos.ru/organizations/gbuk_gmoskvy_moskovskii_teatr_teatr_luny.html",
  "https://bus.gov.ru/pub/info-card/137565?activeTab=3",
  "http://ag.mos.ru/",
  "http://hrculturemos.ru/bank/",
  "https://historydepositarium.ru/",
  "http://www.lunatheatre.ru/",
  "https://grants.culture.ru/helpful_information/",
  "http://www.lunatheatre.ru/pages/otkrytaya-informaciya",
];

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
          {SPONSORS.map((link, i) => (
            <a href={link}>
              <img src={`/img/sponsor/${i + 1}.png`} alt="" />
            </a>
          ))}
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

