import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function NotFound() {
  const { t, i18n } = useTranslation();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid xs={6}>
            <Typography variant="h1">404</Typography>
            <Typography
              variant="h6"
              style={{
                fontFamily:
                  i18n.language === "ar"
                    ? "'Noto Kufi Arabic', sans-serif"
                    : "'Nunito', sans-serif",
              }}
            >
              {t("doesnot-exist")}
            </Typography>
            <Button variant="contained">
              <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                Back Home
              </Link>
            </Button>
          </Grid>
          <Grid xs={6}>
            <img
              src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg"
              alt=""
              width="100%"
              height="auto"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
