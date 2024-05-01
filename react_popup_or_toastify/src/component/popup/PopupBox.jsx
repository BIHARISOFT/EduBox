import { CheckCircle, Warning, Error, SpinnerIcon } from '../Icons/Icons';
import './PopupBox.css';


const PopupBox = (props) => {

    const { Message, RedirectUrl, IsSuccess, IsWarning, IsError ,ClosePopup} = props;

    const MessageList = Message.split(",");

    const HeaderText = IsSuccess ? "Success" : IsWarning ? "Warning" : IsError ? "Error" : "";
    const HeaderBcColor = IsSuccess ? "GreenClr" : IsWarning ? "YellowClr" : IsError ? "RedClr" : "YellowClr";
    const PopupHeaderIcon = IsSuccess ? <CheckCircle ClassNm="IconPopup" IconColor="#fefefe" IconSize={1.4} />
        : IsWarning ? <Warning ClassNm="IconPopup" IconColor="#fefefe" IconSize={1} />
            : IsError ? <Error ClassNm="IconPopup" IconColor="#fefefe" IconSize={1.4} />
                : <Warning ClassNm="IconPopup" IconColor="#fefefe" IconSize={1} />;

    return (
        <>
            <div className="PopupBoxModal">
                <div className="PopupBody">
                    <div className={"PopupHeader " + HeaderBcColor}>
                        <div className="PopupHeaderText">
                            <span className="PopupHeaderTxt">{HeaderText}</span> {PopupHeaderIcon}
                        </div>
                        <div className="PopupHeaderIcon">
                            <div className="IconSpin">
                                <SpinnerIcon ClassNm="SpinnerIcon" IconColor="#fefefe" IconSize={1.4} />
                            </div>
                        </div>
                        <div className="PopupHeaderBtn">
                            <button className="PopupBtn" onClick={() => { ClosePopup(RedirectUrl) }}> <span>&times;</span> </button>
                        </div>
                    </div>
                    <div className="PopupMessageBody" >
                        <ul>
                            {
                                MessageList.map((msg, index) => (

                                    <li key={"PopupMSg " + index}>{msg}</li>
                                ))

                            }


                        </ul>
                    </div>
                    <div className="PopupFooter">
                        <button className={"okBtn " + HeaderBcColor} onClick={() => { ClosePopup(RedirectUrl) }}>OK</button>
                    </div>
                  
                </div>
            </div>
        </>
    );
};
export default PopupBox;
