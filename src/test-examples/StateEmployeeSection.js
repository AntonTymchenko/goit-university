import React, { useState } from "react";
// import { useEffect } from "react/cjs/react.development";

const people = [
  { id: 1, name: "Anna", employeed: false },
  { id: 2, name: "Yurii", employeed: false },
  { id: 3, name: "Ivan", employeed: true },
  { id: 4, name: "Iryna", employeed: true },
];

function StateEmployeeSection() {
  const [state, setState] = useState(people);

  const fire = (id) => {
    const newState = state.map((person) => {
      if (person.id === id) {
        person.employeed = false;
      }
      return person;
    });
    setState(newState);
  };
  const hire = (id) => {
    const newState = state.map((person) => {
      if (person.id === id) {
        person.employeed = true;
      }
      return person;
    });
    setState(newState);
  };
  return (
    <div>
      <h3>State Employee status</h3>
      <ul>
        {state.map((person) => (
          <li key={person.id}>
            <span>{person.name}</span>
            {person.employeed ? (
              <>
                <span style={{ color: "green" }}> Hired </span>
                <button
                  onClick={() => {
                    fire(person.id);
                  }}
                >
                  Action: Fire
                </button>
              </>
            ) : (
              <>
                <span style={{ color: "red" }}> Fired </span>
                <button
                  onClick={() => {
                    hire(person.id);
                  }}
                >
                  Action: Hire
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export { StateEmployeeSection };
