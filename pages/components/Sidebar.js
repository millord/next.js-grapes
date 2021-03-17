import React from 'react'
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';





export default function Sidebar({description,handleChange, handleSubmit, title,setBoilerPlate, handleDescription}) {
  
  return (
    <>
    
      <h5>Create your site</h5>
      <p>We’ll use this info to get started with your site. You can change it later.</p>
      <form  onSubmit={handleSubmit}>
      <div>
      <TextField size="small" value={title} onChange={handleChange} id="outlined-basic" label="Name your site" variant="outlined" />
     
    
     <TextareaAutosize style={{display:"block", marginTop:5}} value={description} onChange={handleDescription} aria-label="empty textarea" placeholder="Desbribe your site" />
     <Button style={{display:"block", marginTop:5, marginBottom:5}} type="submt" variant="contained" color="primary" size="small">
       Apply Changes
      </Button>
     </div>
  </form>
     <form > 
     <Button style={{display:"block", marginTop:5}} onClick={() => setBoilerPlate(false)} type="submt"  variant="contained" color="primary" size="small">
     Go to site builder
      </Button>
     </form>
    </>
  )
}
