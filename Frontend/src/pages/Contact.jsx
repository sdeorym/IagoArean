import contact from '@assets/diavolo.avif'
import '@styles/Contact.css';
import Button from "@components/Button";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({username: '', email: '', message: ''});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value});
    console.log(formData);
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      const dataToSend = {username: formData.username, email: formData.email, message: formData.message};
      const stringifiedJsonData = JSON.stringify(dataToSend);
      try {
          console.log("From: ", username, " Email: ", email, " Message: ", message);
          const response = await fetch("/sendmail", {              
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: stringifiedJsonData
          });
          console.log("From: ", username, " Email: ", email, " Message: ", message);
          
          if (!response.ok) {
              const text = await response.text();
              console.log("ERROR: ", response.status);
              throw new Error("ERROR. Please, try later.");
          }
          const result = await response.json();
          alert("Your message has been sent");
          setFormData({username: '', email: '', message: ''});
          e.target.reset();
      }
      catch(error) {
          alert("ERROR. Service unavailable. Please, try later.");
      }
  }

  return (
    <section id="contact">
      <div className="diavoloForm">
        <img src={contact} alt="Iago Arean's self-portrait in Egon Schiele style."></img>
        <form className="contactForm" onSubmit={handleSubmit}>
          <h2>CONTACT</h2>
          <div className="textbox">
            <label htmlFor="username">Name</label>
            <input placeholder="Your name here" type="text" id="username" name="username" autoComplete="name" onBlur={handleChange} required />
          </div>
          <div className="textbox">
            <label htmlFor="email">Email</label>
            <input placeholder="info@example.com" type="email" id="email" name="email" autoComplete="email" onBlur={handleChange} required />
          </div>
          <div className="textbox">
            <label htmlFor="message">Message</label>
            <textarea id="message" className="messagebox" type="message" name="message" rows="10" placeholder="Your message here" onBlur={handleChange} required />
          </div>
          <Button 
            type="submit" 
            value="Send" 
            title="Send" 
            text="Send" 
            classname = {((formData.username!="") && (formData.email!="")) ? "submit enabled" : "submit disabled"}
            disabled = {((formData.username=="") || (formData.email=="")) ? true : false}
            data={formData} 
            aria="Button to send message"     
          />
        </form>
      </div>
    </section>
  )
}

export default Contact