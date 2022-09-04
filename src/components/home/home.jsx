import "./home.css";
import img from '../props/ibrahim.jpg';
import Buttons from '../button/button';
import {BsMouse} from 'react-icons/bs';
import { useTranslation } from "react-i18next";

function Home() {
    const { t } = useTranslation();

    function test() {
        document.querySelector(".main-img").classList.toggle("active");
    };
       
    return (
        <div id="home" className="container home-container">
            <div className="logo" onClick={test}>
                <div className="main-img">
                    <span className="circle active"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                </div>

                <img src={img} alt=""/>
            </div>

            <a href="#footer" className="scroll-down">
                <hr/>
                <h5>{t("GoDownOfPageText")}</h5>
                <BsMouse className="scroll"/>
                <hr/>
            </a>

            <h2>
                <span>{t("Section1Title")}</span>
                <p>
                    {t("Section1Content")}
                </p>
            </h2>
            <Buttons/>
        </div>
    );
}

export default Home;
