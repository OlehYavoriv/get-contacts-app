import styles from "./MainPage.module.scss";
import CreateContact from "../../components/CreateContact/CreateContact";
import { ContactList } from "../../components/ContactList";

export const MainPage = () => {
  return (
    <section className={styles.section}>
      <div className={styles.section__container}>
        <CreateContact />
        <ContactList />
      </div>
    </section>
  );
};
