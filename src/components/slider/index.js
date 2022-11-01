import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

import styles from "./slider.module.scss";

import "./styles.css";

// import required modules
import { Autoplay, EffectFade } from "swiper";

export default function Slider() {
  const content = [
    {
      id: 1,
      author: "Алёна Захарова",
      title: "Живой товар",
      date: "15",
      month: "Октября",
      webSite: "http://www.lunatheatre.ru/shows/81",
      buy: "",
      image: "/img/slider-bg.png",
    },
    {
      id: 2,
      author: "Алёна Фролова",
      title: "Живой Приз",
      date: "12",
      month: "сентября",
      webSite: "http://www.lunatheatre.ru/shows/81",
      buy: "",
      image: "/img/background city.jpg",
    },
  ];

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
        {content.map((offer) => (
          <SwiperSlide
            key={offer.id}
            style={{
              background: `url('${offer.image}')no-repeat center`,
              backgroundSize: "cover",
            }}
          >
            <div className={styles.slide}>
              <div className={styles.wrapper}>
                <div className={styles.block1}>
                  <p className={styles.author}>{offer.author}</p>
                  <p className={styles.title}>{offer.title}</p>
                  <div className={styles.premiere}>
                    <a href={`${offer.webSite}`} target={"_blank"}>
                      Премьера
                    </a>
                  </div>
                </div>
                <div className={styles.block2}>
                  <p className={styles.date}>{offer.date}</p>
                  <p className={styles.month}>{offer.month}</p>
                  <div className={styles.buy}>
                    <a href={`${offer.buy}`} target={"_blank"}>
                      КУПИТЬ БИЛЕТ
                    </a>
                  </div>
                </div>
              </div>
              <div
                className={styles.startCalendar}
                style={{
                  background: `url('${offer.image}')no-repeat center `,
                  backgroundSize: "cover",
                }}
              >
                <div className={styles.overlay}></div>
              </div>
              <div className={styles.startCalendarText}>
                <h1>ОКТЯБРЬ</h1>
                <div className={styles.buttons}>
                  <a href="http://www.lunatheatre.ru/afisha" target={"_blank"}>
                    <div className={styles.post}>
                      <p>Афиша</p>
                    </div>
                  </a>
                  <a href="http://www.lunatheatre.ru/shows" target={"_blank"}>
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

