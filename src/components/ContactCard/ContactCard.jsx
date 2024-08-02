import { NavLink } from "react-router-dom";
import { TiDeleteOutline } from "react-icons/ti";
import styles from "./ContactCard.module.scss";
import avatar from "../../assets/img/avatar.png";

export const ContactCard = ({ contacts, deleteContact }) => {
  return (
    <>
      {contacts.length > 0 ? (
        contacts.map((contact) => (
          <li key={contact.id} className={styles.card}>
            <img
              className={styles.card__avatar}
              src={contact.avatar || avatar}
              alt="Avatar"
            />
            <div>
              <NavLink to={`/contact/${contact.id}`}>
                <div className={styles.card__name}>
                  {contact.fields["first name"]?.[0]?.value || "No first name"}{" "}
                  {contact.fields["last name"]?.[0]?.value || "No last name"}
                </div>
                <div className={styles.card__email}>
                  {contact.fields["email"]?.[0]?.value || "No email"}
                </div>
                <div className={styles.card__tags}>
                  <span className={styles.card__tags_item}>
                    {Array.isArray(contact.tags) && contact.tags.length > 0
                      ? contact.tags.join(", ")
                      : "No tags"}
                  </span>
                </div>
              </NavLink>
              <div className={styles.delete_btn}>
                <TiDeleteOutline
                  size={25}
                  onClick={() => deleteContact(contact.id)}
                />
              </div>
            </div>
          </li>
        ))
      ) : (
        <li>No contacts available</li>
      )}
    </>
  );
};
