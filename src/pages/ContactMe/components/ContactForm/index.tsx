// ** Styles Import
import styles from "./index.module.scss";

// ** Another Import
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import notify from "../../../../components/Toast/components/notify";
import AnimatedSection from "../../../../components/Animation/AnimatedSection";

function ContactForm() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bpta36e",
        "template_t9elo9g",
        form.current!,
        "eRMMj90acQgOYnoKO"
      )
      .then(
        () => {
          notify({
            message: "Email sent successfully",
            toastType: "success",
            toastPosition: "bottom-right",
          });
        },
        (error: any) => {
          console.error("Failed to send email:", error);
          notify({
            message: "Failed to send email",
            toastType: "error",
            toastPosition: "bottom-right",
          });
        }
      );
  };
  return (
    <AnimatedSection animationType="fadeInUp" delay={0.1}>
      <form ref={form} onSubmit={sendEmail} className={styles.form}>
        <div className={styles.form__item}>
          <input type="text" name="name" placeholder="Your name" required />
          <input type="email" name="email" placeholder="Your email" required />
        </div>
        <div className={styles.form__item}>
          <input type="text" name="subject" placeholder="Subject" required />
        </div>
        <div className={styles.form__item}>
          <textarea
            className="form-control"
            name="message"
            rows={6}
            placeholder="Message"
            required
          ></textarea>
        </div>
        <AnimatedSection animationType="slideInRight" delay={0.2}>
          <div className={styles.form__button}>
            <button type="submit">Send</button>
          </div>
        </AnimatedSection>
      </form>
    </AnimatedSection>
  );
}

export default ContactForm;
