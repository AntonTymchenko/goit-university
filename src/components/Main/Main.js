import { Section } from "../Section/Section";
import { Title } from "../Title/Title";

import s from "./Main.module.css";
import { ReducerEmployeeSection } from "../../test-examples/ReducerEmployeeSection";
import { StateEmployeeSection } from "../../test-examples/StateEmployeeSection";

function Main() {
  return (
    <div className={s.container}>
      <Title title="Информация об университете" />

      <>
        <Section
          title="Города"
          placeholder="Город"
          formTitle="Добавление города"
          url="cities"
        />
        <Section
          title="Факультеты"
          placeholder="Факультет"
          formTitle="Добавление факультета"
          url="faculties"
        />
      </>

      <p>==============================</p>
      <ReducerEmployeeSection />
      <StateEmployeeSection />
    </div>
  );
}

// class Main extends Component {
//   state = {
//     showSection: true,
//   };

//   render() {
//     const { showSection } = this.state;
// return (
//   <div className={s.container}>
//     <Title title="Информация об университете" />
//     {showSection && <Section />}
//     <br />
//     <Button
//       onClick={() => {
//         this.setState({ showSection: !showSection });
//       }}
//       buttonName="Тогл секции"
//     />
//   </div>
// );
//   }
// }

export { Main };
