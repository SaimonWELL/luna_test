import React from "react";
import Item from "../../components/items";

import styles from "./calendar.module.scss";

export default function Calendar() {
  const dates = Array.from({ length: 15 }, (_, i) => {
    const date = new Date("2022-10-1");
    date.setTime(date.getTime() + 1000 * 60 * 60 * 24 * i);
    return {
      date: date,
      free: false,
    };
  });

  const [selected, setSelected] = React.useState(new Date("2022-10-3"));

  function DateBtn({ date, selected, free }) {
    return selected ? (
      <div className={styles.selectedCalendar}>
        <img
          className={styles.calendarLuna}
          src="/img/calendar_luna.svg"
          width="80px"
          alt=""
        />
        <div className={styles.selectedDate}>{date.getDate()}</div>
      </div>
    ) : (
      <div
        className={styles.dateBtn + (free ? " " + styles.freeDateBtn : "")}
        onClick={() => {
          if (!free) {
            setSelected(date);
          }
        }}
      >
        {date.getDate()}
      </div>
    );
  }

  return (
    <>
      <div className={styles.datesStrip}>
        {dates.map(({ date, free }) => (
          <DateBtn
            key={date.getTime()}
            date={date}
            selected={selected.getTime() == date.getTime()}
            free={free}
          />
        ))}
      </div>
      <Item />
    </>
  );
}
