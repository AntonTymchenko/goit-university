import s from "./Sidebar.module.css";
import { Menu } from "../Menu/Menu";

function Sidebar() {
  return (
    <div className={s.sidebar}>
      <Menu />
    </div>
  );
}

export { Sidebar };
