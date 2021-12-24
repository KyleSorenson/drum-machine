import Credits from "./credits";
import DrumPad from "./drumpad";
import Display from "./display";

import {
  Button,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Container,
  Dialog,
  DialogContent,
  DialogContentText,
  Grid,
  IconButton,
  Link,
  Paper,
  Typography,
} from "@mui/material";

import { Info } from "@mui/icons-material";

import { useEffect, useState, useCallback } from "react";

const buttonHeight = 80;
const padLayout = [
  {
    key: "Q",
    sample: "1up",
  },
  {
    key: "W",
    sample: "block",
  },
  {
    key: "E",
    sample: "coin",
  },
  {
    key: "A",
    sample: "death",
  },
  {
    key: "S",
    sample: "jump",
  },
  {
    key: "D",
    sample: "pause",
  },
  {
    key: "Z",
    sample: "pipe",
  },
  {
    key: "X",
    sample: "powerup",
  },
  {
    key: "C",
    sample: "stageclear",
  },
];

function SFXPlayer() {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  const stopSoundsAndPlayElement = (element) => {
    let sounds = document.getElementsByTagName("audio");
    for (let i = 0; i < sounds.length; i++) {
      sounds[i].load();
    }
    element.play();
  };

  const handleDrumPad = useCallback((soundeffect) => {
    switch (soundeffect) {
      case "1up":
        document.getElementById("1up").blur();
        document.getElementById("1up").focus();
        stopSoundsAndPlayElement(document.getElementById("Q"));
        document.getElementById("display").textContent = "One Up".toUpperCase();
        break;
      case "block":
        document.getElementById("block").blur();
        document.getElementById("block").focus();
        stopSoundsAndPlayElement(document.getElementById("W"));
        document.getElementById("display").textContent =
          "Broken Block".toUpperCase();
        break;
      case "coin":
        document.getElementById("coin").blur();
        document.getElementById("coin").focus();
        stopSoundsAndPlayElement(document.getElementById("E"));
        document.getElementById("display").textContent = "Coin".toUpperCase();
        break;
      case "death":
        document.getElementById("death").blur();
        document.getElementById("death").focus();
        stopSoundsAndPlayElement(document.getElementById("A"));
        document.getElementById("display").textContent =
          "You Died".toUpperCase();
        break;
      case "jump":
        document.getElementById("jump").blur();
        document.getElementById("jump").focus();
        stopSoundsAndPlayElement(document.getElementById("S"));
        document.getElementById("display").textContent = "Jump".toUpperCase();
        break;
      case "pause":
        document.getElementById("pause").blur();
        document.getElementById("pause").focus();
        stopSoundsAndPlayElement(document.getElementById("D"));
        document.getElementById("display").textContent = "Pause".toUpperCase();
        break;
      case "pipe":
        document.getElementById("pipe").blur();
        document.getElementById("pipe").focus();
        stopSoundsAndPlayElement(document.getElementById("Z"));
        document.getElementById("display").textContent = "Pipe".toUpperCase();
        break;
      case "powerup":
        document.getElementById("powerup").blur();
        document.getElementById("powerup").focus();
        stopSoundsAndPlayElement(document.getElementById("X"));
        document.getElementById("display").textContent =
          "Power-up".toUpperCase();
        break;
      case "stageclear":
        document.getElementById("stageclear").blur();
        document.getElementById("stageclear").focus();
        stopSoundsAndPlayElement(document.getElementById("C"));
        document.getElementById("display").textContent =
          "Stage Clear".toUpperCase();
        break;

      default:
        break;
    }
  }, []);

  // Dialog Box
  const openDialog = () => {
    setDialogIsOpen(true);
  };

  const closeDialog = () => {
    setDialogIsOpen(false);
  };

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      switch (e.code) {
        case "KeyQ":
          handleDrumPad("1up");
          break;
        case "KeyW":
          handleDrumPad("block");
          break;
        case "KeyE":
          handleDrumPad("coin");
          break;
        case "KeyA":
          handleDrumPad("death");
          break;
        case "KeyS":
          handleDrumPad("jump");
          break;
        case "KeyD":
          handleDrumPad("pause");
          break;
        case "KeyZ":
          handleDrumPad("pipe");
          break;
        case "KeyX":
          handleDrumPad("powerup");
          break;
        case "KeyC":
          handleDrumPad("stageclear");
          break;

        default:
          break;
      }
    });
  }, [handleDrumPad]);

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
            pb: 0,
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
            <Display label="↓ PRESS A BUTTON ↓" />

            {/* -------- Begin Drumpads -------- */}

            {padLayout.map((drumpad) => {
              return (
                <Grid item xs={4} key={drumpad.key}>
                  <DrumPad
                    padKey={drumpad.key}
                    padSample={drumpad.sample}
                    padHandler={handleDrumPad.bind(this, drumpad.sample)}
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
