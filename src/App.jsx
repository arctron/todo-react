import { useState } from 'react'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <center>
        <h1>To Do List</h1>
        <div>
          <button onClick={() => setCount((count) => count + 1)}>
           count is {count}
         </button>
        </div>
      </center>
    </>
  )
}

export default App
