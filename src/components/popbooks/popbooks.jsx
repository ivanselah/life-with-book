import React, { useEffect, useRef, useState } from "react";
import styles from "./popbooks.module.css";
import useScrollFadIn from "../useScrollFadeIn";

const PopBooks = () => {
  const animatedItem = useScrollFadIn();

  return (
    <section className={styles.popBooks}>
      <div {...animatedItem} className={styles.title}>
        <p>
          {`참여도서관`}
          <br />
          인기대출 도서
        </p>
        <span className={styles.subtitle}>
          {`순위를 통해`}
          <br />
          {`인기 분야 책들을 확인해보세요`}
        </span>
      </div>
      <div className={styles.slideBox}>
        <div className={styles.slide1}></div>
        <div className={styles.slide2}></div>
        <div className={styles.slide3}></div>
      </div>
    </section>
  );
};

export default PopBooks;
