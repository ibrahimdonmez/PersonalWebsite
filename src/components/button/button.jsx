import './button.css';
import { useTranslation } from "react-i18next";

function Buttons (){
    const { t } = useTranslation();

    return(
        <div className="container button-container">
            <a href="#about" className="btn pri">
                {t("Section1Button1Text")}
            </a>
            <a href="/CV_ibrahimDONMEZ.pdf" download className="btn pri">
                {t("Section1Button2Text")}
            </a>
            <a href="#contact" className="btn sec">
                {t("Section1Button3Text")}
            </a>
        </div>
    );
}

export default Buttons;