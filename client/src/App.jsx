import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      
      <input type="text" className='border block px-6 py-2' placeholder='Paste your Link Here ' />
      <button onClick={()=>{
        console.log("hello world")
      }} className='px-5 py-2 border bg-black text-white '>Transform</button>
    </div>
    </>
  )
}

export default App
