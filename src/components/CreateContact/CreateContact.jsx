import styles from "./CreateContact.module.scss";
import ContactForm from "../ContactForm/ContactForm";

const CreateContact = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.container__title}>Create Contact</h2>
      <ContactForm />
    </div>
  );
};

export default CreateContact;
