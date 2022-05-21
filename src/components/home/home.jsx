import "./home.css";
import img from '../props/ibrahim.jpg';
import Buttons from '../button/button';
import {BsMouse} from 'react-icons/bs';

function Home() {

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
                <h5>Aşağı in</h5>
                <BsMouse className="scroll"/>
                <hr/>
            </a>

            <h2>
                <span>Benim Hakkımda</span>
                <p>
                    Sakarya Üniversitesi Bilgisayar Mühendisliği mezunuyum. Şu anda Ford Otosan'da full stack yazılım mühendisi 
                    olarak çalışıyorum. Yeni şeyler denemekten ve sürekli öğrenmekten keyif alıyorum. Bakış açımı genişletecek ve 
                    beni geliştirecek her türlü teknoloji ve yeniliğe açığım.
                </p>
            </h2>
            <Buttons/>
        </div>
    );
}

export default Home;
