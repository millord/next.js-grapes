import React from 'react'
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';





export default function Sidebar({handleChangeFont, fontType, theme, handleChangeTheme, description,handleChange, handleSubmit, title,setBoilerPlate, handleDescription}) {
  
  return (
    <>
    
      <h5>Create your site</h5>
      <p>We’ll use this info to get started with your site. You can change it later.</p>
      <form  onSubmit={handleSubmit}>
      <div>
      <TextField size="small" value={title} onChange={handleChange} id="outlined-basic" label="Name your site" variant="outlined" />
     
    
     <TextareaAutosize style={{display:"block", marginTop:5}} value={description} onChange={handleDescription} aria-label="empty textarea" placeholder="Desbribe your site" />
     <hr/>
     
     <InputLabel   id="demo-simple-select-placeholder-label-label">
          Theme
        </InputLabel>
     <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={theme}
          onChange={handleChangeTheme}
          
        >
          <MenuItem value={"orange"}>Orange</MenuItem>
          <MenuItem value={"purple"}>Purple</MenuItem>
        </Select>
    
   
     <hr/>
     <InputLabel   id="demo-simple-select-placeholder-label-label">
          Font Family
        </InputLabel>
     <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={fontType}
          onChange={handleChangeFont}
          
        >
          <MenuItem value={"sans-serif"}>Sans-serif</MenuItem>
          <MenuItem value={"cursive"}>Cursive</MenuItem>
          <MenuItem value={"emoji"}>Emoji</MenuItem>
          <MenuItem value={"monospace"}>Monospace</MenuItem>
          
        </Select>
     <hr/>
     <Button style={{display:"b lock", marginTop:5, marginBottom:5}} type="submt" variant="contained" color="primary" size="small">
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
