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
import ProgressMobileStepper from "./progressStepper";

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

function Sidebar({
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
  handleSubtitle,
  subtitle,

  handleBackground,
}) {
  const classes = useStyles();

  return (
    <>
      <h5>Create your site</h5>
      <p>
        We’ll use this info to get started with your site. You can change it
        later.
      </p>
      <form onSubmit={handleSubmit}>
        <div>
          <TextField
            style={{ display: "block", marginTop: 5 }}
            size="small"
            value={title}
            onChange={handleChange}
            id="outlined-basic"
            label="Name your site"
            variant="outlined"
          />
          <TextField
            style={{ display: "block", marginTop: 5 }}
            size="small"
            value={subtitle}
            onChange={handleSubtitle}
            id="outlined-basic"
            label="Add a subtitle"
            variant="outlined"
          />

          <TextareaAutosize
            style={{ display: "block", marginTop: 5 }}
            value={description}
            onChange={handleDescription}
            aria-label="empty textarea"
            placeholder="Desbribe your site"
          />

          <h5>Set your cover image</h5>
          <p>Click to upload your cover image</p>
          <div className={classes.root}>
            <form>
              <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
              />
              <label htmlFor="contained-button-file">
                <Button
                  onClick={handleBackground}
                  style={{ marginTop: 4, marginLeft: -10 }}
                  variant="contained"
                  color="primary"
                  component="span"
                >
                  Add an image for you site
                </Button>
              </label>
            </form>
            <Gallery handleBackground={handleBackground} />
          </div>

          <hr />

          <InputLabel id="demo-simple-select-placeholder-label-label">
            Theme
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={theme}
            onChange={handleChangeTheme}
          >
            <MenuItem value={"yellow"}>Yellow</MenuItem>
            <MenuItem value={"purple"}>Purple</MenuItem>
          </Select>

          <hr />
          <InputLabel id="demo-simple-select-placeholder-label-label">
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
          <hr />
          <Button
            style={{ display: "b lock", marginTop: 3, marginBottom: 5 }}
            type="submt"
            variant="contained"
            color="primary"
            size="small"
          >
            Apply Changes
          </Button>
        </div>
      </form>
      <form>
        <Button
          style={{ display: "block", marginTop: 3 }}
          onClick={() => setBoilerPlate(false)}
          type="submt"
          variant="contained"
          color="primary"
          size="small"
        >
          Go to site builder
        </Button>
      </form>
      <ProgressMobileStepper />
    </>
  );
}

export default React.memo(Sidebar);
