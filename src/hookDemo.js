import React from "react";
import ReactDOM from "react-dom";
import {useState} from 'react'


function Hook() {
    const [count, setCount] = useState(1);
    const add =()=>{
        setCount(count+1)
    }
    return (
        <div>
            <div>{count}</div>
            <div>
                <button onClick={add}>+1</button>
            </div>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Hook />, rootElement);
export default Hook