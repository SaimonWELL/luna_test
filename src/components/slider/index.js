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

export default function Slider({ itemsOld, firstDate }) {
  let items = 
    [
      {
        "id": 6,
        "attributes": {
          "createdAt": "2022-11-05T21:38:56.269Z",
          "updatedAt": "2022-11-05T21:40:01.112Z",
          "publishedAt": "2022-11-05T21:40:01.108Z",
          "date": "2022-11-20",
          "date_str": "20 ноября",
          "place": "Зал \"Маленькая Луна\"",
          "time": "15:00:00",
          "tickets_link": "http://www.lunatheatre.ru/tl/index.php?performance_id=4673263",
          "play": {
            "data": {
              "id": 5,
              "attributes": {
                "title": "Наш 9 «Б»",
                "body": "Будущее светло и прекрасно!\n \nПостановка рассказывает о героизме мальчишек и девчонок 40-х годов прошлого столетия, судьбы которых оборвала война. Они дружили, влюблялись, строили планы, но с тревожным голосом Левитана прервалась их счастливая Юность. И они ушли на фронт, чтобы ценой своей жизни подарить потомкам светлое и прекрасное будущее, такое, о котором мечтали сами, но так и не обрели.\n\nАвтор и режиссер-постановщик — Елена Лазурина\nСценография — Константин Розанов\nХудожник по костюмам — Анастасия Проханова\nХудожник по свету — Руслан Зинатуллин\nБалетмейстер — Екатерина Партугимова\nМузыкальное оформление — Игорь Заворотний\nПедагог по вокалу — Анастасия Савицкая\nПродолжительность: 1 час 10 мин. (без антракта)\nПремьера: 9 мая 2018 года\nЗал \"Маленькая Луна\"\n12+",
                "createdAt": "2022-11-05T21:29:16.794Z",
                "updatedAt": "2022-11-05T21:29:27.981Z",
                "publishedAt": "2022-11-05T21:29:27.977Z",
                "isPremiere": false,
                "director": {
                  "data": {
                    "id": 5,
                    "attributes": {
                      "fullname": "Елена Лазурина",
                      "createdAt": "2022-11-05T21:28:11.661Z",
                      "updatedAt": "2022-11-05T21:28:13.616Z",
                      "publishedAt": "2022-11-05T21:28:13.613Z"
                    }
                  }
                },
                "cover": {
                  "data": {
                    "id": 16,
                    "attributes": {
                      "name": "nash_9b_092022.jpg",
                      "alternativeText": "nash_9b_092022.jpg",
                      "caption": "nash_9b_092022.jpg",
                      "width": 1300,
                      "height": 900,
                      "formats": {
                        "large": {
                          "ext": ".jpg",
                          "url": "/uploads/large_nash_9b_092022_f150ddcc0c.jpg",
                          "hash": "large_nash_9b_092022_f150ddcc0c",
                          "mime": "image/jpeg",
                          "name": "large_nash_9b_092022.jpg",
                          "path": null,
                          "size": 61.7,
                          "width": 1000,
                          "height": 692
                        },
                        "small": {
                          "ext": ".jpg",
                          "url": "/uploads/small_nash_9b_092022_f150ddcc0c.jpg",
                          "hash": "small_nash_9b_092022_f150ddcc0c",
                          "mime": "image/jpeg",
                          "name": "small_nash_9b_092022.jpg",
                          "path": null,
                          "size": 20.64,
                          "width": 500,
                          "height": 346
                        },
                        "medium": {
                          "ext": ".jpg",
                          "url": "/uploads/medium_nash_9b_092022_f150ddcc0c.jpg",
                          "hash": "medium_nash_9b_092022_f150ddcc0c",
                          "mime": "image/jpeg",
                          "name": "medium_nash_9b_092022.jpg",
                          "path": null,
                          "size": 39.26,
                          "width": 750,
                          "height": 519
                        },
                        "thumbnail": {
                          "ext": ".jpg",
                          "url": "/uploads/thumbnail_nash_9b_092022_f150ddcc0c.jpg",
                          "hash": "thumbnail_nash_9b_092022_f150ddcc0c",
                          "mime": "image/jpeg",
                          "name": "thumbnail_nash_9b_092022.jpg",
                          "path": null,
                          "size": 5.7,
                          "width": 225,
                          "height": 156
                        }
                      },
                      "hash": "nash_9b_092022_f150ddcc0c",
                      "ext": ".jpg",
                      "mime": "image/jpeg",
                      "size": 98.54,
                      "url": "/uploads/nash_9b_092022_f150ddcc0c.jpg",
                      "previewUrl": null,
                      "provider": "local",
                      "provider_metadata": null,
                      "createdAt": "2022-11-05T21:29:02.555Z",
                      "updatedAt": "2022-11-05T21:29:02.555Z"
                    }
                  }
                }
              }
            }
          }
        }
      },
      {
        "id": 4,
        "attributes": {
          "createdAt": "2022-10-23T13:39:33.861Z",
          "updatedAt": "2022-11-05T21:37:21.597Z",
          "publishedAt": "2022-10-30T06:46:09.157Z",
          "date": "2022-11-23",
          "date_str": "23 ноября",
          "place": "Большой зал",
          "time": "19:00:00",
          "tickets_link": "http://www.lunatheatre.ru/tl/index.php?performance_id=4599296",
          "play": {
            "data": {
              "id": 3,
              "attributes": {
                "title": "Королева",
                "body": "_«Королевы никогда не расстраиваются, когда им грустно, они просто кого-то казнят»._\n\nДействие спектакля происходит в начале XIV века во Франции на фоне заката династии Капетингов. Париж и вся страна оказались под властью Маргариты Бургундской, движимой низменными страстями и пороками. Тайны, преступления, любовь и страсть соединили жизни людей из разных сословий — их судьбы переплелись в один кровавый клубок. Режиссер Дарья Попова на примере главной героини, королевы Маргариты Бургундской, исследует природу женщины, получившей безграничную власть.\n \nПо ходу действия трансформирующаяся декорация переносит зрителей то в королевские покои Лувра, то в мрачные залы Нельской башни, то в зловонные таверны и на шумные улицы Парижа. Пластические и танцевальные номера, автором которых является сама режиссер, представляют собой стилизацию средневековых танцев. Для постановки сценических боев были приглашены профессиональный каскадёр Юрий Сысоев, а также известный дуэт Олега и Виктора Мазуренко — блестящих постановщиков фехтования на мечах и шпагах. Ктюмы и украшения были разработаны сценографом и художником по костюмам Светланой Литвиновой с учетом их исторической достоверности. В спектакле звучит аутентичная музыка западноевропейского Средневековья в сочетании с современными авторскими композициями и аранжировками.",
                "createdAt": "2022-10-23T13:30:04.583Z",
                "updatedAt": "2022-11-05T21:26:45.266Z",
                "publishedAt": "2022-10-23T13:30:18.749Z",
                "isPremiere": false,
                "director": {
                  "data": {
                    "id": 3,
                    "attributes": {
                      "fullname": "Дарья Попова",
                      "createdAt": "2022-10-23T13:30:23.968Z",
                      "updatedAt": "2022-10-23T13:30:36.459Z",
                      "publishedAt": "2022-10-23T13:30:25.417Z"
                    }
                  }
                },
                "cover": {
                  "data": {
                    "id": 15,
                    "attributes": {
                      "name": "koroleva_sait_new_new_polosuhin.jpg",
                      "alternativeText": "koroleva_sait_new_new_polosuhin.jpg",
                      "caption": "koroleva_sait_new_new_polosuhin.jpg",
                      "width": 1300,
                      "height": 900,
                      "formats": {
                        "large": {
                          "ext": ".jpg",
                          "url": "/uploads/large_koroleva_sait_new_new_polosuhin_31885ff367.jpg",
                          "hash": "large_koroleva_sait_new_new_polosuhin_31885ff367",
                          "mime": "image/jpeg",
                          "name": "large_koroleva_sait_new_new_polosuhin.jpg",
                          "path": null,
                          "size": 161.36,
                          "width": 1000,
                          "height": 692
                        },
                        "small": {
                          "ext": ".jpg",
                          "url": "/uploads/small_koroleva_sait_new_new_polosuhin_31885ff367.jpg",
                          "hash": "small_koroleva_sait_new_new_polosuhin_31885ff367",
                          "mime": "image/jpeg",
                          "name": "small_koroleva_sait_new_new_polosuhin.jpg",
                          "path": null,
                          "size": 46.18,
                          "width": 500,
                          "height": 346
                        },
                        "medium": {
                          "ext": ".jpg",
                          "url": "/uploads/medium_koroleva_sait_new_new_polosuhin_31885ff367.jpg",
                          "hash": "medium_koroleva_sait_new_new_polosuhin_31885ff367",
                          "mime": "image/jpeg",
                          "name": "medium_koroleva_sait_new_new_polosuhin.jpg",
                          "path": null,
                          "size": 95.72,
                          "width": 750,
                          "height": 519
                        },
                        "thumbnail": {
                          "ext": ".jpg",
                          "url": "/uploads/thumbnail_koroleva_sait_new_new_polosuhin_31885ff367.jpg",
                          "hash": "thumbnail_koroleva_sait_new_new_polosuhin_31885ff367",
                          "mime": "image/jpeg",
                          "name": "thumbnail_koroleva_sait_new_new_polosuhin.jpg",
                          "path": null,
                          "size": 11.12,
                          "width": 225,
                          "height": 156
                        }
                      },
                      "hash": "koroleva_sait_new_new_polosuhin_31885ff367",
                      "ext": ".jpg",
                      "mime": "image/jpeg",
                      "size": 263.86,
                      "url": "/uploads/koroleva_sait_new_new_polosuhin_31885ff367.jpg",
                      "previewUrl": null,
                      "provider": "local",
                      "provider_metadata": null,
                      "createdAt": "2022-11-05T21:26:42.252Z",
                      "updatedAt": "2022-11-05T21:26:42.252Z"
                    }
                  }
                }
              }
            }
          }
        }
      },
      {
        "id": 11,
        "attributes": {
          "createdAt": "2022-11-05T21:41:55.082Z",
          "updatedAt": "2022-11-05T21:41:55.692Z",
          "publishedAt": "2022-11-05T21:41:55.689Z",
          "date": "2022-11-30",
          "date_str": "30 ноября",
          "place": "Малый зал",
          "time": "19:00:00",
          "tickets_link": "http://www.lunatheatre.ru/tl/index.php?performance_id=4599299",
          "play": {
            "data": {
              "id": 2,
              "attributes": {
                "title": "Баба Шанель",
                "body": "Возраст берёт своё, но душа совсем юная. Как быть? Действовать! Нужно избавляться от одиночества. Только какими методами?\nУчастницы коллектива народной песни «Наитие» отмечают первый юбилей своего ансамбля. Их пятеро, и им от 70 до 90 лет. Они танцуют, поют, юморят, но появляется молодой худрук ансамбля с новой участницей – «девушкой» 55 лет. Ревность и страх потерять своё место в коллективе превращают милых старушек в настоящих фурий: они отчаянно борются за свой шанс «остаться на плаву»… \nВ спектакле играют молодые актрисы, мастерски перевоплощающиеся в своих «возрастных» героинь. Постановка современна и динамична. Зрители всех возрастов еще раз убедятся, что дата в паспорте – не помеха для насыщенной и интересной жизни!",
                "createdAt": "2022-10-23T13:19:41.294Z",
                "updatedAt": "2022-11-05T21:23:42.027Z",
                "publishedAt": "2022-10-30T06:14:01.145Z",
                "isPremiere": true,
                "director": {
                  "data": {
                    "id": 2,
                    "attributes": {
                      "fullname": "Наталья Когут",
                      "createdAt": "2022-10-23T13:19:52.173Z",
                      "updatedAt": "2022-10-23T13:19:58.984Z",
                      "publishedAt": "2022-10-23T13:19:53.086Z"
                    }
                  }
                },
                "cover": {
                  "data": {
                    "id": 14,
                    "attributes": {
                      "name": "babashanel_092022.jpg",
                      "alternativeText": "babashanel_092022.jpg",
                      "caption": "babashanel_092022.jpg",
                      "width": 1300,
                      "height": 900,
                      "formats": {
                        "large": {
                          "ext": ".jpg",
                          "url": "/uploads/large_babashanel_092022_fa7c2536c5.jpg",
                          "hash": "large_babashanel_092022_fa7c2536c5",
                          "mime": "image/jpeg",
                          "name": "large_babashanel_092022.jpg",
                          "path": null,
                          "size": 89.28,
                          "width": 1000,
                          "height": 692
                        },
                        "small": {
                          "ext": ".jpg",
                          "url": "/uploads/small_babashanel_092022_fa7c2536c5.jpg",
                          "hash": "small_babashanel_092022_fa7c2536c5",
                          "mime": "image/jpeg",
                          "name": "small_babashanel_092022.jpg",
                          "path": null,
                          "size": 32.4,
                          "width": 500,
                          "height": 346
                        },
                        "medium": {
                          "ext": ".jpg",
                          "url": "/uploads/medium_babashanel_092022_fa7c2536c5.jpg",
                          "hash": "medium_babashanel_092022_fa7c2536c5",
                          "mime": "image/jpeg",
                          "name": "medium_babashanel_092022.jpg",
                          "path": null,
                          "size": 59.11,
                          "width": 750,
                          "height": 519
                        },
                        "thumbnail": {
                          "ext": ".jpg",
                          "url": "/uploads/thumbnail_babashanel_092022_fa7c2536c5.jpg",
                          "hash": "thumbnail_babashanel_092022_fa7c2536c5",
                          "mime": "image/jpeg",
                          "name": "thumbnail_babashanel_092022.jpg",
                          "path": null,
                          "size": 8.82,
                          "width": 225,
                          "height": 156
                        }
                      },
                      "hash": "babashanel_092022_fa7c2536c5",
                      "ext": ".jpg",
                      "mime": "image/jpeg",
                      "size": 127.76,
                      "url": "/uploads/babashanel_092022_fa7c2536c5.jpg",
                      "previewUrl": null,
                      "provider": "local",
                      "provider_metadata": null,
                      "createdAt": "2022-11-05T21:23:38.249Z",
                      "updatedAt": "2022-11-05T21:23:38.249Z"
                    }
                  }
                }
              }
            }
          }
        }
      }
    ]
  
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
                  <a href="http://www.lunatheatre.ru/afisha">
                    <div className={styles.post}>
                      <p>Афиша</p>
                    </div>
                  </a>
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
