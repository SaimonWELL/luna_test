import React from "react";
import Item from "../../components/items";

import styles from "./calendar.module.scss";

export default function Calendar({ items }) {
  const dates = Array.from({ length: 15 }, (_, i) => {
    const date = new Date("2022-10-17");
    date.setTime(date.getTime() + 1000 * 60 * 60 * 24 * i);
    return {
      date: date,
      free: !items.some((item) => {
        const itemdate = new Date(item.attributes.date);
        return itemdate.getTime() === date.getTime();
      }),
    };
  });

  const getFirstDate = () => {
    for (let i = 0; i < dates.length; i++) {
      const date = dates[i];
      // console.log(date);
      if (!date.free) {
        return date.date;
      }
    }
    return new Date("2022-10-17");
  };

  const [selected, setSelected] = React.useState(getFirstDate());

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
      <div className={styles.cardsContainer}>
        {items.map((item) => (
          <Item item={item} />
        ))}
      </div>
    </>
  );
}
