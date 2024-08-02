import { useEffect, useState } from "react";
import { ContactCard } from "../ContactCard";
import { deleteContact, fetchContacts } from "../../api/ContactsApi";
import styles from "./ContactList.module.scss";

export const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts()
      .then((data) => setContacts(data))
      .catch((error) => {
        console.log("Failed to fetch contacts");
      });
  }, []);

  const handleDelete = (id) => {
    deleteContact(id)
      .then(() => {
        setContacts((prevContacts) =>
          prevContacts.filter((contact) => contact.id !== id)
        );
        console.log("Contact deleted successfully");
      })
      .catch((error) => {
        console.log("Failed to delete contact");
      });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.container__title}>Contacts</h1>
      {contacts.length > 0 ? (
        <div className={styles.wrapper}>
          <ul className={styles.wrapper__list}>
            <ContactCard contacts={contacts} deleteContact={handleDelete} />
          </ul>
        </div>
      ) : (
        <div>No contacts available</div>
      )}
    </div>
  );
};
