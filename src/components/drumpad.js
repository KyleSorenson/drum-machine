import { Button, Typography } from "@mui/material";

function DrumPad({ padKey, padSample, clickHandler }) {
  return (
    <Button
      id={padSample}
      onClick={clickHandler}
      className="drum-pad"
      variant="contained"
      fullWidth={true}
      sx={{
        height: 70,
      }}
    >
      <Typography variant="h6">{padKey}</Typography>
      <audio src={`audio/${padSample}.mp3`} className="clip" id={padKey} />
    </Button>
  );
}

export default DrumPad;
