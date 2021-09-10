import { useState, useEffect } from "react";
import { useToggle } from "../../hooks/useToggle";
import { Button } from "../Button/Button";
import { Title } from "../Title/Title";
import { Form } from "../Form/Form";
import { Card } from "../Card/Card";
import shortid from "shortid";
import axios from "axios";

const BASE_URL = `http://localhost:3000`;

function Section({ title, placeholder, formTitle, url }) {
  const [showSection, toggleSection] = useToggle(false);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${BASE_URL}/${url}`)
      .then((response) => {
        if (response.status === 200) {
          setItems(response.data);
        }
        if (response.status === 404) {
          throw new Error(response.message || "items - не существует");
        }
      })
      .catch((error) => {
        setError(error.message);
      })
      .then(() => {
        setLoading(false);
      });
  }, []);

  const handleSubmit = (city) => {
    const newCity = {
      id: shortid.generate(),
      name: city,
    };
    if (items.find((item) => item.name === city)) {
      alert("This item is in array");
      return;
    }

    axios.post(`${BASE_URL}/${url}/`, newCity).then((response) => {
      if (response.status === 201) {
        setItems((previtems) => [...previtems, response.data]);
      }
    });
  };
  const handleRemove = (id) => {
    setItems(items.filter((city) => city.id !== id));
    axios
      .delete(`${BASE_URL}/${url}/${id}`)
      .then((response) => {
        if (response.status === 200) {
          console.log(`City with ${id} has been successfully delete`);
        }
      })
      .catch((error) => {});
  };

  return (
    <div style={{ marginTop: "40px", marginBottom: "40px" }}>
      <Title title={title} />
      {loading && <p>Идет загрузка </p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {items.map((item) => {
        return (
          <Card
            name={item.name}
            key={item.id}
            id={item.id}
            buttonName="Удалить"
            handleClick={handleRemove}
          />
        );
      })}
      {showSection && (
        <Form
          onSubmit={handleSubmit}
          title={formTitle}
          placeholder={placeholder}
        />
      )}
      <Button
        onClick={toggleSection}
        buttonName={showSection ? "Скрыть форму" : "Открыть форму"}
      />
    </div>
  );
}
// class Section extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       showed: false,
//       loading: false,
//       items: [],
//       indexDB: null,
//       error: "",
//     };
//   }
//   componentDidMount() {
//     // const localitems = localStorage.getItem("items");
//     // const parseditems = JSON.parse(localitems);
//     // if (parseditems && Array.isArray(parseditems)) {
//     //   this.setState({ items: parseditems });
//     // }
//     this.setState({ loading: true });

// axios
//   .get(`${BASE_URL}/items`)
//   .then((response) => {
//     if (response.status === 200) {
//       this.setState({ items: response.data });
//     }
//     if (response.status === 404) {
//       throw new Error(response.message || "items - не существует");
//     }
//   })
//   .catch((error) => {
//     console.error(error);
//     this.setState({ error: error.message });
//   })
//   .then(() => {
//     this.setState({ loading: false });
//   });
//   }
//   componentDidUpdate(prevProps, prevState) {
//     localStorage.setItem("items", JSON.stringify(this.state.items));
//   }

//   handleRemove = (id) => {
//     this.setState({
//       items: this.state.items.filter((item) => item.id !== id),
//     });

// axios
//   .delete(`${BASE_URL}/items/${id}`)
//   .then((response) => {
//     if (response.status === 200) {
//       console.log(`City with ${id} has been successfully delete`);
//     }
//   })
//   .catch((error) => {});
//   };

//   handleClearAll = () => {
//     localStorage.removeItem("items");
//   };

//   handleSubmit = (city) => {
//     this.setState((prevState) => ({
//       items: [
//         ...prevState.items,
//         {
//           id: shortid.generate(),
//           city,
//         },
//       ],
//     }));
//   };
//   render() {
//     const { items, showed, loading, error } = this.state;
// return (
//   <div>
//     {items.length ? <Title title="Города" /> : null}
//     {loading && <p>Города загружаются </p>}
//     {error && <p style={{ color: "red" }}>{error}</p>}
//     {items.map((item) => {
//       return (
//         <Card
//           name={item.name}
//           key={item.id}
//           id={item.id}
//           buttonName="Удалить"
//           handleClick={this.handleRemove}
//         />
//       );
//     })}
//     {items.length > 5 && (
//       <Button
//         onClick={this.handleClearAll}
//         buttonName="Удалить все города"
//       />
//     )}
//     {showed && <Form onSubmit={this.handleSubmit} />}
//     <Button
//       onClick={() => {
//         this.setState({ showed: !showed });
//       }}
//       buttonName="Добавить город"
//     />
//   </div>
// );
//   }
// }

// function Section() {
//   const [showed, setShowed] = useState(false);
//   return (
//     <>
//       {showed && <p>Форма для добавления города</p>}
//       <Button
//         onClick={() => {
//           console.log("click");
//           setShowed(true);
//         }}
//         buttonName="Добавить город"
//       />
//     </>
//   );
// }

export { Section };
