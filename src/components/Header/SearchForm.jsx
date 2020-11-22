import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React, { memo, createRef } from "react";
import styles from "./SearchForm.module.css";

const SearchForm = memo(({ handleSearch }) => {
  const ref = createRef();
  const onSubmit = (e) => {
    e.preventDefault();
    handleSearch(ref.current.value);
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <input ref={ref} className={styles.input} placeholder="Search..." />
      <button className={styles.button}>
        <FontAwesomeIcon icon={faSearch} className={styles.icon} />
      </button>
    </form>
  );
});

export default SearchForm;
