import styles from "./GrievancePortal.module.css";
import * as React from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";

export function GrievancePortal() {
  const [inputValue, setInputValue] = React.useState("");
  const [popupOpen, setPopupOpen] = React.useState(false);

  const handleTextfieldChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputValue(event.target.value);
  };

  const handleShowPopup = () => {
    if (inputValue == "") {
      setInputValue("No Grievance :D");
    }
    setPopupOpen(true);
  };

  const handleHidePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div className={styles.wrapper}>
      <Typography variant="h4" className={styles.title}>
        Grievance Portal 🥀
      </Typography>
      <Typography variant="h6" className={styles.message}>
        I'm sorry that something happened :(
      </Typography>
      <TextField
        variant="outlined"
        multiline
        color="secondary"
        inputProps={{ style: { color: "white" } }}
        label="What went wrong?"
        onChange={handleTextfieldChange}
      />
      <Button
        variant="contained"
        disableElevation
        onClick={handleShowPopup}
        color="secondary"
      >
        Submit Grievance
      </Button>
      <Box
        className={styles.image}
        component="img"
        src="https://picon.ngfiles.com/946000/flash_946916_card.webp?f1725642518"
      ></Box>
      <Dialog
        open={popupOpen}
        onClose={handleHidePopup}
        className={styles.dialog}
      >
        <DialogTitle color="white">
          Please screenshot this page and send it to Kenny
        </DialogTitle>
        <DialogContent>
          <DialogContentText textAlign="center">{inputValue}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="secondary" onClick={handleHidePopup}>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
