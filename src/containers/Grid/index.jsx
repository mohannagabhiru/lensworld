import React, { useState } from "react";
import './index.css';

const Grid = () => {
    const [selectedList, setSelectedList] = useState([]);
    const [list, setList] = useState([{
        item: 1,
        checked: false,
    },{
        item: 2,
        checked: false,
    },{
        item: 3,
        checked: false,
    },{
        item: 4,
        checked: false,
    },{
        item: 5,
        checked: false,
    },{
        item: 6,
        checked: false,
    },{
        item: 7,
        checked: false,
    }])

    const handleClick = (itemNumber) => {
        if(selectedList.includes(itemNumber)){
            let filteredList = selectedList.filter((item) => item != itemNumber)
            setSelectedList(filteredList);
        }else{
            setSelectedList((selectedList) =>  [...selectedList, itemNumber])
        }
    }
    return (
        <div className="container">
        {
            list.map((item, index) => (
                <div className={`gridItem ${selectedList.includes(index) ? "green" : "yellow"}`} key={index} onClick={() => handleClick(index)}>
                    <p>{item.item}</p>
                </div>
            ))
        }
        {/* <h1>test</h1> */}
        </div>
    )
}

export default Grid