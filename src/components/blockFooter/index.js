import React, { useRef, useState } from "react";

import styles from "./block.module.scss";

export default function Block(){
    return(
        <>
            <div className={styles.block1}>
                <div className={styles.group1}>
                    <div className={styles.item1}>
                        <h1>Касса</h1>
                        <a href="tel:84959531317">+7 (495) 953-13-17</a>
                    </div>
                    <div className={styles.item2}>
                        <p>Понедельник–Воскресенье 12:00– 19:30 <br/> Перерыв 15:00–16.00</p>
                    </div>

                </div>
                <div className={styles.group2}>
                    <a href=""><img src="/img/sponsor/1.png" alt=""/></a>
                    <a href=""><img src="/img/sponsor/2.png" alt=""/></a>
                    <a href=""><img src="/img/sponsor/3.png" alt=""/></a>
                    <a href=""><img src="/img/sponsor/4.png" alt=""/></a>
                    <a href=""><img src="/img/sponsor/5.png" alt=""/></a>
                    <a href=""><img src="/img/sponsor/6.png" alt=""/></a>
                    <a href=""><img src="/img/sponsor/7.png" alt=""/></a>
                    <a href=""><img src="/img/sponsor/8.png" alt=""/></a>
                    <a href=""><img src="/img/sponsor/9.png" alt=""/></a>
                </div>
                <div className={styles.group3}><img src="/img/footer_logo.png" alt=""/></div>
            </div>
            <div className={styles.block2}>
                <div className={styles.group2}></div>
            </div>
        </>
    )
}