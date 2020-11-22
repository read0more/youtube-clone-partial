import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import React, { memo } from "react";
import styles from "./Header.module.css";
import SearchForm from "./SearchForm";

const Header = memo(({ handleBackHome, handleSearch }) => {
  return (
    <header className={styles.header}>
      <a href="/">
        <FontAwesomeIcon
          icon={faYoutube}
          className={styles.logo}
          onClick={handleBackHome}
        />
      </a>
      <span className={styles.title}>Youtube</span>
      <SearchForm handleSearch={handleSearch} />
    </header>
  );
});

export default Header;
