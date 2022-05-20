import React, {useState} from 'react';
import Form from './components/FormComponent';
import List from './components/ListComponent';
import './App.css';


export interface IState {
  people: {
    name:string,
    age:number,
    bio:string
  }[]
}
function App() {
  const [people, setPeople]=useState<IState['people']>([{name:"Cuong",age:20,bio:"FE"}])
  return (
    <div className="container">
      <Form people={people} update={setPeople}/>
      <List people={people}/>
    </div> 
  );
}

export default App;
