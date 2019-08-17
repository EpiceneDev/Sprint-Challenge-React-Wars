import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import CardContainer from './components/CardContainer'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [id, setId] = useState('1')
  const [data, setData] = useState({})
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get('https://swapi.co/api/people/1')
      .then(res => {
        
        setData(res.data)
        console.log('res.data = ', res.data);
      })
      .catch(err => console.log('API Request error: ', err))
  }, [id]);
  
  // function handleChange(id) {
  //   axios
  //     .get('https://swapi.co/api/people')
  //     .then(res => {
  //       console.log("people axios call: ", res)
  //       res.forEach(count => count==id)
  //     })
  // }
  return (
    <div className="App">
      <input value={id} onChange={e => setId(e.target.value)} />
      <h1 className="Header">React Wars</h1>
      {/* {data.map(item => (<CardContainer data={data} />))} */}
      <CardContainer data={data} />
      {/* <CardContainer name={res.name} species={res.data.species} homeworld={res.data.homeworld} starships={res.data.starships}/> */}
    </div>
  );
}

export default App
