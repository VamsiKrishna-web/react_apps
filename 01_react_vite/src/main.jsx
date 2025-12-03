import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


function MyApp(){

  return (
    <>
    <h3>React series</h3>
    </>
  )
}

createRoot(document.getElementById('root')).render(

    <App />
    
  
)
createRoot(document.getElementById('h3')).render(
  <MyApp />
)
