import styles from "./GirlfriendDay2024.module.css";
import * as React from "react";
import { Box, Button, Typography } from "@mui/material";

export function GirlfriendDay2024() {
  const mwuahAudio = React.useRef(new Audio("/fun-site-for-jv/mwuah.mp3"));

  const playAudio = () => {
    mwuahAudio.current.play();
  };

  return (
    <div className={styles.wrapper}>
      <Typography variant="h4" className={styles.title}>
        ✨❤️ Happy Girlfriend's Day! ❤️✨
      </Typography>
      <Typography variant="h6" className={styles.message}>
        Hey, I know life might be hard right now, but I still wanted to wish you
        a Happy Girlfriend's Day. I'm glad to have met you and I'm especially
        glad that you decided to pick me as your boyfriend. You are an amazing
        girl and I hope you know and believe it. If I was able to see you in
        person today I'd give you lots of hugs and kisses, but for now I'll give
        you virtual ones. I promise to give you lots the next time we see each
        other :)
      </Typography>
      <Button variant="contained" disableElevation onClick={playAudio}>
        Mwuah!
      </Button>
      <Box
        className={styles.image}
        component="img"
        src="https://c.tenor.com/o_5RQarGvJ0AAAAC/tenor.gif"
      ></Box>
    </div>
  );
}
