import styles from "./BeMine.module.css";
import * as React from "react";
import { Box, Button, Typography } from "@mui/material";

export function BeMine() {
  // State variables
  const [noButtonClickCount, setNoButtonClickCount] = React.useState(0);
  const [headingText, setHeadingText] = React.useState(
    "Do you want to be mine Jas? 🥺"
  );
  const [imageSrc, setImageSrc] = React.useState(
    "https://media.tenor.com/_W2FjRBFfkcAAAAM/cat-please.gif"
  );
  const [showButtons, setShowButtons] = React.useState(true);

  // Refs
  const noButtonRef = React.useRef<HTMLButtonElement>(null);
  const yesButtonRef = React.useRef<HTMLButtonElement>(null);
  const noAudio = React.useRef(new Audio("/fun-site-for-jv/sad-hamster.mp3"));
  const yesAudio = React.useRef(new Audio("/fun-site-for-jv/cat-dance.mp3"));

  // Event handlers
  const handleYesButtonClick = () => {
    setHeadingText("Yay! 🥳");
    setImageSrc("https://c.tenor.com/_oZzuWJZ8dEAAAAd/tenor.gif");
    setShowButtons(false);
    noAudio.current.pause();
    yesAudio.current.play();
  };

  const handleNoButtonClick = () => {
    randomizeButtonPosition();
    increaseYesButtonSize();
    setNoButtonClickCount(noButtonClickCount + 1);

    switch (noButtonClickCount) {
      case 5:
        setHeadingText("y no? 😢");
        noAudio.current.play();
        break;
      case 10:
        setHeadingText("rying 😢😢");
        break;
      case 15:
        setHeadingText("waaaaaaaaaaaa 😭😭😭");
        break;
    }
  };

  const randomizeButtonPosition = () => {
    const noButton = noButtonRef.current;
    if (noButton) {
      // Get current window width and height
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      // Get current button position and size
      const currX = noButton.offsetLeft;
      const currY = noButton.offsetTop;
      const currWidth = noButton.offsetWidth;
      const currHeight = noButton.offsetHeight;

      // Randomize new position
      const newX = Math.floor(Math.random() * windowWidth);
      const newY = Math.floor(Math.random() * windowHeight);
      const adjustedX = Math.max(newX - currWidth, 0);
      const adjustedY = Math.max(newY - currHeight, 0);

      // Get relative change in position
      const deltaX = adjustedX - currX;
      const deltaY = adjustedY - currY;

      // Update button position
      noButton.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    }
  };

  const increaseYesButtonSize = () => {
    const yesButton = yesButtonRef.current;
    if (yesButton) {
      // Get current button size
      const currWidth = yesButton.offsetWidth;
      const currHeight = yesButton.offsetHeight;
      const currentFontSize = parseInt(
        window.getComputedStyle(yesButton).fontSize
      );

      // Increase button size
      yesButton.style.width = `${currWidth + 10}px`;
      yesButton.style.height = `${currHeight + 10}px`;
      yesButton.style.fontSize = `${currentFontSize + 2}px`;
    }
  };

  return (
    <div className={styles.wrapper}>
      <Typography variant="h2" className={styles.heading}>
        {headingText}
      </Typography>
      <Box className={styles.image} component="img" src={imageSrc} />
      <div style={{ display: showButtons ? "flex" : "none" }}>
        <Button
          ref={yesButtonRef}
          className={styles.yesButton}
          variant="contained"
          disableElevation
          onClick={handleYesButtonClick}
        >
          Yes
        </Button>
        <Button
          ref={noButtonRef}
          className={styles.noButton}
          variant="contained"
          disableElevation
          color="error"
          onClick={handleNoButtonClick}
        >
          No
        </Button>
      </div>
    </div>
  );
}
