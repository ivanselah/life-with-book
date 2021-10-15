import React from "react";
import styles from "./introOfBooks.module.css";
import useScrollFadIn from "../useScrollFadeIn";
import { nowBestSeller, nowAudioSeller, nowFantasySeller } from "../variable";

const IntroOfBooks = () => {
  const animatedItem = useScrollFadIn();

  return (
    <section className={styles.introOfBooks}>
      <h1 className={styles.srOnly}>테마별 베스트 도서 소개</h1>
      <div {...animatedItem} className={styles.title}>
        <p>
          {`싹 다 무제한`}
          <br />
          9,900원
        </p>
        <span className={styles.subtitle}>
          {`10년치 베스트셀러`}
          <br />
          {`신간 오디오북 장르 소설까지`}
        </span>
      </div>
      <div className={styles.bestSeller}>
        <h1>지금 서점 베스트셀러</h1>
        <ul className={styles.bestList}>
          {nowBestSeller.map((bestSeller, index) => {
            return (
              <li key={index} className={styles.bestItem}>
                <div className={styles.bestData}>
                  <img src={bestSeller.img} alt={bestSeller.title} />
                  <strong>{bestSeller.title}</strong>
                  <div className={styles.mata}>
                    <p>{bestSeller.author}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.bestSeller}>
        <h1>오디오북 BEST</h1>
        <ul className={styles.bestList}>
          {nowAudioSeller.map((bestSeller, index) => {
            return (
              <li key={index} className={styles.bestItem}>
                <div className={styles.bestData}>
                  <img src={bestSeller.img} alt={bestSeller.title} />
                  <strong>{bestSeller.title}</strong>
                  <div className={styles.mata}>
                    <p>{bestSeller.author}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.bestSeller}>
        <h1>판타지 무협 로맨스</h1>
        <ul className={styles.bestList}>
          {nowFantasySeller.map((bestSeller, index) => {
            return (
              <li key={index} className={styles.bestItem}>
                <div className={styles.bestData}>
                  <img src={bestSeller.img} alt={bestSeller.title} />
                  <strong>{bestSeller.title}</strong>
                  <div className={styles.mata}>
                    <p>{bestSeller.author}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default IntroOfBooks;
