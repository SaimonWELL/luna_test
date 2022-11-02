import React from "react";

import styles from "./calendar.module.scss";

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
    <div className={styles.dateBtn + (free ? " " + styles.freeDateBtn : "")}>
      {date}
    </div>
  );
}

export default function Calendar() {
  const dates = [
    { date: 1, selected: false, free: false },
    { date: 2, selected: false, free: false },
    { date: 3, selected: true, free: false },
    { date: 4, selected: false, free: false },
    { date: 5, selected: false, free: false },
    { date: 6, selected: false, free: true },
    { date: 7, selected: false, free: false },
    { date: 8, selected: false, free: false },
    { date: 9, selected: false, free: true },
    { date: 10, selected: false, free: true },
    { date: 11, selected: false, free: false },
    { date: 12, selected: false, free: false },
    { date: 13, selected: false, free: false },
    { date: 14, selected: false, free: false },
    { date: 15, selected: false, free: true },
  ];

  return (
    <>
      <div className={styles.datesStrip}>
        {dates.map(({ date, selected, free }) => (
          <DateBtn date={date} selected={selected} free={free} />
        ))}
      </div>
    </>
  );
}
