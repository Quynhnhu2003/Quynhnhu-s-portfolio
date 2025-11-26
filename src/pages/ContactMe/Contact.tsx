// ** Styles Import
import styles from "./index.module.scss";

// ** Another Import
import ContactForm from "./components/ContactForm";
import ContactInfor from "./components/ContactInfor";
import { useTranslation } from "react-i18next";
import type { contactInforType } from "../../utils/type/contactType";

function ContactMe() {
  const { t } = useTranslation();

  const infoContact = t("contact.contactInfor", {
    returnObjects: true,
  }) as contactInforType[];

  return (
    <section className={styles.contactContainer} id={"contact"}>
      <div className={styles.contactContainer__header}>
        <p>{t("contact.title")}</p>
        <span>{t("contact.bio")}</span>
      </div>
      <div className={styles.contactContainer__content}>
        <ContactInfor contactList={infoContact} />
        <ContactForm />
      </div>
    </section>
  );
}
export default ContactMe;
