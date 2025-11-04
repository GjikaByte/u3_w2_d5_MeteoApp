import React from "react";

export const ContactEn = () => {
  return (
    <section className="page contact">
      <h2>Contacts</h2>

      <p>For business inquiries or information: <strong>info@nombresocieta.example</strong></p>

      <form className="contact-form" onSubmit={(e)=>{ e.preventDefault(); alert("Grazie! Il form è demo."); }}>
        <label>
          Name
          <input name="name" required/>
        </label>
        <label>
          Email
          <input type="email" name="email" required/>
        </label>
        <label>
          Message
          <textarea name="message" rows="5" required></textarea>
        </label>
        <div className="form-row">
          <button className="btn primary" type="submit">Invia</button>
          <button className="btn ghost" type="reset">Reset</button>
        </div>
      </form>
    </section>
  );
};
