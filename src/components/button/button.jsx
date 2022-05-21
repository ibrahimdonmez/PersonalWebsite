import './button.css';

function Buttons (){
    return(
        <div className="container button-container">
            <a href="#about" className="btn pri">
                Projelerim
            </a>
            <a href="/CV_ibrahimDONMEZ.pdf" download className="btn pri">
                CV
            </a>
            <a href="#contact" className="btn sec">
                İletişime Geç
            </a>
        </div>
    );
}

export default Buttons;