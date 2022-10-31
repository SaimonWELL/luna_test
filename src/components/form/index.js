import React, { useRef, useState } from "react";

import styles from "./form.module.scss";

export default function Form() {
    return (
        <div className={styles.block_form}>
            <div className={styles.block}>
                <h2>Следи за жизнью театра в Telegram</h2>
                <form action="URL">
                    <a href={'https://t.me/lunatheatre'} target={"_blank"} > подписаться</a>
                </form>
            </div>
        </div>

    )
}