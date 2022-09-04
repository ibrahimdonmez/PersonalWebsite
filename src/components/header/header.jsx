import './header.css';

function Header() {
    function updateURLParameter(param, paramVal){
        var url = (window.location.href).replace(window.location.hash, "");
        var newAdditionalURL = "";
        var tempArray = url.split("?");
        var baseURL = tempArray[0];
        var additionalURL = tempArray[1];
        var temp = "";
        if (additionalURL) {
            tempArray = additionalURL.split("&");
            for (var i=0; i<tempArray.length; i++){
                if(tempArray[i].split('=')[0] !== param){
                    newAdditionalURL += temp + tempArray[i];
                    temp = "&";
                }
            }
        }
    
        var rows_txt = temp + "" + param + "=" + paramVal;
        console.log(baseURL)
        return baseURL + "?" + newAdditionalURL + rows_txt;
    }

    return(
        <div id="home" className="container header-container">
            <div className="languages">
                <button type='button' className='btn' onClick={() => {window.location.href = updateURLParameter('lang', 'tr')}}>
                    <img className='language-img' src={require("../../assets/images/trFlag.png")} 
                        alt="trFlag"/> 
                </button>
                <button type='button' className='btn' onClick={() => {window.location.href = updateURLParameter('lang', 'en')}}>
                    <img className='language-img' src={require("../../assets/images/enFlag.png")} 
                        alt="enFlag"/> 
                </button>
            </div>
            <h3>
                İbrahim DÖNMEZ
            </h3>
            <h2>Full-Stack Web Developer</h2>
        </div>
    );
}

export default Header;