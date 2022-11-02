import React from "react";

import styles from "./calendar.module.scss";

export default function Calendar() {
  const dates = [
    { date: 1, free: false },
    { date: 2, free: false },
    { date: 3, free: false },
    { date: 4, free: false },
    { date: 5, free: false },
    { date: 6, free: true },
    { date: 7, free: false },
    { date: 8, free: false },
    { date: 9, free: true },
    { date: 10, free: true },
    { date: 11, free: false },
    { date: 12, free: false },
    { date: 13, free: false },
    { date: 14, free: false },
    { date: 15, free: true },
  ];

  const [selected, setSelected] = React.useState(3);

  function DateBtn({ date, selected, free }) {
    return selected ? (
      <div className={styles.selectedCalendar}>
        <img
          className={styles.calendarLuna}
          src="/img/calendar_luna.svg"
          width="80px"
          alt=""
        />
        <div className={styles.selectedDate}>{date}</div>
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
        {date}
      </div>
    );
  }

  return (
    <>
      <div className={styles.datesStrip}>
        {dates.map(({ date, free }) => (
          <DateBtn date={date} selected={selected === date} free={free} />
        ))}
      </div>
    </>
  );
}
