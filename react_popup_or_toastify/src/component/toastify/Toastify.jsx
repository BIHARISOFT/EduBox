import './Toastify.css';
import { CheckCircle, Warning, Error, SpinnerIcon } from '../Icons/Icons';
import { useEffect, useState } from 'react';

const Toastify = (props) => {
    const [progressBarIndicator, setProgressBarIndicator] = useState(100);
    const { Message, RedirectUrl, IsSuccess, IsWarning, IsError, ClosePopup,TimmerSpeedInMiliseconds,AutoClose } = props;

    const MessageList = Message.split(",");

    const HeaderText = IsSuccess ? "Success" : IsWarning ? "Warning" : IsError ? "Error" : "";
    const HeaderBcColor = IsSuccess ? "GreenClr" : IsWarning ? "YellowClr" : IsError ? "RedClr" : "YellowClr";
    const PopupHeaderIcon = IsSuccess ? <CheckCircle ClassNm="ToastifyIconPopup" IconColor="#fefefe" IconSize={0.5} />
        : IsWarning ? <Warning ClassNm="ToastifyIconPopup" IconColor="#fefefe" IconSize={0.6} />
            : IsError ? <Error ClassNm="ToastifyIconPopup" IconColor="#fefefe" IconSize={0.5} />
                : <Warning ClassNm="ToastifyIconPopup" IconColor="#fefefe" IconSize={0.6} />;
    let timerStart = null;
    useEffect(() => {
        if (AutoClose) {
            timerStart = setInterval(() => {
                setProgressBarIndicator((pre) => (pre - 1));
            }, TimmerSpeedInMiliseconds);
           
            return () => { clearInterval(timerStart) };
        }
        
    }, [progressBarIndicator]);

    useEffect(() => {
        if (progressBarIndicator === 10) {
            clearInterval(timerStart);
            ClosePopup(RedirectUrl);
        }
    }, [progressBarIndicator]);
    return (
        <>
            <div className="ToastifyModal">
                <div className={"ToastifyBody " + HeaderBcColor}>
                    <div className={"ToastifyHeader " + HeaderBcColor}>

                        <div className="ToastifyHeaderText">
                            <span className="ToastifyHeaderTxt">{HeaderText}</span> {PopupHeaderIcon}
                        </div>
                        
                        <div className="ToastifyHeaderBtn">
                            <button className="ToastifyBtn" onClick={() => { ClosePopup(RedirectUrl) }}> <span>&times;</span> </button>
                        </div>

                    </div>

                    <div className="ToastifyMessageBody" >
                        <ul>
                            {
                                MessageList.map((msg, index) => (

                                    <li key={"ToastifyMSg " + index}>{msg}</li>
                                ))

                            }


                        </ul>
                    </div>

                    {AutoClose &&
                        <div className="ToastifyFooter">
                        <div className={"ToastifyProgressBar"} >
                            <div className={"ToastifyProgressBarChild " + HeaderBcColor} style={{ width: `${progressBarIndicator}%` }} >
                                {progressBarIndicator + "%"}
                            </div>
                        </div>
                    </div>
                    }
                </div>
            </div>
        </>
    );
};
export default Toastify;
