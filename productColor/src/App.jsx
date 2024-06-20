import { useState } from 'react'
import './App.css'


import MainComponent from './components/body/main.component'



function App() {
  const [backgroundColor,setbackgroundColor]=useState('white')
  const colorChange=(color)=>{
    setbackgroundColor(color)
  } 
  const [count, setCount] = useState(0)
  const click=()=>{
    setCount(count+1)
   
  }

  return (
    <div style={{backgroundColor}}>

    <MainComponent/>
    {/* <button onClick={click}>count {count}</button>
    <button onClick={()=>colorChange('green')}>click</button> */}
      
    </div>
  )
}

export default App
