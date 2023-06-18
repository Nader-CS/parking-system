import { ButtonBase, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import CardBox from "./CardBox";

export default function AuthCard() {
  const navigate = useNavigate();
  return (
    <CardBox>
      <Typography fontSize={22} fontWeight="bold">
        Let's get started
      </Typography>
      <Typography marginY={4}>
        We need some basic information about you so we can contact you about
        your booking
      </Typography>
      <ButtonBase
        style={{ width: "100%" }}
        onClick={() => {
          navigate("/login");
        }}
      >
        <CardBox
          p={1}
          marginY={1}
          borderColor="black"
          borderRadius={1}
          borderWidth={1}
          cursor="pointer"
        >
          <Typography align="center">Login with email</Typography>
        </CardBox>
      </ButtonBase>
      <Stack direction="row" alignItems="center">
        <Divider
          sx={{
            borderTopWidth: 1,
            borderTopColor: "black",
            width: "47.5%",
          }}
        />
        <Typography marginX={1} fontSize={14} color="grey">
          Or
        </Typography>
        <Divider
          sx={{
            borderTopWidth: 1,
            borderTopColor: "black",
            width: "47.5%",
          }}
        />
      </Stack>
      <ButtonBase
        style={{ width: "100%" }}
        onClick={() => {
          navigate("/signup");
        }}
      >
        <CardBox
          p={1}
          marginY={1}
          borderColor="black"
          borderRadius={1}
          borderWidth={1}
          cursor="pointer"
        >
          <Typography align="center">Sign up with email</Typography>
        </CardBox>
      </ButtonBase>
    </CardBox>
  );
}
