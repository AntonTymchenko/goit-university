import { menuConfig } from "../../utils/menu";
import s from "./Menu.module.css";

function Menu() {
  return (
    <div className={s.menu}>
      {menuConfig.map(({ id, name, icon }) => {
        return (
          <div key={id} className={s.menuItem}>
            {icon}
            <span className={s.menuName}>{name}</span>
          </div>
        );
      })}
    </div>
  );
}

export { Menu };
