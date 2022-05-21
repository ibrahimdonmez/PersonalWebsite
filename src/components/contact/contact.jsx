import "./contact.css";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

function Contact() {
  return (
    <div id="contact" className="container contact-container">
      <h1>Benimle İletişime Geç</h1>
      <div className="contact-links">
        <a
          href="https://www.youtube.com/channel/UCKUNyQrj7q-3G5Y5Gf-xycA"
          className="contact youtube"
          target={"blank"}
        >
          <AiOutlineYoutube className="icon" />
          <h2>
            Youtube <span>İçerik Üretici</span>
          </h2>
        </a>

        <a
          href="https://wa.me/905532313275"
          className="contact whatsapp"
          target={"blank"}
        >
          <AiOutlineWhatsApp className="icon" />
          <h2>
            whatsapp <span>+90 553 231 3275</span>
          </h2>
        </a>

        <a 
           href="https://www.instagram.com/6ibrahimm/" 
           className="contact instagram"
           target={"blank"}   
        >
           
          <AiOutlineInstagram className="icon" />
          <h2>
            instagram <span>6ibrahimm</span>
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Contact;
