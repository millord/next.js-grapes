import React, { useEffect, useState} from "react";
import HorizontalLabelPositionBelowStepper from "./stepper";
import  RenderHtml from "./RenderHtml";



const App = () => {
  const [pluginLoaded, setPluginLoaded] = useState(false);
  const [editor, setEditor] = useState(null);
  const [boilerPlate, setBoilerPlate] = useState(true)
  const [htmlString, setHtmlString] = useState('')
  console.log(boilerPlate)
  console.log("data from back", htmlString)
  
 
  


 
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
    
  
      {boilerPlate ? <RenderHtml setBoilerPlate={setBoilerPlate}/> :  (<><div id="example-editor" /><HorizontalLabelPositionBelowStepper/></>)
      
      }
    </>
  );
};

export default App;
