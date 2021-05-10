import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);

  function Add() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <input type="text" value={value} onChange={(e)=> setValue(e.target.value)} />
            <button type="submit" name="submit" onSubmit={onSubmit} >Hozzáadás</button>
          </div>
        </div>
      </div>
    );
  }

  function onSubmit(){
    const todo = value;
    setList(currentList => [...currentList, todo]);
  }

  function keyGen(){
    return Math.floor(Math.random()*10000);
  }



  function List() {
    const listItems = list.map(element => element != null ?(
      <div className="listContainer">
        <div className="row">
          <div className="col-sm-3">
            <input type="checkbox" value="remove" />
            <li key={keyGen}>{element}</li>
            <button onClick={}>Törlés</button>
          </div>
        </div>
      </div>
    ) : null);
      return (
        <>
          <ul>{listItems}</ul>
        </>
      )
  }

  return (
    <div>
      <h2>TODO App</h2>
      <Add />
      <List />
    </div>
  );
}
