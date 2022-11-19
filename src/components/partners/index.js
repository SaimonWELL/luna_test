import React, { useRef, useState } from "react";

import styles from "./partners.module.scss";

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

export default function Partners() {
  return (
    <div className={styles.block_form}>
      <ul>
        {SPONSORS.map((link, i) => (

          <li key={i} href={link}>
            <img src={`/img/sponsor/${i + 1}.png`} alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
}
