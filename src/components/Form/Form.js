import React from "react";
import { Button } from "../Button/Button";

import s from "./Form.module.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  reset = () => {
    this.setState({
      value: "",
    });
  };

  onSubmit = (e) => {
    const { value } = this.state;
    const { onSubmit } = this.props;
    e.preventDefault();

    onSubmit(value);

    this.reset();
  };

  render() {
    const { value } = this.state;
    const { title, placeholder } = this.props;
    return (
      <form style={{ marginBottom: "32px" }} onSubmit={this.onSubmit}>
        <p>{title}</p>
        <input
          type="text"
          value={value}
          className={s.input}
          placeholder={placeholder}
          onChange={(e) => {
            this.setState({
              value: e.currentTarget.value,
            });
          }}
        />
        <Button type="submit" buttonName="Добавить" disabled={!value} />
      </form>
    );
  }
}

export { Form };
