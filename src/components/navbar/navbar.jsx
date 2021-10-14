import React, { useEffect, useRef, useState } from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import styles from "./navbar.module.css";
import stykor_logo from "../../imgs/staykor-logo.png";

const custom = {
  login: { color: "black", padding: "5px 10px" },
};

let navHeight;

function Navbar() {
  const navRef = useRef();
  const [navScroll, setNavScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= navHeight) {
      setNavScroll(true);
    } else {
      setNavScroll(false);
    }
  };

  useEffect(() => {
    navHeight = navRef.current.getBoundingClientRect().height;
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={navRef}
      className={
        navScroll ? `${styles.navbar} ${styles.scrollOK}` : `${styles.navbar}`
      }
    >
      <div className={styles.title}>
        <div>
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <span
              className={
                navScroll
                  ? `${styles.name} ${styles.scrollName}`
                  : `${styles.name}`
              }
            >
              도서관 구석구석
            </span>
          </IconButton>
        </div>
        <Button style={custom.login} color="secondary" size="large">
          <span
            className={
              !navScroll
                ? `${styles.login}`
                : `${styles.login} ${styles.scrollLogin}`
            }
          >
            로그인
          </span>
        </Button>
        <img className={styles.logo} src={stykor_logo} alt="logo" />
      </div>
    </section>
  );
}

export default Navbar;
