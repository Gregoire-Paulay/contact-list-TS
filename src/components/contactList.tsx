import { useState } from "react";
interface Props {
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    set: React.Dispatch<React.SetStateAction<string>>
  ) => void;
}
interface MyContactList {
  userName: string;
  userMail?: string;
}

export const ContactList = (props: Props): JSX.Element => {
  const [ContactList, setContactList] = useState<Array<MyContactList>>([]);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (name) {
      const listCopy = [...ContactList];
      listCopy.push({ userName: name, userMail: email });

      setContactList(listCopy);
      console.log("ContactList ==>", ContactList);
    } else {
      alert("Veuillez remplir le champ pour créer une nouvelle tâche.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {ContactList?.map((contact, index) => {
        // console.log(contact);

        return (
          <div key={index} className="contactList">
            <p>{contact.userName}</p>
            <p>{contact.userMail}</p>
            <button>Delete</button>
          </div>
        );
      })}
      <input
        type="text"
        placeholder="name"
        onChange={(e) => props.handleChange(e, setName)}
        value={name}
      />
      <input
        type="text"
        placeholder="email"
        onChange={(e) => props.handleChange(e, setEmail)}
        value={email}
      />
      <input type="submit" value="Add Contact" />
    </form>
  );
};
