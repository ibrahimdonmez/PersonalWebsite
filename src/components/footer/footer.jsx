import "./footer.css";
import { BsMouse } from "react-icons/bs";
// import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialGithub } from "react-icons/ti";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <div id="footer" className="container footer-container">
      <h1>
        {t("FooterText")}
        <a href="#home">
          <h2>
            <BsMouse /> - {t("GoTopOfPageText")} -
          </h2>
        </a>
      </h1>
      <div className="social-links">
        {/* <a href="https://www.instagram.com/6ibrahimm/">
          <BsInstagram className="social" />
        </a> */}

        <a href="https://www.linkedin.com/in/ibrahim-d%C3%B6nmez-821996168/">
          <FaLinkedin className="social" />
        </a>

        <a href="https://www.youtube.com/channel/UCKUNyQrj7q-3G5Y5Gf-xycA">
          <TiSocialYoutube className="social" />
        </a>

        <a href="https://github.com/ibrahimdonmez">
          <TiSocialGithub className="social" />
        </a>
      </div>
    </div>
  );
}
export default Footer;
