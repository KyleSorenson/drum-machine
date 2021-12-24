import padLayout from "../layouts/padlayout";
import Credits from "./credits";
import DrumPad from "./drumpad";
import Display from "./display";

import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Container,
  Grid,
  IconButton,
} from "@mui/material";

import { Info } from "@mui/icons-material";

import { useEffect, useState } from "react";

function SFXPlayer() {
  // Dialog Box
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  function openDialog() {
    setDialogIsOpen(true);
  }

  function closeDialog() {
    setDialogIsOpen(false);
  }

  // Drum Pad
  const [sample, setSample] = useState("none");

  function fetchSample(key) {
    const found = padLayout.find((drumpad) => drumpad.key === key);
    return found && found.sample;
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    function handleKeyDown(e) {
      let key = e.key.toUpperCase();

      setButtonFocus(key);
      triggerAudio(key);
      updateDisplay(key);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [sample, setButtonFocus, updateDisplay]);

  function handleClick(key) {
    triggerAudio(key);
    updateDisplay(key);
  }

  function updateDisplay(key) {
    fetchSample(key) && setSample(fetchSample(key));
  }

  function triggerAudio(key) {
    if (!document.getElementById(key)) return;

    let sounds = document.getElementsByTagName("audio");
    for (let i = 0; i < sounds.length; i++) {
      sounds[i].load();
    }

    document.getElementById(key).play();
  }

  function setButtonFocus(key) {
    if (!document.getElementById(fetchSample(key))) return;
    document.getElementById(fetchSample(key)).blur();
    document.getElementById(fetchSample(key)).focus();
  }

  return (
    <Container maxWidth="sm" id="drum-machine" component="main">
      <Card>
        <CardHeader
          title={
            <>
              SUPER MARIO SFX PLAYER
              <IconButton sx={{ mb: 1 }} onClick={openDialog}>
                <Info />
              </IconButton>
            </>
          }
          titleTypographyProps={{
            align: "center",
          }}
          sx={{
            bgcolor: "primary.main",
            pb: 1,
          }}
        />
        <CardMedia
          component="img"
          image="/img/smb.jpg"
          height="250"
          alt="super mario bros cover art"
        />
        <CardContent>
          <Grid container spacing={2}>
            <Display sample={sample} />

            {/* -------- Begin Drumpads -------- */}

            {padLayout.map((drumpad) => {
              return (
                <Grid item xs={4} key={drumpad.key}>
                  <DrumPad
                    padKey={drumpad.key}
                    padSample={drumpad.sample}
                    clickHandler={handleClick.bind(this, drumpad.key)}
                  />
                </Grid>
              );
            })}

            {/* -------- End Drumpads -------- */}
          </Grid>
        </CardContent>
      </Card>
      <Credits open={dialogIsOpen} onClose={closeDialog} />
    </Container>
  );
}

export default SFXPlayer;
