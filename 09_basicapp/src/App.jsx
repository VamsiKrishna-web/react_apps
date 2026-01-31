import { useState, useEffect } from "react";

import "./App.css";
import Hello from "./components/Heading";
function displayDate() {
  return new Date().toLocaleString();
}

const App = () => {
  const [date, setDate] = useState(new Date());
  const [count, setCount] = useState(0);
  function updateDate() {
    setInterval(() => {
      setDate(new Date());
    }, 2000);
    // console.log(date.toLocaleString());
    return date.toLocaleString();
  }

  setInterval(() => {
    setDate(new Date());
  }, 1000);

  useEffect(() => {
    console.log("Date use Effect called !!");
    setCount(0);
  }, []);

  useEffect(() => {
    if (count < 59) {
      setCount(count + 1);
    } else {
      setCount(0);
    }

    return function cleanUp() {
      // console.log("callup() called");
      // console.log(count);
      setCount(0);
    };
  }, [date.getSeconds()]);

  const pets = [
    {
      name: "Puppy",
      type: "Dog",
      image: "/dog_2.jpg",
      skills: ["Barking", "Playing", "Eating"],
    },
    {
      name: "Kitty",
      type: "Cat",
      image: "/cat_1.jpg",
      skills: ["Meowing", "Climbing", "Sleeping"],
    },

    {
      name: "Tammy",
      type: "Dog",
      image: "/dog_1.jpg",
      skills: ["Digging", "Running", "Jumping"],
    },

    {
      name: "Dimy",
      type: "Cat",
      image: "/cat_2.jpg",
      skills: ["Purring", "Hunting", "Scratching"],
    },
  ];

  const jsxEle = <h1> Hello from react</h1>;
  function ulChildren() {
    const listItems = [];
    let listStr = new String("");
    for (let i = 0; i < pets.length; i++) {
      listItems.push(<li key={i}>{pets[i].name} </li>);
      listStr += new String(`<li>${pets[i].name}</li>`);
    }
    // console.log(listStr);
    return listStr;
  }
  const divEle = (
    <div>
      <Hello />
      {/* {setInterval(() => {
      setDate(new Date());
    }, 1000)} */}
      <h2>Current date is {date.toLocaleString()}</h2>
      <h2>Counter :{count}</h2>
      <ul className="container">
        {pets.map((pet, index) => (
          <li key={index}>
            <div className="pet-header">
              <h3>{pet.name}</h3>
              <h4>Type {pet.type}</h4>
            </div>
            <div className="pet-body">
              <img src={pet.image} alt={pet.name} width="200" height="200" />

              <ul className="skills">
                {pet.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
      <ul>{ulChildren()}</ul>
    </div>
  );
  // console.log(jsxEle);
  // console.log(divEle);
  // console.log(ulChildren());
  return (
    //   This is JSXsyntax
    divEle
  );
};

export default App;
