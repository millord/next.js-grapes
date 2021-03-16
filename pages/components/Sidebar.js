import React from 'react'

export default function Sidebar({description,handleChange, handleSubmit, title,setBoilerPlate, handleDescription}) {
  
  return (
    <div>
      <h1>This is the sidebar</h1>
      <form onSubmit={handleSubmit}>
     <input  value={title} type="text" onChange={handleChange} />
     <button type="submit">Apply Changes</button>
     <textarea value={description} onChange={handleDescription}/>
  </form>
     <form > 
     <button type="submit" onClick={() => setBoilerPlate(false)}>next step</button>
     </form>
    </div>
  )
}
