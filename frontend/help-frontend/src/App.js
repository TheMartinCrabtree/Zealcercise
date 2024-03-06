import React from "react";
import { Main } from "./components/Main";
import "bootstrap/dist/css/bootstrap.min.css";

const users = [
  {
    id: "101",
    firstName: "Joe",
    lastName: "Schmo",
  },
  {
    id: "102",
    firstName: "Adam",
    lastName: "Smasher",
  },
];

function App() {
  return (
    <div>
      <header>Wow! What an amazing helpdesk web app! </header>
      <Main />
    </div>
  );
}

export default App;
