import React from "react";
import Item from "../../components/items";

import styles from "./calendar.module.scss";

const ARR_OFFSET = 7;
const DAY = 1000 * 60 * 60 * 24;

const DATE_WIDTH = 2.5;
const DATE_MARGIN = 1.8;
const DATE_NUMBER = 15;

const CALENDAR_WIDTH =
  DATE_NUMBER * DATE_WIDTH + (DATE_NUMBER - 1) * DATE_MARGIN;
const DATE_LEFT_MARGIN = (100 - CALENDAR_WIDTH) / 2;

export default function Calendar({ firstDate, setFirstDate, items }) {
  const [selected, setSelected] = React.useState(() => {
    const date = new Date();
    date.setTime(firstDate.getTime() + 2 * DAY);
    return date;
  });

  const dates = React.useMemo(() => {
    return Array.from({ length: DATE_NUMBER }, (_, i) => {
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

  function DateBtn({ date, selected, free, position }) {
    const week = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
    return (
      <div
        className={styles.dateBtnContainer}
        style={{
          left: `${DATE_LEFT_MARGIN + position * (DATE_WIDTH + DATE_MARGIN)}vw`,
          "--date-width": `${DATE_WIDTH}vw`,
        }}
      >
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
            moveDate(-ARR_OFFSET);
          }}
          style={{
            right: `${CALENDAR_WIDTH + DATE_LEFT_MARGIN}vw`,
          }}
        />
        {dates.map(({ date, free }, i) => (
          <DateBtn
            key={date.getTime()}
            date={date}
            selected={selected.getTime() === date.getTime()}
            free={free}
            position={i}
          />
        ))}
        <img
          src="/img/rarr.png"
          alt=">"
          className={styles.rarr}
          onClick={() => {
            moveDate(ARR_OFFSET);
          }}
          style={{
            left: `${CALENDAR_WIDTH + DATE_LEFT_MARGIN}vw`,
          }}
        />
      </div>
      <div className={styles.cardsContainer}>
        {(() => {
          const hidden = items.filter(
            (item) =>
              new Date(item.attributes.date).getTime() < selected.getTime()
          ).length;
          return items.map((item, i) => (
            <Item key={i} item={item} position={i - hidden} />
          ));
        })()}
      </div>
    </>
  );
}
