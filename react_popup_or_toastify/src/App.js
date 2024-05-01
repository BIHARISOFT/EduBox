import { useState } from 'react';
import './App.css';
import PopupBox from './component/popup/PopupBox';
import Toastify from './component/toastify/Toastify';

function App() {

    const [msgBox, setMsgBox] = useState("");
    const ClosePopup = (RedirectUrl) => {
        setMsgBox("");
       
    }

    const ShowMe = (reqType) => {

        if (reqType === "successP") {

            setMsgBox(<PopupBox Message="WelCome Biharisoft,Succes Message" RedirectUrl="/Cart" IsSuccess={true} IsWarning={false} IsError={false} ClosePopup={ClosePopup} />);
        } else if (reqType === "errorP") {

            setMsgBox(<PopupBox Message="WelCome Biharisoft,Error Message" RedirectUrl="/Cart" IsSuccess={false} IsWarning={false} IsError={true} ClosePopup={ClosePopup} />);
        } else if (reqType === "warnP") {

            setMsgBox(<PopupBox Message="WelCome Biharisoft,Warnning Message" RedirectUrl="/Cart" IsSuccess={false} IsWarning={true} IsError={false} ClosePopup={ClosePopup} />);
        }
        else if (reqType === "successT") {
            setMsgBox(()=>(""));
            setMsgBox(<Toastify Message="WelCome Biharisoft" RedirectUrl="/Cart" IsSuccess={true} IsWarning={false} IsError={false} ClosePopup={ClosePopup} TimmerSpeedInMiliseconds={50} AutoClose={true} />);
        } else if (reqType === "errorT") {
            setMsgBox(() => (""));
            setMsgBox(<Toastify Message="WelCome Biharisoft" RedirectUrl="/Cart" IsSuccess={false} IsWarning={false} IsError={true} ClosePopup={ClosePopup} TimmerSpeedInMiliseconds={50} AutoClose={false} />);
        } else if (reqType === "warnT") {
            setMsgBox(() => (""));
            setMsgBox(<Toastify Message="WelCome Biharisoft" RedirectUrl="/Cart" IsSuccess={false} IsWarning={true} IsError={false} ClosePopup={ClosePopup} TimmerSpeedInMiliseconds={50} AutoClose={false} />);
        }

    }

    return (
        <div > {msgBox}
        <div className="App">
           
          <button className="GreenClr btnshap" onClick={() => { ShowMe("successP") }}>Success Popup </button>
          <button className="YellowClr btnshap" onClick={() => { ShowMe("warnP") }} >Warnig Popup</button>
          <button className="RedClr btnshap" onClick={() => { ShowMe("errorP") }}>Error Popup</button>

          <button className="GreenClr btnshap" onClick={() => { ShowMe("successT") }}>Success toastify </button>
          <button className="YellowClr btnshap" onClick={() => { ShowMe("warnT") }} >Warnig toastify</button>
          <button className="RedClr btnshap" onClick={() => { ShowMe("errorT") }}>Error toastify</button>

            </div>
        </div>
  );
}

export default App;
