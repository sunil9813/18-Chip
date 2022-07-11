import React, { useState } from "react"
import "./App.css"

function App() {
  const [addTags, setAddTagas] = useState([])

  const createTags = (e) => {
    //setAddTagas([...addTags, e.target.value])
    if (e.key === "Enter") {
      setAddTagas([...addTags, e.target.value])
      // to remove a create tags on click enter
      // enter handa chai feri input chai empty garna ko lage
      e.target.value = ""
    }
  }

  const removeTags = (i) => {
    // Syntax  ====> array.filter((currentValue, index, arr), thisValue)
    setAddTagas(addTags.filter((a, index) => index !== i))
  }
  return (
    <>
      <main>
        <div className='title'>
          <h1>Create a Tags</h1>
        </div>
        <section>
          <div className='tag'>
            {addTags.map((val, index) => {
              return (
                <p key={index}>
                  <label>{val}</label>
                  <i className='fa fa-times' onClick={() => removeTags(index)}></i>
                </p>
              )
            })}
            <input type='text' placeholder='Enter a Key' onKeyUp={createTags} />
          </div>
        </section>
      </main>
    </>
  )
}

export default App
