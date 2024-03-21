import React, { useState } from 'react';
import "./App.css";
import Input from './components/Input';
import ToDoList from './components/ToDoList';

function App () {

  const [toDoList, setToDoList] =useState([]);
  let addList= (inputText) =>{setToDoList([...toDoList,inputText])};
  return (
    <div className='main-container'>
      <div className='center-container'>
        <Input addList={addList}/>
        <h3 className='container'>This is your ToDo List</h3>

       {toDoList.map((listItem, i)=>{
          return(
            <ToDoList key={i} item ={listItem}/>
          )
        })} 

      </div>
    </div>
  );
};

export default App;