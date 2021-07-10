import React, { useState, useEffect } from 'react';
import Header from "./components/Header";
import Form from "./components/Form";
import WorkList from "./components/WorkList";
import './App.css';

const App = () => {

    const initialState = JSON.parse(localStorage.getItem("works")) || [];
    const [input, setInput] = useState("");
    const [works, setWorks] = useState(initialState);
    const [editWork, setEditWork] = useState(null);

    useEffect(() =>{
      localStorage.setItem("works", JSON.stringify(works));
    }, [works]);
  return (
  <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form 
             input={input}
             setInput={setInput}
             works={works}
             setWorks={setWorks}
             editWork={editWork}
             setEditWork={setEditWork}
          />
        </div>
        <div>
          <WorkList 
          works={works} 
          setWorks={setWorks}
          setEditWork={setEditWork}
          />
        </div>
      </div>
    </div>
    );
};

export default App;

/* Linha 16 foi colocado os input,setinput,works,setwork para se tornar
   uma variável usada */