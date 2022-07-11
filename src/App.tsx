import { Greet } from "./components/Greet/Greet";
import { Person } from "./components/Person/Person";
import { PersonList } from "./components/PersonList/PersonList";
import { Status } from "./components/Status/Status";
import { Heading } from "./components/Heading/Heading";
import { Oscar } from "./components/Oscar/Oscar";
import { Button } from "./components/Button/Button";
import { Input } from "./components/Input/Input";
import { Container } from "./components/Container/Container";

import "./App.css";

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
      <Greet name="Roma" isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="loading" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio</Heading>
      </Oscar>
      <Button
        handleClick={(event, id) => {
          console.log("Button clicked", event, id);
        }}
      />
      <Input
        value=""
        handleChange={(event) => {
          console.log(event);
        }}
      />
      <Container styles={{ border: "1px solid black", padding: "1rem" }} />
    </div>
  );
};

export default App;
