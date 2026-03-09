// ** Styles Import
import styles from "./index.module.scss";

// ** Another Import
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import notify from "../../../../components/Toast/components/notify";
import AnimatedSection from "../../../../components/Animation/AnimatedSection";

function ContactForm() {
  // ** State
  const [isSending, setIsSending] = useState<boolean>(false);

  // ** Hooks
  const form = useRef<HTMLFormElement>(null);
  const lastSubmit = useRef<number>(0);
  const startTime = useRef<number>(Date.now());

  // ** Function
  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    const now = Date.now();

    const formData = new FormData(form.current);

    const honeypot = formData.get("company");

    // Honeypot check
    if (honeypot) {
      console.log("Bot detected");
      return;
    }

    // Rate limit (60s)
    if (now - lastSubmit.current < 60000) {
      notify({
        message: "Please wait before sending another message",
        toastType: "error",
        toastPosition: "bottom-right",
      });
      return;
    }

    // Too fast (bot)
    if (now - startTime.current < 4000) {
      console.log("Spam bot detected");
      return;
    }

    try {
      setIsSending(true);

      await emailjs.sendForm(
        "service_bpta36e",
        "template_t9elo9g",
        form.current,
        "eRMMj90acQgOYnoKO"
      );

      notify({
        message: "Email sent successfully",
        toastType: "success",
        toastPosition: "bottom-right",
      });

      form.current.reset();
      lastSubmit.current = now;
    } catch (error) {
      console.error(error);

      notify({
        message: "Failed to send email",
        toastType: "error",
        toastPosition: "bottom-right",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <AnimatedSection animationType="fadeInUp" delay={0.1}>
      <form ref={form} onSubmit={sendEmail} className={styles.form}>
        <div className={styles.form__item}>
          <input type="text" name="name" placeholder="Your name" required />
          <input type="email" name="email" placeholder="Your email" required />

          {/* Honeypot */}
          <input
            type="text"
            name="company"
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
          />
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
            <button disabled={isSending}>
              {isSending ? "Sending..." : "Send"}
            </button>
          </div>
        </AnimatedSection>
      </form>
    </AnimatedSection>
  );
}

export default ContactForm;
