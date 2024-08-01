import styles from "./MainPage.module.scss";
import CreateContact from "../../components/CreateContact/CreateContact";

export const MainPage = () => {
  return (
    <section className={styles.section}>
      <div className={styles.section__container}>
        <CreateContact />
        {/* <div>Items</div> */}
      </div>
    </section>
  );
};
