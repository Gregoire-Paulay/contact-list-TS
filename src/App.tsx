import "./App.css";
import { ContactList } from "./components/contactList";

function App(): JSX.Element {
  return (
    <>
      <div className="container">
        <h1>Contacts</h1>
        <ContactList />
      </div>
    </>
  );
}

export default App;
