import { Field, Form, Formik } from "formik";
import styles from "./ContactForm.module.scss";

const ContactForm = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form className={styles.form}>
        <div className={styles.form__item}>
          <label className={styles.form__item_label} htmlFor="firstName">
            First Name
          </label>
          <Field
            className={styles.form__item_field}
            id="firstName"
            name="firstName"
            placeholder="John"
          />
        </div>
        <div className={styles.form__item}>
          <label className={styles.form__item_label} htmlFor="lastName">
            Last Name
          </label>
          <Field
            className={styles.form__item_field}
            id="lastName"
            name="lastName"
            placeholder="Doe"
          />
        </div>
        <div className={styles.form__item}>
          <label className={styles.form__item_label} htmlFor="email">
            Email
          </label>
          <Field
            className={styles.form__item_field}
            id="email"
            name="email"
            placeholder="john@gmail.com"
            type="email"
          />
        </div>
        <div className={styles.btn}>
          <button className={styles.btn_submit} type="submit">
            Add Contact
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default ContactForm;
