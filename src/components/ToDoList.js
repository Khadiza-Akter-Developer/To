import React from 'react';
import "./list.css";
import { MdDelete } from "react-icons/md";


const ToDoList = (props) => {
    return (
        <li className='list-container'>
         {props.item} 

          <span className='delete-container'>
        <i className='icon'> <MdDelete /> </i>  
          </span>  
        </li>
    );
};

export default ToDoList;