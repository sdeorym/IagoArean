import contact from '@assets/contact.jpg'
import '@styles/Contact.css';
import Button from "@components/Button";
/*= {((formData.username!="") && (formData.email!="")) ? "submit enabled" : "submit disabled"}*/ "submit" 
          /*disabled = {((formData.username=="") || (formData.email=="")) ? true : false}
          data={formData}*/

function Contact() {

  return (
    <section id="contact">
      <img src={contact} alt="autorretratos de Iago Arean"></img>
      <form className="contactForm">
        <div className="textbox">
          <label htmlFor="username">Nom</label>
          <input placeholder="Votre nom ici" type="text" id="username" name="username" autoComplete="name" /*onBlur={handleChange}*/ required />
        </div>
        <div className="textbox">
          <label htmlFor="email">Courriel</label>
          <input placeholder="info@example.com" type="email" id="email" name="email" autoComplete="email" /*onBlur={handleChange}*/ required />
        </div>
        <div className="textbox">
          <label htmlFor="message">Message</label>
          <textarea id="message" className="messagebox" type="message" name="message" rows="10" placeholder="Votre message ici" /*onBlur={handleChange}*/ required />
        </div>
        <Button 
          type="submit" 
          value="Send" 
          title="Envoyer" 
          text="Envoyer"
          classname = "submit"
          aria="Bouton envoyer message"     
        />
      </form>
    </section>
  )
}

export default Contact