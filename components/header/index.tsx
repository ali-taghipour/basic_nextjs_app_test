import { request } from "https";

import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.container}>
          <h1 className={styles.title}>
            Yay, Welcome to my site.
          </h1>
        </header>
  )
}