import { useState, useCallback, useEffect, useRef } from 'react'

import './App.css'

function App() {
  let [length, setLength] = useState(8);
  let [numberAllowed, setNumberAllowed] = useState(false);
  let [charAllowed, setCharAllowed] = useState(false);
  let [password, setPassword] = useState("");
  let passwordRef = useRef(null);

  let copytoClipboard = useCallback(() => {

    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 20);
    let select_text = window.getSelection().toString();
    // console.log(passwordRef.current)
    window.navigator.clipboard.writeText(select_text);
  }, [password])
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) {
      str += "123456789"
    }
    if (charAllowed) {
      str += "~!@#$%&*)`({}[]"

    }

    for (let i = 1; i <= length; i++) {

      let char = Math.random() * str.length + 1
      pass += str.charAt(char)

    }
    password = setPassword(pass);



  }, [length, numberAllowed, charAllowed, setPassword])

  useEffect(() => {

    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <div className='flex justify-center text-white px-3  '>
      <div className='w-xl h-auto px-3  bg-[#696969] rounded-lg shadow-lg py-2 '>
        <h1 className='py-2'>Password Generator</h1>
        <div className='flex gap-2 justify-center'>
          <input className='outline-2 outline-green-500 py-1 w-sm'
            type="text"
            id="name"
            name="name"
            value={password}
            readOnly
            ref={passwordRef}

          />
          <button onClick={copytoClipboard} className='bg-blue-500 rounded px-3'> Copy</button>
        </div>

        <div className='flex gap-2 justify-center py-2' >
          <input onChange={(e) => { setLength(e.target.value) }} type="range" id="vol" name="vol" min="1" max="100" ></input>
          <label >Length:{length}</label>
          <input onChange={(e) => { setNumberAllowed((prev) => !prev); console.log(e.target.value) }} type="checkbox" id="Number" name="number" value="false"></input>
          <label htmlFor="Number">Number</label>
          <input onChange={(e) => { setCharAllowed((prev) => !prev) }} type="checkbox" id="Character" name="character" value="false"></input>
          <label htmlFor="Number">Character</label>


        </div>


      </div>

    </div>
  )
}

export default App
