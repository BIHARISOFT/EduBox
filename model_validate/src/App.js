import { useState } from 'react';
import './App.css';
import { countryList, DetailsModel, monthNames, RangeData, ValidateMyModel, RequiredFiledModel } from './Model/Model';

function App() {

    const [modelData, setModelData] = useState(DetailsModel);

    const { Name, Gender, Phone, Birthdate, BirthdateMonth, BirthdateYear,TermsCondition,Street,Nationality,City,Country } = modelData;

    const onInputChange = (event) => {

        const { name, value } = event.target;

        if (name === "TermsCondition") {
            if (event.target.checked) {

                setModelData((pre) => ({ ...pre, [name]: true }));
            }
            else {
                setModelData((pre) => ({ ...pre, [name]: false }));
            }
           
        }
        else {
            setModelData((pre) => ({ ...pre, [name]: value }));
        }
       
        console.log(modelData)
    }

    const submitData = () => {

        const ErrorList = ValidateMyModel(modelData, RequiredFiledModel);

        console.log(ErrorList)
        if (ErrorList.length === 0) {

            if (TermsCondition) {
                alert("Data Successfully Saved")
            }
            else {
                alert("Please accept Terms and Condition");
            }
        }
        else {
            alert(ErrorList.toString());
        }
        

    }

  return (
      <>
          
          <div className="main-block">
              <div className="formBody">
                      <h1>Model Validate Example</h1>                     
                      <fieldset>
                          <legend>
                              <h3>Personal Details</h3>
                          </legend>
                          <div className="personal-details">
                          <div>
                              <div><label>Name*</label><input type="text" name="Name" value={Name } onChange={(e) => { onInputChange(e)} } /></div>
                              <div><label>Phone*</label><input type="text" name="Phone" value={Phone} onChange={(e) => { onInputChange(e)} } /></div>
                              <div><label>Street</label><input type="text" name="Street" value={Street } onChange={(e) => { onInputChange(e)} } /></div>
                              <div><label>City*</label><input type="text" name="City" value={City } onChange={(e) => { onInputChange(e)} } /></div>
                                  <div>
                                  <label>Country*</label>
                                  <select name="Country" value={Country} onChange={(e) => { onInputChange(e) }} >
                                          <option value=""></option>
                                      {countryList.map((item, index) => (
                                          <option key={index + "Country"} value={item} >{item}</option>
                                      ))}
                                      </select>
                                  </div>
                                  
                              </div>
                              <div>
                                  <div>
                                      <label>Gender*</label>
                                      <div className="gender">
                                      <input type="radio" value="Male" id="male" name="Gender"  onChange={(e) => { onInputChange(e)} } />
                                          <label htmlFor="male" className="radio">Male</label>
                                      <input type="radio" value="Female" id="female" name="Gender"  onChange={(e) => { onInputChange(e)} } />
                                          <label htmlFor="female" className="radio">Female</label>
                                      </div>
                                  </div>
                                  <div className="birthdate">
                                      <label>Birthdate*</label>
                                  <div className="bdate-block">
                                      <select className="day" name="Birthdate" value={Birthdate} onChange={(e) => { onInputChange(e) }} >
                                          <option value=""></option>
                                          {
                                              RangeData(1,31)?.map((item, index) => (

                                                  <option key={index + "Date"} value={"0" + item}>{"0" + item}</option>

                                          ))                              
                                          }   
                                          </select>
                                      <select className="month" value={BirthdateMonth} name="BirthdateMonth" onChange={(e) => { onInputChange(e)} } >
                                          <option value=""></option>
                                          {monthNames.map((item, index) => (
                                              <option key={index + "month"} value={item} >{item}</option>
                                          ))}
                                          </select>
                                      <input type="text" name="BirthdateYear" value={BirthdateYear } onChange={(e) => { onInputChange(e)} } />
                                      </div>
                                  </div>
                                  <div>
                                      <label>Nationality*</label>
                                  <select name="Nationality" value={Nationality} onChange={(e) => { onInputChange(e)} } >
                                      <option value=""></option>
                                      {countryList.map((item, index) => (
                                          <option key={index + "Nationality"} value={item} >{item }</option>
                                          ))}
                                      </select>
                                  </div>                                  
                              </div>
                          </div>
                      </fieldset>
                      <fieldset>
                          <legend>
                              <h3>Terms and Condition</h3>
                          </legend>
                          <div className="terms-mailing">
                          <div className="checkbox">
                              <input type="checkbox" name="TermsCondition" checked={TermsCondition} onChange={(e) => { onInputChange(e) }} /><span>I accept the <a href="https://biharisoft.com/EduBox/">Biharisoft</a></span>
                              </div>                          
                              </div>
                  </fieldset>
                  <button type="submit" onClick={() => { submitData()} }>Submit</button>
              </div>
              </div>
         
      </>
  );
}

export default App;
