import styles from "./Drawer.module.scss";
import React from "react";
import menu from "./img/menu.png";

function Drawer() {
  const [drawer, setDrawer] = React.useState(false);

  return (
    <div className={styles.drawer} style={drawer ? { display: "flex" } : null}>
      {drawer ? (
        <div className={styles.wrapper} onClick={() => setDrawer(false)}></div>
      ) : null}
      <div
        class={styles.drawerOpener}
        onClick={() => {
          setDrawer(true);
        }}
        style={
          drawer
            ? { width: 400, justifyContent: "flex-start", alignItems: "start" }
            : null
        }
      >
        {!drawer ? (
          <div className={styles.menu}>
            <p className={styles.menuText}>МЕНЮ</p>
            <img className={styles.menuImg} src={menu} alt="" />
          </div>
        ) : (
          <div className={styles.menuOpened}>
            <ul className={styles.menuList}>
              <li className={styles.menuListElem}>
                <div>Войти</div>
              </li>
              <li className={styles.menuListElem}>
                <div>Зарегестрироватся</div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Drawer;
