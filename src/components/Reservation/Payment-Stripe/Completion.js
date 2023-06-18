import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Completion() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the main page after a delay of 3 seconds
    const redirectTimeout = setTimeout(() => {
      navigate("/");
    }, 3000);

    // Clear the timeout if the component is unmounted
    return () => {
      clearTimeout(redirectTimeout);
    };
  }, [navigate]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f3f7f9",
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: "1rem" }}>
        Payment Successful!
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "2rem" }}>
        Thank you for your payment.
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "2rem" }}>
        Redirecting....
      </Typography>
    </Box>
  );
}

export default Completion;
