import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import StoreButton from "./StoreButton";
import AppImage from "../../assets/imgs/IPark-app.png";

export default function DownloadSection() {
  return (
    <Box style={{ marginTop: "7rem" }}>
      <Stack direction={{ xs: "column", md: "row" }} alignItems="center">
        <Box
          flex={1}
          order={{ xs: 2, md: 1 }}
          marginTop={{ xs: 1, md: 5 }}
          marginLeft={{ xs: 1, md: 5 }}
        >
          <Typography component="span" fontSize={32}>
            Download
            <Box component="span" style={{ fontWeight: "bold" }}>
              {" "}
              Egypt's first{" "}
            </Box>
            parking app
          </Typography>
          <Box
            marginY={2}
            width={50}
            height={5}
            sx={{ backgroundColor: "#AA23B6" }}
          ></Box>
          <Typography
            display={{ xs: "none", md: "block" }}
            color="#999999"
            lineHeight={1.5}
            fontSize={16}
          >
            Rated 5 stars with an average satisfaction rating of 96%, IPark is
            Egypt’s first parking service. But don’t just take our word for it –
            check out some of the latest customer reviews below for our Cairo
            parking spaces.
          </Typography>
          <Stack direction="row" gap={2} marginTop={3}>
            <StoreButton text="App Store" />
            <StoreButton text="Google Play" isGoogle={true} />
          </Stack>
        </Box>
        <Box flex={1} order={{ xs: 1, md: 2 }} marginLeft={{ md: 2 }}>
          <Box
            component="img"
            height={{ xs: 350, md: 440, lg: 500 }}
            width={{ xs: 500, md: 580, lg: 650 }}
            src={AppImage}
            alt="App Image"
          ></Box>
        </Box>
      </Stack>
    </Box>
  );
}
