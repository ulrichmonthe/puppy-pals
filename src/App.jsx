import { useState } from 'react'
import './App.css'
import {puppyList} from './data.js'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  function handleClick() {
    // some logic here
  }


  return (
    <div className="App">
      <h1>Puppy Pals</h1>
      {puppies.map((puppy) => (
        <p
          key={puppy.id}
          onClick={() => setFeatPupId(puppy.id)}
          style={{ cursor: 'pointer', color: featPupId === puppy.id ? 'blue' : 'black' }}
        >
          {puppy.name}
        </p>
      ))}
      {featPupId && featuredPup && (
        <div>
          <h2>Featured Puppy: {featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default App
