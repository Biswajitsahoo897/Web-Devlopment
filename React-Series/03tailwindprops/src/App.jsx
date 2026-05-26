import React from 'react';
import './App.css';
import './index.css';
import Card from './components/Card';


export default function App() {
  // let [username, setUsername] =useState(0);

  let myObj= {
    name: 'Biswajit',
    age: 25,
    city: 'BBSR',
  };
  return (
  <>
    <h2>CARD IMAGE</h2>
    <Card username='Biswajit' mypassObj={myObj}></Card>
    <Card username='Biswajit' btnText='Visit Site'></Card>
  </>
  )
}

