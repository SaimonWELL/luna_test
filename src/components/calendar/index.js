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

function DateBtn({ date: { date, free }, isselected, setSelected, position }) {
  const week = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
  const inview = position >= 0 && position < DATE_NUMBER;
  return (
    <>
      <div
        className={
          isselected
            ? styles.dateBtnContainerSelected
            : free
            ? styles.dateBtnContainer
            : styles.dateBtnContainerHover
        }
        style={{
          left: `${DATE_LEFT_MARGIN + position * (DATE_WIDTH + DATE_MARGIN)}vw`,
          "--date-width": `${DATE_WIDTH}vw`,
          opacity: inview ? 1 : 0,
          ...(position >= -ARR_OFFSET && position < DATE_NUMBER + ARR_OFFSET
            ? {}
            : { display: "none" }),
          "--cursor": inview ? "pointer" : "default",
        }}
      >
        <img src="/img/calendar_luna.svg" alt="" />
        <div
          className={
            isselected
              ? styles.dateContainerSelected
              : free
              ? styles.dateContainer
              : [styles.dateContainer, styles.dateContainerHover].join(" ")
          }
          onClick={() => {
            if (
              !isselected &&
              !free &&
              position >= 0 &&
              position < DATE_NUMBER
            ) {
              setSelected(date);
            }
          }}
        >
          <div className={styles.dateNum}>{date.getDate()}</div>
          <div className={styles.weekDay}>{week[date.getDay()]}</div>
        </div>
      </div>
    </>
  );
}

export default function Calendar({ firstDate, setFirstDate, items }) {
  const [selected, setSelected] = React.useState(() => {
    const date = new Date();
    date.setTime(firstDate.getTime() + 2 * DAY);
    return date;
  });

  const dates = React.useMemo(() => {
    console.log("calc");
    const today = new Date(new Date().toISOString().slice(0, 10));
    return Array.from({ length: DATE_NUMBER + 20 * ARR_OFFSET }, (_, i) => {
      const date = new Date();
      date.setTime(today.getTime() + (i - ARR_OFFSET) * DAY);
      return {
        date: date,
        free: !items.some((item) => {
          const itemdate = new Date(item.attributes.date);
          return itemdate.getTime() === date.getTime();
        }),
      };
    });
  }, [items]);

  function moveDate(days) {
    setFirstDate((prev) => {
      const time = prev.getTime() + days * DAY;

      if (time >= dates[0].date.getTime()) {
        const d = new Date();
        d.setTime(time);
        return d;
      } else {
        return prev;
      }
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
        {(() => {
          return dates.map((date, i) => (
            <DateBtn
              key={i}
              date={date}
              isselected={date.date.getTime() === selected.getTime()}
              setSelected={setSelected}
              position={(date.date.getTime() - firstDate.getTime()) / DAY}
            />
          ));
        })()}
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
