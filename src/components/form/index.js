import React, { useRef, useState } from "react";

import styles from "./form.module.scss";

const TG_LINK = "https://t.me/lunatheatre";

export default function Form() {
  return (
    <div className={styles.block_form}>
      <div className={styles.block}>
        <h2>Следи за жизнью театра в Telegram</h2>
        <form action="URL">
          <img
            src="/img/tg.svg"
            width="40px"
            height="40px"
            alt=""
            onClick={() => window.open(TG_LINK)}
          />
          <button onClick={() => window.open(TG_LINK)}>Подписаться</button>
        </form>
      </div>
    </div>
  );
}

