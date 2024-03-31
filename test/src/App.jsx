import { useState } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<div>
  <p className='headName'><b>QPICK</b></p>
  <img src={'pics/Vector.jpg'} className='headPics firstPic' ></img>
  <img src={'pics/VectorKorz.jpg'} className='headPics'></img>
</div>



    </>
  )
}

export default App
