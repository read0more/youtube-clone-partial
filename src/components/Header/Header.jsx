import React, { memo } from "react";
import styles from "./Header.module.css";
import SearchForm from "./SearchForm";

const Header = memo(({ handleBackHome, handleSearch }) => {
  return (
    <header className={styles.header}>
      <a href="/">
        <img
          className={styles.logo}
          onClick={handleBackHome}
          src="/images/logo.png"
          alt="logo"
        />
      </a>
      <h1 className={styles.title}>Youtube</h1>
      <SearchForm handleSearch={handleSearch} />
    </header>
  );
});

export default Header;
