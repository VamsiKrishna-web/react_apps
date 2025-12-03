import { useState } from 'react'

import './App.css'
import Card from '../components/Card'

function App() {
  const [count, setCount] = useState(0)
  let img_url="\prod_manager.jpeg"
  const img_url_2="\sale_manager.jpg"
  return (
    <>
    <Card role="Product Manager"  btnText="Message" im_url={img_url} username="Angelo Mawyes" />
    <Card  role="Sales Manager" btnText="Visit me" im_url={img_url_2} username="Erin Lindford" />
    </>
  )
}

export default App
