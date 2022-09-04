import "./contact.css";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();

  return (
    <div id="contact" className="container contact-container">
      <h1>{t("Section3Title")}</h1>
      <div className="contact-links">
        <a
          href="https://www.youtube.com/channel/UCKUNyQrj7q-3G5Y5Gf-xycA"
          className="contact youtube"
          target={"blank"}
        >
          <AiOutlineYoutube className="icon" />
          <h2>
            Youtube <span>{t("Section3Button1Content")}</span>
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
           href="https://www.linkedin.com/in/ibrahim-d%C3%B6nmez-821996168/" 
           className="contact Linkedin"
           target={"blank"}   
        >
           
          <AiFillLinkedin className="icon" />
          <h2>
            Linkedin <span>İbrahim Dönmez</span>
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Contact;
