import { useState } from 'react';
import './App.css';

const selectOptionOne = [
    {
        Name: 'Krishna',
        value: 'God'
    },
    {
        Name: 'Tiger',
        value: 'Animal'
    },
    {
        Name: 'Ram',
        value: 'Load'
    },
    {
        Name: 'Mountan',
        value: 'Solid'
    },
    {
        Name: 'Tree',
        value: 'Life'
    }

];
const selectOptionTwo = [
    {
        Name: 'Hanuman',
        value: 'GodLover'
    },
    {
        Name: 'Sita',
        value: 'Goddes'
    },
    {
        Name: 'Laptop',
        value: 'Material'
    },
    {
        Name: 'Shiva',
        value: 'Creater'
    },
    {
        Name: 'Buddha',
        value: 'KnowledgeOfPeace'
    }

];


function App() {


    const [firstSelectList, setFirstSelectList] = useState(selectOptionOne);
    const [secondSelectList, setSecondSelectList] = useState(selectOptionTwo);

    const [temSelectedList, setTemSelectedList] = useState([]);

    const [currentSelectedListNm, setCurrentSelectedListNm] = useState('');

    const handleChange = (e,lstName) => {

        const temp = Array.from(e.target.selectedOptions);
        setTemSelectedList(temp);
        setCurrentSelectedListNm(() => (lstName))
    };


    const moveAllValRight = () => {
        setFirstSelectList([]);
        setSecondSelectList([...firstSelectList, ...secondSelectList]);
    };
    const moveAllValLeft = () => {

        setSecondSelectList([]);
        setFirstSelectList([...firstSelectList, ...secondSelectList]);

    };


    const moveSelectedValueRight = () => {
        const dataListRight = [];   

        if (temSelectedList !== null && currentSelectedListNm === 'LeftList') {
            let filterList = firstSelectList;
            temSelectedList.map((item) =>

                (filterList = filterList.filter((x) => x.value !== item.value))
            );                       

            setFirstSelectList(filterList);
            

            temSelectedList.map((item) => {

                dataListRight.push(
                firstSelectList.find((data) => (
                   data.value === item.value
                  ))
                );

            });

          
          
            setSecondSelectList([...secondSelectList, ...dataListRight]);

            setTemSelectedList(null);
        }
    };
    const moveSelectedValueLeft = () => {

        const dataListLeft = []; 

        if (temSelectedList !== null && currentSelectedListNm ==='RightList') {
            let filterList = secondSelectList;
            temSelectedList.map(
                (item) => (filterList = filterList.filter((x) => x.value !== item.value))
            );
            setSecondSelectList(filterList);

            temSelectedList.map((item) => {

                dataListLeft.push(
                    secondSelectList.find((data) => (
                        data.value === item.value
                    ))
                );

            });

            setFirstSelectList([...firstSelectList, ...dataListLeft]);
            setTemSelectedList(null);
        }
    };
   

    

    return (
        <>
            <div className='select-parent'>
                <div className='SelctDiv'>
                    <select className='select-tag' name="cars" multiple aria-label="label for the select Left" onChange={(e) => {
                        handleChange(e,'LeftList');
                    }}>
                        {firstSelectList.map((data, index) => (

                            < option key={index + data.value} value={data.value} >{data.Name}</option>
                        ))
                        }</select>
                </div>
                <div className='select-btn-div'>
                    <button onClick={() => { moveAllValRight() }}>{`>>`}</button>
                    <button onClick={() => { moveSelectedValueRight() }}>{`>`}</button>
                    <button onClick={() => { moveSelectedValueLeft() }}>{`<`}</button>
                    <button onClick={() => { moveAllValLeft() }}>{`<<`}</button>

                </div>
                <div className='SelctDiv'>
                    <select className='select-tag' name="cars" multiple aria-label="label for the select Right" onChange={(e) => {
                        handleChange(e, 'RightList');
                    }}>
                        {secondSelectList.map((data, index) => (

                            < option key={index + data.value} value={data.value} >{data.Name}</option>
                        ))
                        }
                    </select>
                </div>
            </div>
        </>
    );
}

export default App;
