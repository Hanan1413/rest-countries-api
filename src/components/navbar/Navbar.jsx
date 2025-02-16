import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <nav>
      <div className={styles.navItem}>
        <div>
          <h2>Where in the world?</h2>
        </div>
      </div>
      <div className={`${styles.navItem} ${styles.buttons}`}>
        <svg
          className= {styles.mode}
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >

          <path d="M10 4c4.41 0 8 3.59 8 8s-3.59 8-8 8c-.34 0-.68-.02-1.01-.07C10.9 17.77 12 14.95 12 12s-1.1-5.77-3.01-7.93C9.32 4.02 9.66 4 10 4m0-2c-1.82 0-3.53.5-5 1.35C7.99 5.08 10 8.3 10 12s-2.01 6.92-5 8.65C6.47 21.5 8.18 22 10 22c5.52 0 10-4.48 10-10S15.52 2 10 2z"></path>
        </svg>
        <button className={styles.btn}>Dark Mode</button>         

      </div>
    </nav>
  );
};

export default Navbar;
