import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

import styles from "./slider.module.scss";

import "./styles.css";

// import required modules
import { Autoplay, EffectFade } from "swiper";

const MONTHS = [
  "ЯНВАРЬ",
  "ФЕВРАЛЬ",
  "МАРТ",
  "АПРЕЛЬ",
  "МАЙ",
  "ИЮНЬ",
  "ИЮЛЬ",
  "АВГУСТ",
  "СЕНТЯБРЬ",
  "ОКТЯБРЬ",
  "НОЯБРЬ",
  "ДЕКАБРЬ",
];

export default function Slider({ items, firstDate }) {
  function isPremiere(offer) {
    if (offer.attributes.play.data.attributes.isPremiere) {
      return (
        <div className={styles.premiere}>
          <a href={offer.webSite}>Премьера</a>
        </div>
      );
    }
  }
  return (
    <>
      <Swiper
        effect={"fade"}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay]}
        className="mySwiper"
      >
        {items.map((offer) => (
          <SwiperSlide
            key={offer.id}
            style={{
              background: `url('http://theatre.restomatik.ru:1337${offer.attributes.play.data.attributes.cover.data.attributes.url}')no-repeat center`,
              backgroundColor: "#000000",
            }}
          >
            <div className={styles.slide}>
              <div className={styles.wrapper}>
                <div className={styles.block1}>
                  <p className={styles.author}>
                    {
                      offer.attributes.play.data.attributes.director.data
                        .attributes.fullname
                    }
                  </p>
                  <p className={styles.title}>
                    {offer.attributes.play.data.attributes.title}
                  </p>
                  {isPremiere(offer)}
                </div>
                <div className={styles.block2}>
                  <p className={styles.date}>
                    {offer.attributes.date_str.split(" ")[0]}
                  </p>
                  <p className={styles.month}>
                    {offer.attributes.date_str.split(" ")[1]}
                  </p>
                  <div className={styles.buy}>
                    <a href={`${offer.attributes.tickets_link}`}>
                      КУПИТЬ БИЛЕТ
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.blurContainer}>
                <div
                  className={styles.startCalendar}
                  style={{
                    background: `url('http://theatre.restomatik.ru:1337${offer.attributes.play.data.attributes.cover.data.attributes.url}')no-repeat center `,
                    backgroundSize: "cover",
                  }}
                >
                  <div className={styles.overlay}></div>
                </div>
              </div>
              <div className={styles.startCalendarText}>
                <h1>{MONTHS[firstDate.getMonth()]}</h1>
                <div className={styles.buttons}>
                  {/* <a href="http://www.lunatheatre.ru/afisha">
                    <div className={styles.post}>
                      <p>Афиша</p>
                    </div>
                  </a> */}
                  <a href="http://www.lunatheatre.ru/shows">
                    <div className={styles.allPost}>
                      <p>Все спектакли</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
