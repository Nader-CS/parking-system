import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Box, Stack, Typography } from "@mui/material";
import CardBox from "../CardBox";
import Visa from "../../../assets/icons/visa.svg";
import MasterCard from "../../../assets/icons/master-card.svg";
import { Lock } from "@mui/icons-material";
const stripePromise = loadStripe(
  "pk_test_51KXpcGEcv5DBpHLpgsfICVjB9HnKnXFnzLI8QF3uYbiubSMnycqHe2regSgbh037URqiRyH8uKzN7uuaAfBLpfhJ00SBKPhAR7"
);
function Payment({ isDisabled, amount }) {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("http://localhost:5252/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: 5000,
        currency: "EGP",
      }),
    }).then(async (response) => {
      console.log(response);
      if (response.ok) {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const data = await response.json();
          console.log(data.clientSecret);

          setClientSecret(data.clientSecret);
          console.log(clientSecret);
        } else {
          throw new Error("Invalid response format: expected JSON");
        }
      } else {
        const errorData = await response.text();
        throw new Error(`Failed to fetch client secret: ${errorData}`);
      }
    });
  }, [clientSecret]);

  return (
    <CardBox backgroundColor={isDisabled ? "#e3e3e3" : "white"}>
      <Stack direction="row" justifyContent="space-between">
        <Typography
          fontSize={22}
          marginBottom={2}
          fontWeight="bold"
          color={isDisabled ? "#595757" : "black"}
        >
          Payment information
        </Typography>
        {!isDisabled && (
          <Stack direction="row">
            <Box component="img" src={Visa} height={35}></Box>
            <Box component="img" src={MasterCard} height={35}></Box>
          </Stack>
        )}
      </Stack>
      <Stack marginY={4} direction="row">
        <Lock fontSize="small" />

        <Typography marginLeft={0.7} color={isDisabled ? "#595757" : "black"}>
          All payments are secure and encrypted
        </Typography>
      </Stack>
      {!isDisabled && clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </CardBox>
  );
}

export default Payment;
