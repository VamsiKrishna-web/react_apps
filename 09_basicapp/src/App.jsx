import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const pets = [
    {
      name: "Puppy",
      type: "Dog",
      image: "/dog_2.jpg",
      skills: ["Barking", "Playing", "Eating"]

    },
    {
      name: "Kitty",
      type: "Cat",
      image: "/cat_1.jpg",
      skills: ["Meowing", "Climbing", "Sleeping"]
    },

    {
      name: "Tammy",
      type: "Dog",
      image: "/dog_1.jpg",
      skills: ["Digging", "Running", "Jumping"]

    },

    {
      name: "Dimy",
      type: "Cat",
      image: "/cat_2.jpg",
      skills: ["Purring", "Hunting", "Scratching"]
    }
  ]
  return (
    //   This is JSXsyntax
    <div>
      <h2> My pets</h2>
      <ul className="container">
        {
          pets.map((pet, index) => (
            <li key={index}>
              <div className="pet-header">
                <h3>{pet.name}</h3>
                <h4>Type {pet.type}</h4>
              </div>
              <div className="pet-body">
                <img src={pet.image} alt={pet.name} width="200" height="200" />

                <ul className="skills">
                  {
                    pet.skills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))
                  }
                </ul>
              </div>


            </li>
          ))
        }
      </ul>
    </div>


  );
}

export default App
