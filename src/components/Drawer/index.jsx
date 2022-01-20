import styles from "./Drawer.module.scss";
import React from "react";
import menu from "./img/menu.png";

const Drawer = () => {
  return (
    <div className={styles.drawer}>
      <div className={styles.menu}>
        <p className={styles.menuText}>МЕНЮ</p>
        <img className={styles.menuImg} src={menu} alt="" />
      </div>
    </div>
  );
};

export default Drawer;
