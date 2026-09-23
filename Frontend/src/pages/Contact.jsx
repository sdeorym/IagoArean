import contact from '@assets/contact.jpg'
import '@styles/Contact.css';
import Button from "@components/Button";
import { useState } from "react";
/*= {((formData.username!="") && (formData.email!="")) ? "submit enabled" : "submit disabled"}*/ "submit" 
          /*disabled = {((formData.username=="") || (formData.email=="")) ? true : false}
          data={formData}*/

function Contact() {
  const [formData, setFormData] = useState({username: '', email: '', message: ''});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value});
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      const dataToSend = {username: formData.username, email: formData.email, message: formData.message};
      const stringifiedJsonData = JSON.stringify(dataToSend);
      try {
          const response = await fetch("/contact", {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: stringifiedJsonData
          });
          
          if (!response.ok) {
              const text = await response.text();
              throw new Error("ERROR. Please, try later.");
          }
          const result = await response.json();
          alert("Your message has been sent");
          setFormData({username: '', email: '', message: ''});
          e.target.reset();
      }
      catch(error) {
          alert("ERROR. Please, try later.");
      }
  }

  return (
    <section id="contact">
      <img src={contact} alt="Iago Arean's self-portrait in Egon Schiele style."></img>
      <form className="contactForm">
        <div className="textbox">
          <label htmlFor="username">Nom</label>
          <input placeholder="Your name here" type="text" id="username" name="username" autoComplete="name" onBlur={handleChange} required />
        </div>
        <div className="textbox">
          <label htmlFor="email">Courriel</label>
          <input placeholder="info@example.com" type="email" id="email" name="email" autoComplete="email" onBlur={handleChange} required />
        </div>
        <div className="textbox">
          <label htmlFor="message">Message</label>
          <textarea id="message" className="messagebox" type="message" name="message" rows="10" placeholder="Your message here" onBlur={handleChange} required />
        </div>
        <Button 
          type="submit" 
          value="Send" 
          title="Envoyer" 
          text="Envoyer" 
          classname = {((formData.username!="") && (formData.email!="")) ? "submit enabled" : "submit disabled"}
          disabled = {((formData.username=="") || (formData.email=="")) ? true : false}
          data={formData} 
          aria="Button to send message"     
        />
      </form>
    </section>
  )
}

export default Contact