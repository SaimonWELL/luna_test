import React from "react";

import styles from "./nav.module.scss";



function Nav(){

    return(
        <div className={styles.header_menu}>
            <nav className={styles.menu}>
                <ul className={styles.leftMenu}>
                    <li className={styles.menuItemL}><a href="#">Афиша</a></li>
                    <li className={styles.menuItemL}><a href="#">Спектакли</a></li>
                    <li className={styles.menuItemL}><a href="#">труппа</a></li>
                    <li className={styles.menuItemL}><a href="#">театр</a></li>
                </ul>
                <div className={styles.logo}><a href="#" >
                    <img className={styles.test} src="/img/moon_logo.png" alt="" width={'124px'} height={'124px'} />
                    <img className={styles.text_logo} id={'href'} src="/img/text_logo.png" alt="" width={'128px'} height={'90px'} />

                </a></div>
                <ul className={styles.rightMenu}>
                    <li className={styles.menuItemR}><a href="#">Новости</a></li>
                    <li className={styles.menuItemR}><a href="#">Пресса</a></li>
                    <li className={styles.menuItemR}><a href="#">Контакты</a></li>
                </ul>
            </nav>
        </div>
    )
}
export default Nav;