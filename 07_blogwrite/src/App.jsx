import { useState } from 'react'
import './App.css'

import InputEle from './components/TexttEle'

function App() {

  const [content, setContent] = useState("Empty Content")

  const contentChange = (content) => {
    setContent(content)
  }

  return (
    <>
      <InputEle onChangeContent={contentChange} changedcontent={content} changeEle={true} textHeading="Text Content" />
      
      <InputEle changedcontent={content} changeEle={false} textHeading="Changed Content" />

    </>
  )
}

export default App
