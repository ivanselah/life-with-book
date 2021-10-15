import React, { useEffect, useRef, useState } from "react";
import styles from "./header.module.css";
import SearchIcon from "@mui/icons-material/Search";

const custom = {
  input: { color: "white" },
};

let navHeight;

const Header = () => {
  const headerRef = useRef();
  const inputRef = useRef();
  const [navScroll, setNavScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 550 / 3) {
      setNavScroll(true);
    } else {
      setNavScroll(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const input = inputRef.current.value;
  };

  const handleChange = (event) => {
    const label = document.querySelector("label");
    if (event.target.value) {
      label.style.opacity = "0";
    } else {
      label.style.opacity = "1";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <header ref={headerRef} className={styles.header}>
      <form
        className={
          navScroll
            ? `${styles.inputBox} ${styles.inputBoxScroll}`
            : `${styles.inputBox}`
        }
        onSubmit={handleSubmit}
      >
        <label className={styles.label} htmlFor="input-hint">
          도서명을 검색하세요
        </label>
        <input
          ref={inputRef}
          onChange={handleChange}
          id="input-hint"
          className={styles.input}
          type="text"
          autoComplete="false"
        />
        <div className={styles.search}>
          <button className={styles.button}>
            <SearchIcon style={custom.input} />
          </button>
        </div>
      </form>
    </header>
  );
};

export default Header;
