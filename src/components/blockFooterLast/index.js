import React, { useRef, useState } from "react";

import styles from "./block.module.scss";

export default function LastBlock(){
    return(
        <>
            <div className={styles.wrapper}>
                <div className={styles.group1}>
                    <div className={styles.text1}>
                        <p>Государственное бюджетное учреждение культуры города<br/> Москвы "Московский театр "Театр Луны" (ГБУК г. Москвы<br/> "Московский театр "Театр Луны")<br/>

                            <br/>115184 г. Москва, ул. Малая Ордынка, д. 31, стр. 1<br/>

                            <br/>Детская театральная студия "Маленькая Луна":<br/>
                            115184 г. Москва, ул. Малая Ордынка, д. 33, стр. 1<br/>

                            <br/>Режим работы администрации: понедельник-пятница с 10:30 до 19:00<br/>

                            <br/>ИНН ??????? / ОГРН ?????????</p>
                    </div>
                    <div className={styles.text2}>
                        <a href=""><h3>репертуар</h3></a>
                        <a href=""><p>афиша</p></a>
                        <a href=""><p>спектакли</p></a>
                        <a href=""><p>маленькая луна</p></a>
                    </div>
                    <div className={styles.text3}>
                        <a href=""><h3>О «Луне» </h3></a>
                        <a href=""><p>творческий состав</p></a>
                        <a href=""><p>афиша</p></a>
                        <a href=""><p>Спектакли</p></a>
                        <a href=""><p>маленькая луна</p></a>
                    </div>
                </div>
                <div className={styles.group2}>
                    <p>Театр Луны © Все права защищены. 1994–2022</p>
                    <a href=""><p>Пользовательское соглашение</p></a>
                </div>
            </div>
        </>
    )
}