import React from "react";

import styles from "./news.module.scss";
import axios from "axios";





export default function News({itemsNews}) {
    console.log(itemsNews)
    const content = [
        {

            id: 1,
            title: 'Живой товар',
            date:'15.10.2022'
        },
        {
            id: 2,
            title: 'Живой товар',
            date:'16.10.2022'
        },
        {

            id: 3,
            title: 'Живой товар',
            date:'15.10.2022'
        },
        {
            id: 4,
            title: 'Живой товар',
            date:'16.10.2022'
        },
        {
            id: 5,
            title: 'Живой товар',
            date:'16.10.2022'
        }
    ]
    return(
        <>
            <div className={styles.header}>
                <div className={styles.title}><p>НОВОСТИ ТЕАТРА</p></div>
                <a href="http://www.lunatheatre.ru/news" target={"_blank"}>
                    <div className={styles.btn}><p>Читать все</p></div>
                </a>
            </div>
            <div className={styles.newsContent}>
                <div className={styles.image}><img src="./img/news_bg.png" alt=""/></div>
                <div className={styles.news}>
                    {itemsNews.map(item => (
                        <div className={styles.news_item} key={item.id}>
                            <p className={styles.item_title}>{item.attributes.title}</p>
                            <p>{item.date}</p>
                        </div>
                    ))}


                </div>
            </div>
        </>
    )
}