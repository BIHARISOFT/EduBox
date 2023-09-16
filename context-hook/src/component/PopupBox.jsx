
import React, { useContext } from 'react';
import GlobelContext from '../GlobalContext/GlobalContext';
import { CheckCircle, Error, Warning } from '../Icons/Icons';
import './PopupBox.css';

const PopupBox = (props) => {
    console.log(props)

    const { ClosePopup } = useContext(GlobelContext);
    console.log(ClosePopup)
    const { Message, RedirectUrl, IsSuccess, IsWarning, IsError } = props;

    const MessageList = Message.split(",");

    const PopupHeader = IsSuccess ? "PopupSucces" : IsWarning ? "PopupWarn" : IsError ? "PopupError" : "PopupWarn";

    const PopupHeaderMsg = IsSuccess ? "Success" : IsWarning ? "Warning" : IsError ? "Error" : "Warning";

    const PopupHeaderIcon = IsSuccess ? <CheckCircle ClassNm="IconPopup" IconColor="#fefefe" IconSize={1.4} />
        : IsWarning ? <Warning ClassNm="IconPopup" IconColor="#fefefe" IconSize={1} />
            : IsError ? <Error ClassNm="IconPopup" IconColor="#fefefe" IconSize={1.4} />
                : <Warning ClassNm="IconPopup" IconColor="#fefefe" IconSize={1} />;
    const CloseMe = () => {

        ClosePopup(RedirectUrl);
    }

    return (

        <>

            <div className="PopupBoxmodal">

                <div className="PopupBoxModalContent">
                    <div className={"PopupHeader " + PopupHeader}>
                        <div className="PopupHeaderTitle"><b>{PopupHeaderMsg}</b>{PopupHeaderIcon}</div>
                        <div className="PopupBoxClose">
                            <span onClick={() => { CloseMe() }}>&times;</span>
                        </div>
                    </div>
                    <div className="PopupMessageBody" >
                        <ul>
                            {
                                MessageList.map((msg,index)=>(

                                    <li key={"PopupMSg " + index}>{msg}</li>
                                ))

                            }
                            

                        </ul>
                    </div>


                    <div className="PopupFooter">
                        <button className={"Popupbtn " + PopupHeader} onClick={() => { CloseMe() }}> Ok</button>
                    </div>
                </div>

            </div>
        </>
    );
}

export default PopupBox;