import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';

function App() {
    const ref = useRef([]);

    const checkboxvalue = (e) => {
        console.log(e.target.value)
    }

    const Unchecked = () => {

        console.log(ref.current.length)
        for (let i = 0; i < ref.current.length; i++) {

            ref.current[i].checked = false;
        }
      
    }
    const Checked = () => {

        console.log(ref.current.length)
        for (let i = 0; i < ref.current.length; i++) {

            ref.current[i].checked = true;
        }
      
    }

    return (
        <>
            <div style={{ width: '50%', backgroundColor: '#f7f4f3', marginLeft: '150px', marginTop: '100px', padding: '50px 0px 100px 50px' }}>
                <input ref={(element) => { ref.current[0] = element }} value='12' type='checkBox' onChange={checkboxvalue} /> <br />
                <input ref={(element) => { ref.current[1] = element }} value='123' type='checkBox' onChange={checkboxvalue} /> <br />
                <input ref={(element) => { ref.current[2] = element }} value='1' type='checkBox' onChange={checkboxvalue} /> <br />
                <input ref={(element) => { ref.current[3] = element }} value='1234' type='checkBox' onChange={checkboxvalue} /> <br />

                <button style={{ padding: '5px', backgroundColor: 'green', border: 'none', margin:'5px 5px 5px 5px' }} onClick={Unchecked}>Unchecked</button>

                <button style={{ padding: '5px', backgroundColor: 'red', border: 'none', margin: '5px 5px 5px 5px' }} onClick={Checked}>Checked</button>
            </div>
        </>);
}

export default App;
