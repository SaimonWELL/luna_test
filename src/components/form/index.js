import React, { useRef, useState } from "react";

import styles from "./form.module.scss";

export default function Form() {
    return (
        <div className={styles.block_form}>
            <div className={styles.block}>
                <h2>Будьте в курсе анонсов и новостей</h2>
                <form action="URL">
                    <input type="email"  aria-describedby="emailHelp" placeholder="ваша электронная почта" />
                    <button type="submit" > подписаться</button>
                </form>
            </div>
        </div>

    )
}