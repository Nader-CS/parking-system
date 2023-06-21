import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import StoreButton from "./StoreButton";
import AppImage from "../../assets/images/Download/IPark-app.png";

export default function DownloadSection() {
  return (
    <Box style={{ marginTop: "2rem" }}>
      <Stack sx={{ display: 'flex', justifyContent: "space-between", alignItems: "center" }} direction={{ xs: "column", md: "row" }}>
        <Box
          flex={{ md: 2, lg: 1 }}
          order={{ xs: 2, md: 1 }}
          marginTop={{ xs: 1, md: 5 }}
          marginLeft={{ xs: 1, md: 4.5 }}
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
        <Box sx={{textAlign: 'right'}} flex={1} order={{ xs: 1, md: 2 }} marginLeft={{ md: 2 }}>
          <Box
            component="img"
            sx={{
              height: {
                xs: "100%",
                md: "auto",
                lg: "auto",
              },
              width: {
                xs: "100%",
                sm: "28rem",
                md: "35rem",
                lg: "40rem",
              },
            }}
            src={AppImage}
            alt="App Image"
          ></Box>
        </Box>
      </Stack>
    </Box>
  );
}
