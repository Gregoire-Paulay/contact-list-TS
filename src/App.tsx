// import { useState } from "react";
import "./App.css";
import { ContactList } from "./components/contactList";

function App(): JSX.Element {
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    set: React.Dispatch<React.SetStateAction<string>>
  ) => {
    // console.log(event.target.value);
    set(event.target.value);
  };

  return (
    <main>
      <div className="container">
        <h1>Contacts</h1>
        <ContactList handleChange={handleChange} />
      </div>
    </main>
  );
}

export default App;
