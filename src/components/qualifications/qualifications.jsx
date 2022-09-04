import "./qualifications.css";
import birthdayReminderimg from "../props/birthdayReminder.jpg";
import toursimg from "../props/tours.jpg";
import reviewsimg from "../props/Reviews.jpg";
import accordionimg from "../props/Accordion.jpg";
import foodMenuimg from "../props/foodMenu.jpg";
import colorGeneratorimg from "../props/colorGenerator.jpg";
import csslab from "../props/CSSLab.jpg";
import DeveloperSupport from "../props/DeveloperSupport.png";
import { useTranslation } from "react-i18next";

const Qualifications = () => {
  const { t } = useTranslation();
  return (
      <div className="QualificationsPage">
        <div className="box">

          <a href="https://developersupport.netlify.app/" target={"blank"}>
              <div className="card">
                <div className="imgBx">
                    <img src={DeveloperSupport} alt="images"/>
                </div>
                <div className="details">
                    <h2>
                      <span><br/><br/>{t("Section2Project8")}</span>
                    </h2>
                </div>
              </div>
            </a>

          <a href="https://ibrahim-react-csslab.netlify.app/" target={"blank"}>
              <div className="card">
                <div className="imgBx">
                    <img src={csslab} alt="images"/>
                </div>
                <div className="details">
                    <h2>
                      <span><br/><br/>{t("Section2Project7")}</span>
                    </h2>
                </div>
              </div>
            </a>

            <a href="https://ibrahim-react-birthdayReminder.netlify.app/" target={"blank"}>
              <div className="card">
                <div className="imgBx">
                    <img src={birthdayReminderimg} alt="images"/>
                </div>
                <div className="details">
                  <h2>
                    <span><br/><br/>{t("Section2Project1")}</span>
                  </h2>
                </div>
              </div>
            </a>

            <a href="https://ibrahim-react-tours.netlify.app/" target={"blank"}>
              <div className="card">
                <div className="imgBx">
                    <img src={toursimg} alt="images"/>
                </div>
                <div className="details">
                    <h2>
                      <span><br/><br/>{t("Section2Project2")}</span>
                    </h2>
                </div>
              </div>
            </a>

            <a href="https://ibrahim-react-reviews.netlify.app/" target={"blank"}>
              <div className="card">
                <div className="imgBx">
                  <img src={reviewsimg} alt="images"/>
                </div>
                <div className="details">
                    <h2>
                      <span><br/><br/>{t("Section2Project3")}</span>
                    </h2>
                </div>
              </div>
            </a>

            <a href="https://ibrahim-react-accordion.netlify.app/" target={"blank"}>
              <div className="card">
                <div className="imgBx">
                    <img src={accordionimg} alt="images"/>
                </div>
                <div className="details">
                    <h2>
                      <span><br/><br/>{t("Section2Project4")}</span>
                    </h2>
                </div>
              </div>
            </a>

            <a href="https://ibrahim-react-foodMenu.netlify.app/" target={"blank"}>
              <div className="card">
                <div className="imgBx">
                    <img src={foodMenuimg} alt="images"/>
                </div>
                <div className="details">
                    <h2>
                      <span><br/><br/>{t("Section2Project5")}</span>
                    </h2>
                </div>
              </div>
            </a>

            <a href="https://ibrahim-react-colorGenerator.netlify.app/" target={"blank"}>
              <div className="card">
                <div className="imgBx">
                    <img src={colorGeneratorimg} alt="images"/>
                </div>
                <div className="details">
                    <h2>
                      <span><br/><br/>{t("Section2Project6")}</span>
                    </h2>
                </div>
              </div>
            </a>

        </div>
      </div>
  );
};

export default Qualifications;
