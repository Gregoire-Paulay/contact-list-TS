import { useState } from "react";

const handleChange = (
  event: React.ChangeEvent<HTMLInputElement>,
  set: React.Dispatch<React.SetStateAction<string>>
) => {
  set(event.target.value);
};
interface MyContactList {
  userName: string;
  userMail?: string;
  id: string;
}

const randomId = () => {
  return Math.random().toString(36).substring(7);
};

export const ContactList = (): JSX.Element => {
  const [ContactList, setContactList] = useState<Array<MyContactList>>([
    { userName: "Gregoire", userMail: "greg@mail.com", id: "12" },
    { userName: "Rytlock", userMail: "rytlock@mail.com", id: "123" },
    { userName: "Eir", id: "124" },
  ]);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (name) {
      const listCopy = [...ContactList];
      listCopy.push({ userName: name, userMail: email, id: randomId() });
      setContactList(listCopy);
    } else {
      alert("Veuillez renseignez le nom pour ajouter un contact.");
    }

    // console.log("ContactList ==>", ContactList);
  };

  const handleDelete = (index: any) => {
    const listCopy = [...ContactList];
    listCopy.splice(index, 1);
    setContactList(listCopy);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="contactList">
        {ContactList?.map((contact, index) => {
          return (
            <div key={contact.id} className="contact">
              <div>
                <h2>{contact.userName}</h2>
                <p>{contact.userMail}</p>
              </div>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          );
        })}
      </div>

      <div className="inputUser">
        <input
          type="text"
          placeholder="name"
          onChange={(e) => handleChange(e, setName)}
          value={name}
        />
        <input
          type="text"
          placeholder="email"
          onChange={(e) => handleChange(e, setEmail)}
          value={email}
        />
        <input type="submit" value="Add Contact" className="addList" />
      </div>
    </form>
  );
};
