import React from 'react'
import Styles from "./ContactStyles.module.css";

const Contact = () => {
  return (
    <section id={Styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form action="">
        <div className="forGroup">
          <label htmlFor="name"></label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="forGroup">
          <label htmlFor="email"></label>
          <input
            type="text
            "
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="forGroup">
          <label htmlFor="message"></label>
          <textarea

            type="textarea
            "
            name="message"
            id="message"
            placeholder="Message"
            required
          />
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact