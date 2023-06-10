import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import appleSvg from "../../assets/icons/apple.svg";
import googlePlaySvg from "../../assets/icons/google-play.svg";

export default function StoreButton({ text, isGoogle = false }) {
  return (
    <Button
      size={"small"}
      variant="contained"
      sx={{
        backgroundColor: "black",
        textTransform: "none",
        cursor: "pointer",
        ":hover": {
          backgroundColor: "#AA23B6",
        },
      }}
    >
      {isGoogle ? (
        <Box
          component="img"
          sx={{
            height: 25,
            width: 25,
          }}
          alt="Google Play"
          src={googlePlaySvg}
        />
      ) : (
        <Box
          component="img"
          sx={{
            height: 25,
            width: 25,
          }}
          alt="App Store"
          src={appleSvg}
        />
      )}
      <Stack direction="column" marginLeft={1} alignItems="start">
        <Typography fontSize={9} lineHeight={1} marginTop={0.5}>
          {isGoogle ? "GET IT ON" : "Download on the"}
        </Typography>
        <Typography fontSize={17} fontWeight="bold">
          {text}
        </Typography>
      </Stack>
    </Button>
  );
}
