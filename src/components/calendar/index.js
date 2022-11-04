import React from "react";
import Item from "../../components/items";

import styles from "./calendar.module.scss";

export default function Calendar({ items }) {
  const [selected, setSelected] = React.useState(new Date("2022-10-1"));
  const [firstDate, setFirstDate] = React.useState(
    (() => {
      const date = new Date("2022-10-17");
      date.setTime(date.getTime() - 1000 * 60 * 60 * 24 * (date.getDate() - 1));
      return date;
    })()
  );

  const dates = React.useMemo(() => {
    return Array.from({ length: 15 }, (_, i) => {
      const date = new Date();
      date.setTime(firstDate.getTime() + 1000 * 60 * 60 * 24 * i);
      return {
        date: date,
        free: !items.some((item) => {
          const itemdate = new Date(item.attributes.date);
          return itemdate.getTime() === date.getTime();
        }),
      };
    });
  }, [firstDate]);

  function DateBtn({ date, selected, free }) {
    const week = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
    return (
      <div className={styles.dateBtnContainer}>
        {selected ? <img src="/img/calendar_luna.svg" alt="" /> : null}
        <div
          className={
            selected
              ? styles.dateContainerSelected
              : free
              ? styles.dateContainer
              : [styles.dateContainer, styles.dateContainerHover].join(" ")
          }
          onClick={() => {
            if (!selected && !free) {
              setSelected(date);
            }
          }}
        >
          <div className={styles.dateNum}>{date.getDate()}</div>
          <div className={styles.weekDay}>{week[date.getDay()]}</div>
        </div>
      </div>
    );
  }

  function moveDate(days) {
    console.log(days);
    setFirstDate((prev) => {
      const d = new Date();
      d.setTime(prev.getTime() + days * 1000 * 24 * 60 * 60);
      return d;
    });
  }

  return (
    <>
      <img className={styles.curLeft} src="/img/curtainsLeft.png" alt="" />
      <img className={styles.curRight} src="/img/curtainsRight.png" alt="" />
      <div className={styles.datesStrip}>
        <img
          src="/img/larr.png"
          alt="<"
          className={styles.larr}
          onClick={() => {
            moveDate(-2);
          }}
        />
        {dates.map(({ date, free }) => (
          <DateBtn
            key={date.getTime()}
            date={date}
            selected={selected.getTime() === date.getTime()}
            free={free}
          />
        ))}
        <img
          src="/img/rarr.png"
          alt=">"
          className={styles.rarr}
          onClick={() => {
            moveDate(2);
          }}
        />
      </div>
      <div className={styles.cardsContainer}>
        {items
          .filter(
            (item) =>
              new Date(item.attributes.date).getTime() >= selected.getTime()
          )
          .slice(0, 4)
          .map((item) => (
            <Item key={item.attributes.date} item={item} />
          ))}
      </div>
    </>
  );
}
