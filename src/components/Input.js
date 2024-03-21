import React, { useState } from 'react';
import "./input.css";
import { AiOutlinePlusCircle } from "react-icons/ai";

const Input = (props) => {

    const [inputText, setInputText] = useState("");

    return (
        <div className='input-container'>
            <input type='text' 
            className='box-container' 
            placeholder= {inputText ? '' : 'Enter Your ToDo'}
            value={inputText}
            onChange={e =>setInputText(e.target.value)} 
            />
            
            <button className='btn' 
            onClick={()=>{props.addList(inputText);
            setInputText(" ");
            }}>
                <AiOutlinePlusCircle />
            </button>
             
        </div>
    );
};

export default Input;