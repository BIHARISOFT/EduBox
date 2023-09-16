import { useContext } from "react";
import NavBar from "../component/NavBar";
import PopupBox from "../component/PopupBox";
import GlobelContext from "../GlobalContext/GlobalContext";
import './../component/PopupBox.css';

const ShowPopup = () => {

    const { setShowPopupBox } = useContext(GlobelContext);/* call  useContext */


    const ShowMe = (reqType) => {
        if (reqType === "success") {
            
            setShowPopupBox(<PopupBox Message="WelCome Biharisoft,Succes Message" RedirectUrl="/Cart" IsSuccess={true} IsWarning={false} IsError={false} />);
        }else if (reqType === "error") {

            setShowPopupBox(<PopupBox Message="WelCome Biharisoft,Error Message" RedirectUrl="/Cart" IsSuccess={false} IsWarning={false} IsError={true} />);
        }else if (reqType === "warn") {

            setShowPopupBox(<PopupBox Message="WelCome Biharisoft,Warnning Message" RedirectUrl="/Cart" IsSuccess={false} IsWarning={true} IsError={false} />);
        }
    }
    return (
        <><NavBar/>
            <button className="PopupSucces" onClick={() => { ShowMe("success") }}>Success Popup </button>
            <button className="PopupWarn" onClick={() => { ShowMe("warn") }} >Warnig Popup</button>
            <button className="PopupError" onClick={() => { ShowMe("error") }}>Error Popup</button>
        </>
        );
}

export default ShowPopup;
