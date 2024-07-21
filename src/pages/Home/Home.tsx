import React from "react";
import styles from "./Home.module.css";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className={styles.wrapper}>
      <Typography variant="h4" className={styles.title}>
        Hello pls click to see a page :o
      </Typography>
      <Typography variant="h5" className={styles.links}>
        <Link to="/be-mine" className={styles.link}>
          Be Mine :D
        </Link>
        <Link to="/girlfriend-day-2024" className={styles.link}>
          Girlfriend's Day 2024
        </Link>
      </Typography>
      <Box
        className={styles.image}
        component="img"
        src="https://c.tenor.com/9RCIDZjkhBsAAAAC/tenor.gif"
      />
    </div>
  );
}
