
import './App.css';
import React, { useRef } from 'react';

function App() {

    const ref = useRef([]);

    const onInputChange = (e) => {
      
        ref.current[parseInt(e.currentTarget.attributes['refindex'].value)].value =e.target.value;
       

    }

    const ShowValue = () => {

        const myInputValue = [];
        for (let i = 0; i < ref.current.length; i++) {

            myInputValue.push({
                [ref.current[i].name]: ref.current[i].value
            })
            
        }
        console.log(myInputValue);
    }
    const ClearValue = () => {

        for (let i = 0; i < ref.current.length; i++) {

            ref.current[i].value = 0;
        }

    }


  return (
      <>
          <div style={{ width: '50%', backgroundColor: '#f7f4f3', marginLeft: '150px', marginTop: '100px', padding: '50px 0px 100px 50px' }}>
              <label><b>Money</b></label>  <input ref={(element) => { ref.current[0] = element }} refindex={0} name='ModeyValue' defaultValue='123464' type='text' onChange={onInputChange} /> <br />
              <label><b>Money</b></label>  <input ref={(element) => { ref.current[1] = element }} refindex={1} name='ModeyValue' defaultValue='123' type='text' onChange={onInputChange} /> <br />
              <label><b>Money</b></label>  <input ref={(element) => { ref.current[2] = element }} refindex={2} name='ModeyValue' defaultValue='1' type='text' onChange={onInputChange} /> <br />
              <label><b>Money</b></label>  <input ref={(element) => { ref.current[3] = element }} refindex={3} name='ModeyValue' defaultValue='1234' type='text' onChange={onInputChange} /> <br />

              <button style={{ padding: '5px', backgroundColor: 'green', border: 'none', margin: '5px 5px 5px 5px' }} onClick={ShowValue}>Check All Input Value in Form of Array</button>

              <button style={{ padding: '5px', backgroundColor: 'red', border: 'none', margin: '5px 5px 5px 5px' }} onClick={ClearValue}>Clear all Input Value</button>
          </div>
      </>
  );
}

export default App;
