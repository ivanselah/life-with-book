import React from "react";
import { useSpring, animated } from "react-spring";
import styles from "./slidebooks.module.css";

const SlideBooks = () => {
  const props = useSpring({
    to: {
      transform: "translateY(0)",
      opacity: 1,
      transition: "all .5ms ease-in-out",
      transitionTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
      transitionDuration: "1s",
    },
    from: { transform: "translateY(-300px)", opacity: 0 },
  });
  return (
    <section className={styles.slideBooks}>
      <h1 className={styles.srOnly}>베스트셀러 이미지 슬라이드</h1>
      <animated.div style={props} className={styles.title}>
        <p>
          {`당신을 기다리는`}
          <br />
          베스트셀러 도서
        </p>
        <span className={styles.subtitle}>
          {`책과 함께라면`}
          <br />좀 더 멋진 일상을 만들 수 있을 거에요
        </span>
      </animated.div>
      <div className={styles.slideBox} aria-label="베스트셀러 슬라이드">
        <div className={styles.slide1}></div>
        <div className={styles.slide2}></div>
        <div className={styles.slide3}></div>
      </div>
    </section>
  );
};

export default SlideBooks;
