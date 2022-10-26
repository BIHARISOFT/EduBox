import React, { useState } from 'react';
import './App.css';
import ShowMyTable from './ShowMyTable';

const StateName = ['Assam', 'Bihar', 'Chhattisgarh', 'Jharkhand', 'Karnataka', 'Maharashtra', 'Uttar Pradesh'];

const DetailsModel = {
    Name: '',
    MobileNo: '',
    EmailAddress: '',
    Gender: '',
    DateOfBirth: '',
    Language: [],
    State: ''
}

const ErrorModel = {
    NameErrorMsg: '',
    MobNoErrorMsg: '',
    EmailErrorMsg: '',
    GenderErrorMsg: '',
    DBOErrorMsg: '',
    LNGErrorMsg: '',
    StateErrorMsg: '',

}

const emailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
const MobNo = /^\d{10}$/;



const App = () => {

    const [details, setDetails] = useState(DetailsModel);

    const [errorMsg, setErrorMsg] = useState(ErrorModel);

    const [showTable, setShowTable] = useState(<ShowMyTable data={details} />)

    /* Deestructuring Object*/

    const { Name, MobileNo, EmailAddress, Gender, DateOfBirth, Language, State } = details;

    const { NameErrorMsg, MobNoErrorMsg, EmailErrorMsg, GenderErrorMsg, DBOErrorMsg, LNGErrorMsg, StateErrorMsg } = errorMsg;

    const onInputChange = (e, inputType) => {
        const { name, value } = e.target;
        if (inputType === 'inputTxt') {

            setDetails((previous) => ({ ...previous, [name]: value }))

        }
        else if (inputType === 'inputChkBx') {

            if (e.target.checked) {

                setDetails((previous) => ({ ...previous, [name]: [...Language, value] }));
            }
            else {
                const filterData = Language.filter((lang) => { return lang !== value });

                setDetails((previous) => ({ ...previous, [name]: filterData }));
            }
        }

    }


    const ValidateData = () => {
        const validateObj = {};

        if (Name.length === 0) {

            validateObj.NameErrorMsg = 'Please Enter Name';
        }

        if (MobileNo.length === 0) {

            validateObj.MobNoErrorMsg = 'Please Enter Mobile No';
        }
        else if (!MobileNo.match(MobNo)) {

            validateObj.MobNoErrorMsg = 'Please Enter Valid Mobile No';
        }

        if (EmailAddress.length === 0) {

            validateObj.EmailErrorMsg = 'Please Enter Email Address';
        }
        else if (!EmailAddress.match(emailPattern)) {

            validateObj.EmailErrorMsg = 'Please Enter Valid Email Address';
        }

        if (Gender.length === 0) {

            validateObj.GenderErrorMsg = 'Please Select Gender';
        }
        if (DateOfBirth.length === 0) {

            validateObj.DBOErrorMsg = 'Please Enter Date of Birth';
        }

        if (DateOfBirth.length === 0) {

            validateObj.DBOErrorMsg = 'Please Enter Date of Birth';
        }

        if (Language.length === 0) {

            validateObj.LNGErrorMsg = 'Please Select Language';
        }
        if (State.length === 0) {

            validateObj.StateErrorMsg = 'Please Select State';
        }


        if (Object.keys(validateObj).length === 0) {
            setErrorMsg(() => (ErrorModel));
            return true;
        }
        else {

            setErrorMsg(() => ({ ...ErrorModel, ...validateObj }));
            return false;

        }


    }


    const AddBtnFnt = () => {

        const validateRt = ValidateData();

        if (validateRt) {
            setShowTable(<ShowMyTable data={details} />);
        }


    }


    return (

        <>
            <div className='FormValBody'>

                <div className='FormValInputLabel'><label>Name</label></div>
                <input type='text' name='Name' value={Name} onChange={(e) => { onInputChange(e, 'inputTxt') }} /><br />
                <div className='FormErrorLabel'><label>{NameErrorMsg}</label></div>


                <div className='FormValInputLabel'><label>Mobile No</label></div>
                <input type='text' name='MobileNo' value={MobileNo} onChange={(e) => { onInputChange(e, 'inputTxt') }} /><br />
                <div className='FormErrorLabel'><label>{MobNoErrorMsg}</label></div>


                <div className='FormValInputLabel'><label>Email Address</label></div>
                <input type='text' name='EmailAddress' value={EmailAddress} onChange={(e) => { onInputChange(e, 'inputTxt') }} /><br />
                <div className='FormErrorLabel'><label>{EmailErrorMsg}</label></div>


                <div className='FormValInputLabel'><label>Gender</label></div>
                <label> Male </label><input type='radio' name='Gender' value='Male' onChange={(e) => { onInputChange(e, 'inputTxt') }} />
                <label> Female </label> <input name='Gender' type='radio' value='Female' onChange={(e) => { onInputChange(e, 'inputTxt') }} /><br />
                <div className='FormErrorLabel'><label>{GenderErrorMsg}</label></div>


                <div className='FormValInputLabel'><label>Date of Birth</label></div>
                <input type='date' name='DateOfBirth' value={DateOfBirth} onChange={(e) => { onInputChange(e, 'inputTxt') }} /><br />
                <div className='FormErrorLabel'><label>{DBOErrorMsg}</label></div>


                <div className='FormValInputLabel'><label>Language</label></div>
                <label>Hindi</label><input type='checkBox' name='Language' value='Hindi' onChange={(e) => { onInputChange(e, 'inputChkBx') }} />
                <label>Marathi</label> <input name='Language' type='checkBox' value='Marathi' onChange={(e) => { onInputChange(e, 'inputChkBx') }} />
                <label>English</label> <input name='Language' type='checkBox' value='English' onChange={(e) => { onInputChange(e, 'inputChkBx') }} /><br />
                <div className='FormErrorLabel'><label>{LNGErrorMsg}</label></div>


                <div className='FormValInputLabel'><label>State</label></div>
                <select name='State' value={State} onChange={(e) => { onInputChange(e, 'inputTxt') }}>
                    <option value=''>---Select---</option>
                    {StateName.map((sName, index) => (
                        <option key={index + sName} value={sName}>{sName}</option>
                    ))}
                </select><br />
                <div className='FormErrorLabel'><label>{StateErrorMsg}</label></div>
                <button className='btnAdd' onClick={AddBtnFnt}>Add</button>
            </div>

            {showTable}

        </>)
};


export default App;

