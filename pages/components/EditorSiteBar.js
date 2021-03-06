import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import Gallery from "./Gallery";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
}));

function EditorSiteBar({
  handleChangeFont,
  fontType,
  theme,
  handleChangeTheme,
  description,
  handleChange,
  handleSubmit,
  title,
  setBoilerPlate,
  handleDescription,
  subtitle,
  handleBackground,
  editor,
}) {
  const classes = useStyles();

  const handleEditorSubmit = (e) => {
    console.log("working");
  };

  const handleEditorChange = (e) => {
    const cmp = editor.getWrapper().find(".w3-wide")[0];
    cmp && cmp.components(e.target.value);
  };

  const handleEditorSubtitle = (e) => {
    const cmp = editor.getWrapper().find(".w3-opacity")[0];
    cmp && cmp.components(e.target.value);
  };

  // implement later
  const handleEditorDescription = (e) => {
    const cmp = editor.getWrapper().find("#ioazj")[0];
    cmp && cmp.components(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleEditorSubmit}>
        <div>
          <TextField
            style={{ display: "block", marginTop: 5 }}
            size="small"
            value={title}
            onChange={handleEditorChange}
            id="outlined-basic"
            label="Name your site"
            variant="outlined"
          />
          <TextField
            style={{ display: "block", marginTop: 5 }}
            size="small"
            value={subtitle}
            onChange={handleEditorSubtitle}
            id="outlined-basic"
            label="Add a subtitle"
            variant="outlined"
          />

          <TextareaAutosize
            style={{ display: "block", marginTop: 5 }}
            value={description}
            onChange={handleEditorDescription}
            aria-label="empty textarea"
            placeholder="Desbribe your site"
          />
        </div>
      </form>
    </>
  );
}

export default React.memo(EditorSiteBar);
