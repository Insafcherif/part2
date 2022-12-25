import "./App.css";
import PersonCard from "./Components/PersonCard";

const people = [
  {
    lastName: "Doe",
    firstName: "Jane",
    age: 45,
    hair: "Black",
  },
  {
    lastName: "Smith",
    firstName: "John",
    age: 88,
    hair: "brown",
  },
  {
    lastName: "Fillmore",
    firstName: "Millard",
    age: 50,
    hair: "Brown",
  },
  {
    lastName: "Smith",
    firstName: "Maria",
    age: 62,
    hair: "Brown",
  },
];

function App() {
  return (
    <div className="App">
      {people.map((personObj, index) => (
        <PersonCard
          key={index}
          lastName={personObj.lastName}
          firstName={personObj.firstName}
          age={personObj.age}
          hair={personObj.hair}
        />
      ))}
    </div>
  );
}

export default App;
