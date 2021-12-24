import { Dialog, DialogContent, DialogContentText, Link } from "@mui/material";

const projectLink =
  "https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-drum-machine";
const curriculumLink =
  "https://www.freecodecamp.org/learn/front-end-development-libraries";

function Credits({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose}>
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
  );
}

export default Credits;
