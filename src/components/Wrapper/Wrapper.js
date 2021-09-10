import { Sidebar } from "../Sidebar/Sidebar";
import { Main } from "../Main/Main";
import s from "./Wrapper.module.css";

function Wrapper() {
  return (
    <div className={s.wrapper}>
      <Sidebar />
      <Main />
    </div>
  );
}

export { Wrapper };
