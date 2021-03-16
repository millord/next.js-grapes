import React, { useEffect, useState} from "react";
import HorizontalLabelPositionBelowStepper from "./stepper";
import  RenderHtml from "./RenderHtml";
import Sidebar from "./components/Sidebar";



const App = () => {
  const [pluginLoaded, setPluginLoaded] = useState(false);
  const [editor, setEditor] = useState(null);
  const [boilerPlate, setBoilerPlate] = useState(true)
  const [htmlString, setHtmlString] = useState('')
  console.log(boilerPlate)
  console.log("data from back", htmlString)
  const [title, setTitle] = useState("My Site Title")
  const [description, setDescription] = useState("The Description of your site here.")
  
 
  
   
    
    console.log("title", title)

     function handleSubmit(e){
      e.preventDefault()
      const result = document.getElementById("templateId").innerHTML
      
      var mockData = {
        "css": "* {box-sizing: border-box;} body {margin: 0;}body{background-color:#00ffbf;}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;font-family:Lato, sans-serif;}.mySlides{display:none;} #navDemo{margin-top:46px;}#icb6y{max-width:2000px;margin-top:46px;}#i5fof{width:100%;}#ie50u{width:100%;}#igbdv{width:100%;}#band{ max-width:800px;}#irrw5{ width:60%;}#i73nh{width:60%;}#ip3y9{ width:60%;}#i0ta4{max-width:800px;}#ibasws{margin:0 -16px;}#irifok{width:100%;}#ihgjdj{width:100%;}#ilp3jg{width:100%;}#contact{max-width:800px;}#iqfa6u{width:30px;}#iwkvvi{width:30px;}#ii8qfq{width:30px;}#i7oe7g{margin:0 -16px 8px -16px;}.w3-black{ background-color:#189a64;}.w3-justify{font-family:Helvetica, sans-serif;}#iak5oi{height:350px;}.tab{padding-top:7px;padding-right:14px;padding-bottom:7px;padding-left:14px;display:inline-block;border-top-left-radius:3px;border-top-right-radius:3px;border-bottom-right-radius:3px;border-bottom-left-radius:3px;margin-right:10px;}.tab:focus{outline-color:initial;outline-style:none;outline-width:initial;}.tab.tab-active{background-color:rgb(13, 148, 230);color:white;}.tab-container{display:inline-block;}.tab-content{animation-duration:1s;animation-timing-function:ease;animation-delay:0s;animation-iteration-count:1;animation-direction:normal;animation-fill-mode:none;animation-play-state:running;animation-name:fadeEffect;}.tab-contents{min-height:100px;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;}#irbo6v{border:solid #000000;}@keyframes fadeEffect{ 0%{opacity:0;}100%{opacity:1;}} "
      }
     localStorage.clear()
      localStorage.setItem('gjs-html', result)
      localStorage.setItem('gjs-css', mockData.css)    
    }
    
   function handleChange(e){
     setTitle(e.target.value)
     
   }
   function handleDescription(e){
     setDescription(e.target.value)
   }

 
  useEffect(() => {
      const grapesjs = require('grapesjs') 
      const presetWeb  = require('grapesjs-preset-webpage')
      const basicBlocks = require('grapesjs-blocks-basic')
      const e = grapesjs.init({
        container: '#example-editor',
        fromElement: true,
        plugins: ["gjs-blocks-basic", 'gjs-preset-webpage']
       
      });
     
  });
  

  return (
    <>
    
  
      {boilerPlate ?  <div className="container"><div className="sidebar"><Sidebar description={description} handleDescription={handleDescription} handleSubmit={handleSubmit} setBoilerPlate={setBoilerPlate} title={title}  handleChange={handleChange} /></div><div className="main"><RenderHtml description={description} title={title} setBoilerPlate={setBoilerPlate}/></div></div> :  (<><div id="example-editor" /><HorizontalLabelPositionBelowStepper/></>)
      
      }
    </>
  );
};

export default App;
