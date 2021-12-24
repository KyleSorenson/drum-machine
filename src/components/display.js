import { Grid, Paper, Typography } from "@mui/material";

function Display({ label }) {
  return (
    <Grid item xs={12}>
      <Paper
        sx={{
          padding: 2,
          bgcolor: "secondary.main",
        }}
      >
        <Typography id="display" align="center" variant="h6">
          {label}
        </Typography>
      </Paper>
    </Grid>
  );
}

export default Display;
