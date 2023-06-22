import { PaymentElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { reserveGarage } from "../../../redux/slices/reservationSlice";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const data = useSelector((state) => state.selectedGarage);
  const timeData = useSelector((state) => state.dateGeocode);
    const garage = data.garage.garage;
    const garageId = garage.id;
  const availableSpots = garage.availableSpots;
  const leavingOn = timeData.parkingUntil;
  const dispatch = useDispatch();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();


    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsProcessing(true);
    

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${window.location.origin}/completion`,
        // return_url: "https://example.com/success",
      },
    });
    dispatch(reserveGarage({ garageId, availableSpots, leavingOn }));

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occured.");
    }

    setIsProcessing(false);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" />
      <Button
        type="submit"
        disabled={isProcessing || !stripe || !elements}
        sx={{
          textTransform: "capitalize",
          marginTop: "2rem",
          padding: "0.5rem 2rem",
          borderRadius: "0.2rem",
          backgroundColor: "#7926c1",
          color: "#fff",
          fontSize: "1rem",
          fontWeight: "bold",
          "&:hover": {
            backgroundColor: "#9f53db",
          },
        }}
      >
        {isProcessing ? "Processing ... " : "Pay Now"}
      </Button>
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}
