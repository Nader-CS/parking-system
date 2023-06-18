import { Box } from "@mui/material";
import React from "react";

export default function CardBox({
  marginY,
  p,
  borderColor,
  borderRadius,
  borderWidth,
  cursor,
  backgroundColor,
  children,
}) {
  return (
    <Box
      marginY={marginY ?? 4}
      p={p ?? 4}
      borderRadius={borderRadius ?? 2}
      borderColor={borderColor ?? "gray"}
      width="100%"
      sx={{
        backgroundColor: backgroundColor ?? "white",
        borderWidth: borderWidth ?? 0.5,
        borderStyle: "solid",
        cursor: cursor,
      }}
    >
      {children}
    </Box>
  );
}
