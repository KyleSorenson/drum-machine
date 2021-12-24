import { Box, Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";

// Styled img component
const Sprite = styled("img")({
  maxHeight: 16,
  marginLeft: 20,
  marginRight: 20,
  marginBottom: 2,
});

// Functional component that conditionally renders
// on sample change
const Screen = ({ sample }) => {
  if (sample === "none") {
    return <>↓ PRESS A BUTTON ↓</>;
  } else if (sample === "pause") {
    return <>{sample[0].toUpperCase().concat(sample.slice(1))}</>;
  } else {
    return (
      <>
        <Sprite src={`./img/${sample}.png`} alt={sample} />
        {sample[0].toUpperCase().concat(sample.slice(1))}
        <Sprite src={`./img/${sample}.png`} alt={sample} />
      </>
    );
  }
};

function Display({ sample }) {
  return (
    <Grid item xs={12}>
      <Paper
        sx={{
          padding: 2,
          bgcolor: "secondary.dark",
        }}
      >
        <Box
          sx={{
            minHeight: 40,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography id="display" align="center" variant="h6">
            <Screen sample={sample} />
          </Typography>
        </Box>
      </Paper>
    </Grid>
  );
}

export default Display;
