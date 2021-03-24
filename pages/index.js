import React, { useEffect, useState } from "react";
import HorizontalLabelPositionBelowStepper from "./stepper";
import RenderHtml from "./RenderHtml";
import Sidebar from "./components/Sidebar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
// import backgroundImage from "../assets/music.jpeg";
import Image from "next/image";

const App = () => {
  const [pluginLoaded, setPluginLoaded] = useState(false);
  const [editor, setEditor] = useState(null);
  const [boilerPlate, setBoilerPlate] = useState(true);
  const [htmlString, setHtmlString] = useState("");
  console.log(boilerPlate);
  console.log("data from back", htmlString);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [theme, setTheme] = useState("");
  const [fontType, setFontType] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [bgImage, setBgImage] = useState("");

  // const imagesForBackground = [{ name: "micro", src: backgroundImage }];

  console.log("title", title);

  function handleSubmit(e) {
    e.preventDefault();
    const result = document.getElementById("templateId").innerHTML;

    var mockData = {
      css:
        "* {box-sizing: border-box;} body {margin: 0;}body{background-color:#00ffbf;}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;font-family:Lato, sans-serif;}.mySlides{display:none;} #navDemo{margin-top:46px;}#icb6y{max-width:2000px;}#i5fof{width:100%;}#ie50u{width:100%;}#igbdv{width:100%;}#band{ max-width:800px;}#irrw5{ width:60%;}#i73nh{width:60%;}#ip3y9{ width:60%;}#i0ta4{max-width:800px;}#ibasws{margin:0 -16px;}#irifok{width:100%;}#ihgjdj{width:100%;}#ilp3jg{width:100%;}#contact{max-width:800px;}#iqfa6u{width:30px;}#iwkvvi{width:30px;}#ii8qfq{width:30px;}#i7oe7g{margin:0 -16px 8px -16px;}.w3-black{ background-color:#189a64;}.w3-justify{font-family:Helvetica, sans-serif;}#iak5oi{height:350px;}.tab{padding-top:7px;padding-right:14px;padding-bottom:7px;padding-left:14px;display:inline-block;border-top-left-radius:3px;border-top-right-radius:3px;border-bottom-right-radius:3px;border-bottom-left-radius:3px;margin-right:10px;}.tab:focus{outline-color:initial;outline-style:none;outline-width:initial;}.tab.tab-active{background-color:rgb(13, 148, 230);color:white;}.tab-container{display:inline-block;}.tab-content{animation-duration:1s;animation-timing-function:ease;animation-delay:0s;animation-iteration-count:1;animation-direction:normal;animation-fill-mode:none;animation-play-state:running;animation-name:fadeEffect;}.tab-contents{min-height:100px;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;}#irbo6v{}@keyframes fadeEffect{ 0%{opacity:0;}100%{opacity:1;}} ",
    };
    localStorage.clear();
    localStorage.setItem("gjs-html", result);
    localStorage.setItem("gjs-css", mockData.css);
  }

  function handleChange(e) {
    setTitle(e.target.value);
    setBgImage(testImage);
  }
  function handleDescription(e) {
    setDescription(e.target.value);
  }

  function handleChangeTheme(e) {
    setTheme(e.target.value);
  }

  function handleChangeFont(e) {
    setFontType(e.target.value);
  }

  function handleSubtitle(e) {
    setSubtitle(e.target.value);
  }

  const testImage = (
    <Image
      src="/music.jpeg"
      alt="Picture of the author"
      width={500}
      height={500}
    />
  );

  function handleBackground(e) {
    setBgImage(e.target.src);
  }

  useEffect(() => {
    const grapesjs = require("grapesjs");
    const presetWeb = require("grapesjs-preset-webpage");
    const basicBlocks = require("grapesjs-blocks-basic");
    const e = grapesjs.init({
      container: "#example-editor",
      styleManager: {
        sectors: [
          {
            name: "My Style 1",
            buildProps: ["width", "min-height"],
          },
          {
            name: "My Style 2",
            buildProps: ["background-color", "box-shadow"],
          },
        ],
      },
      fromElement: true,
      plugins: ["gjs-blocks-basic", "gjs-preset-webpage"],
      panels: {
        defaults: [],
      },
    });
    e.Keymaps.removeAll();

    // const blockManager = e.BlockManager;
    // blockManager.add("some-block-id", {
    //   label: `<div>
    //       <img src="https://picsum.photos/70/70"/>
    //       <div class="my-label-block">Label block</div>
    //     </div>`,
    //   content: "<div>...</div>",
    //   render: ({ model, className }) => `<div class="${className}__my-wrap">
    //       Before label
    //       ${model.get("label")}
    //       After label
    //     </div>`,
    // });
  });

  return (
    <>
      {boilerPlate ? (
        <div className="container">
          <div className="sidebar">
            <Sidebar
              bgImage={bgImage}
              handleBackground={handleBackground}
              handleChangeFont={handleChangeFont}
              fontType={fontType}
              handleChangeTheme={handleChangeTheme}
              description={description}
              handleDescription={handleDescription}
              handleSubmit={handleSubmit}
              setBoilerPlate={setBoilerPlate}
              title={title}
              handleChange={handleChange}
              handleSubtitle={handleSubtitle}
              subtitle={subtitle}
            />
          </div>
          <div className="main">
            <RenderHtml
              bgImage={bgImage}
              fontType={fontType}
              description={description}
              theme={theme}
              title={title}
              setBoilerPlate={setBoilerPlate}
              subtitle={subtitle}
            />
          </div>
        </div>
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            <div>
              <TextField
                style={{ display: "block", marginTop: 5 }}
                size="small"
                value={title}
                // onChange={handleChange}
                id="outlined-basic"
                label="Name your site"
                variant="outlined"
              />{" "}
              <Button
                style={{ display: "b lock", marginTop: 5, marginBottom: 5 }}
                type="submt"
                variant="contained"
                color="primary"
                size="small"
              >
                Apply Changes
              </Button>
            </div>
          </form>
          <div id="example-editor" />
          <HorizontalLabelPositionBelowStepper />
        </>
      )}
    </>
  );
};

export default App;
