import React, { useEffect, useRef, useState } from "react";
import styles from "./popbooks.module.css";
import useScrollFadIn from "../useScrollFadeIn";

const PopBooks = ({ BBooks, loading }) => {
  const animatedItem = useScrollFadIn();

  console.log(BBooks);

  return (
    <section className={styles.popBooks}>
      <h1 className={styles.srOnly}>참여도서관 인기대출도서 순위</h1>
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
      {!loading && (
        <ol className={styles.bestList}>
          {BBooks.map((book, index) => {
            return (
              <li key={index} className={styles.bookBox}>
                <img
                  className={styles.img}
                  src={book.BOOK_IMAGE_URL}
                  alt={book.BOOK_NM_INFO}
                />
              </li>
            );
          })}
        </ol>
      )}
    </section>
  );
};

export default PopBooks;
