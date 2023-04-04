import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [emailResult, setEmailResult] = useState({
    result: "",
    status: "success",
  });
  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      await emailjs.sendForm(
        "service_9n7zdyk",
        "template_cyh6xhk",
        e.target,
        "user_73maMOZ3j8rcV5J4bIqKJ"
      );
      setEmailResult({
        result: `Email sent. Thank you very much`,
        status: "success",
      });
      document.querySelector(".contact form").reset();
    } catch (error) {
      console.log(error);
      setEmailResult({
        result: error.text,
        status: "failed",
      });
    }
  };
  return (
    <section className="contact" id="contact">
      <h1>CONTACT</h1>
      <div className="section-content">
        <form onSubmit={sendEmail}>
          <p className="success">{emailResult.result}</p>
          <input type="email" name="from_email" placeholder="email" required />
          <textarea name="message" placeholder="message" required></textarea>
          <input type="submit" />
        </form>
        <div className="contact-container">
          <div className="contactDetails">
            <h1>Contact Details:</h1>
            <ul>
              <li>
                <i className="fa fa-phone"></i>
                <p>090-4163-0614</p>
              </li>
              <li>
                <i className="fa fa-envelope"></i>
                <p>takaki.yu.dev@gmail.com</p>
              </li>
            </ul>
          </div>
          <div className="socialDetails">
            <h1>Socials:</h1>
            <ul>
              <a href="https://www.facebook.com/yuyu.takaks/" target="_blank">
                <li className="fa fa-facebook"></li>
              </a>
              <a href="https://twitter.com/takakiyuuu" target="_blank">
                <li className="fa fa-twitter"></li>
              </a>
              <a href="https://github.com/YuTakaki" target="_blank">
                <li className="fa fa-github"></li>
              </a>
              <a
                href="https://www.linkedin.com/in/takakiiiyuuu/"
                target="_blank">
                <li className="fa fa-linkedin"></li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
