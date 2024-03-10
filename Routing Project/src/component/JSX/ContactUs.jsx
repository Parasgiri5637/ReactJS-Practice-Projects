import Nav from "./Nav";
import styles from "../SCSS/ContactUs.module.scss";

export default function ContactUs() {
  return (
    <div>
      <Nav />
      <div className={styles.contactUs}>
        <h1>Contact Us</h1>
        <div className={styles.contactUsForm}>
          <div className={styles.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d992835.1476166195!2d68.97704011850891!3d23.439088208120932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39511e0750db4489%3A0x2049bf8ec25dea88!2sKachchh%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1693236854407!5m2!1sen!2sin"
              width="600"
              height="400"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className={styles.formTag}>
            <form>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Subject" />
              <textarea
                name=""
                id=""
                cols="30"
                rows="5"
                placeholder="Write Message"
              ></textarea>
              <button>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
