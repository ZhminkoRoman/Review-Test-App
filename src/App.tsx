import React from "react";
import { Greet } from "./components/Greet/Greet";
import { Person } from "./components/Person/Person";
import "./App.css";
import { PersonList } from "./components/PersonList/PersonList";

const App = () => {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };

  const nameList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Princess",
      last: "Diana",
    },
  ];

  return (
    <div className="App">
      <Greet name="Roma" messageCount={10} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  );
};

export default App;
