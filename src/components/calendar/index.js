import React from "react";
import Item from "../../components/items";

import styles from "./calendar.module.scss";

const DAY = 1000 * 60 * 60 * 24;

export default function Calendar({ items }) {
  console.log(items);
  const [firstDate, setFirstDate] = React.useState(
    new Date(new Date().toISOString().slice(0, 10))
  );
  const [selected, setSelected] = React.useState(() => {
    const date = new Date();
    date.setTime(firstDate.getTime() + 2 * DAY);
    return date;
  });

  const dates = React.useMemo(() => {
    return Array.from({ length: 15 }, (_, i) => {
      const date = new Date();
      date.setTime(firstDate.getTime() + i * DAY);
      return {
        date: date,
        free: !items.some((item) => {
          const itemdate = new Date(item.attributes.date);
          return itemdate.getTime() === date.getTime();
        }),
      };
    });
  }, [firstDate, items]);

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
    setFirstDate((prev) => {
      const d = new Date();
      d.setTime(prev.getTime() + days * DAY);
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
          .map((item, i) => (
            <Item key={i} item={item} />
          ))}
      </div>
    </>
  );
}
