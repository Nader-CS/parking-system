import { Dialog, DialogContent, DialogTitle, Typography } from "@mui/material";
import React from "react";
import { kTerms } from "../../utilities/Constants";

export default function TermsDialog({ open, handleClose }) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        sx: {
          position: "fixed",
          top: 40,
          left: { xs: "5%", md: "28%" },
          m: 0,
        },
      }}
    >
      <DialogTitle>
        <Typography variant="h6" fontWeight="bold">
          Terms & Conditions
        </Typography>
      </DialogTitle>
      <DialogContent>{kTerms}</DialogContent>
    </Dialog>
  );
}
