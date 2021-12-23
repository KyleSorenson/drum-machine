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

const projectLink =
  "https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-drum-machine";
const curriculumLink =
  "https://www.freecodecamp.org/learn/front-end-development-libraries";

const buttonHeight = 80;

function App() {
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
            backgroundColor: (theme) => theme.palette.primary.main,
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
            <Grid item xs={12}>
              <Paper
                sx={{
                  padding: 2,
                  backgroundColor: (theme) => theme.palette.secondary.main,
                }}
              >
                <Typography id="display" align="center" variant="h6">
                  ↓ PRESS A BUTTON ↓
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="contained"
                className="drum-pad"
                id="1up"
                onClick={handleDrumPad.bind(this, "1up")}
                fullWidth={true}
                sx={{
                  height: buttonHeight,
                }}
              >
                <Typography variant="h6">Q</Typography>
                <audio src="audio/1up.mp3" className="clip" id="Q" />
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="contained"
                className="drum-pad"
                id="block"
                onClick={handleDrumPad.bind(this, "block")}
                fullWidth={true}
                sx={{
                  height: buttonHeight,
                }}
              >
                <Typography variant="h6">W</Typography>
                <audio src="audio/block.mp3" className="clip" id="W" />
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="contained"
                className="drum-pad"
                id="coin"
                onClick={handleDrumPad.bind(this, "coin")}
                fullWidth={true}
                sx={{
                  height: buttonHeight,
                }}
              >
                <Typography variant="h6">E</Typography>
                <audio src="audio/coin.mp3" className="clip" id="E" />
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="contained"
                className="drum-pad"
                id="death"
                onClick={handleDrumPad.bind(this, "death")}
                fullWidth={true}
                sx={{
                  height: buttonHeight,
                }}
              >
                <Typography variant="h6">A</Typography>
                <audio src="audio/death.mp3" className="clip" id="A" />
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="contained"
                className="drum-pad"
                id="jump"
                onClick={handleDrumPad.bind(this, "jump")}
                fullWidth={true}
                sx={{
                  height: buttonHeight,
                }}
              >
                <Typography variant="h6">S</Typography>
                <audio src="audio/jump.mp3" className="clip" id="S" />
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="contained"
                className="drum-pad"
                id="pause"
                onClick={handleDrumPad.bind(this, "pause")}
                fullWidth={true}
                sx={{
                  height: buttonHeight,
                }}
              >
                <Typography variant="h6">D</Typography>
                <audio src="audio/pause.mp3" className="clip" id="D" />
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="contained"
                className="drum-pad"
                id="pipe"
                onClick={handleDrumPad.bind(this, "pipe")}
                fullWidth={true}
                sx={{
                  height: buttonHeight,
                }}
              >
                <Typography variant="h6">Z</Typography>
                <audio src="audio/pipe.mp3" className="clip" id="Z" />
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="contained"
                className="drum-pad"
                id="powerup"
                onClick={handleDrumPad.bind(this, "powerup")}
                fullWidth={true}
                sx={{
                  height: buttonHeight,
                }}
              >
                <Typography variant="h6">X</Typography>
                <audio src="audio/powerup.mp3" className="clip" id="X" />
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="contained"
                className="drum-pad"
                id="stageclear"
                onClick={handleDrumPad.bind(this, "stageclear")}
                fullWidth={true}
                sx={{
                  height: buttonHeight,
                }}
              >
                <Typography variant="h6">C</Typography>
                <audio src="audio/stageclear.mp3" className="clip" id="C" />
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Dialog open={dialogIsOpen} onClose={closeDialog}>
        <DialogContent>
          <DialogContentText
            sx={{
              textAlign: "center",
              pb: 2,
            }}
          >
            <Link
              href={projectLink}
              color="primary"
              target="_blank"
              rel="noopener"
            >
              Project 3
            </Link>{" "}
            from <br />
            <Link
              href={curriculumLink}
              color="primary"
              target="_blank"
              rel="noopener"
            >
              Free Code Camp's Front End Development Libraries Curriculum.
            </Link>
          </DialogContentText>
          <DialogContentText
            sx={{
              textAlign: "center",
              pb: 2,
            }}
          >
            Designed and coded by Kyle Sorenson.
          </DialogContentText>
          <DialogContentText
            sx={{
              textAlign: "center",
            }}
          >
            Created using{" "}
            <Link
              href="https://reactjs.org/"
              color="primary"
              target="_blank"
              rel="noopener"
            >
              React
            </Link>{" "}
            and{" "}
            <Link
              href="https://mui.com"
              color="primary"
              target="_blank"
              rel="noopener"
            >
              Material UI
            </Link>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </Container>
  );
}

export default App;
