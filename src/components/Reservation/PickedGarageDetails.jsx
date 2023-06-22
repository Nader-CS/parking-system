import {
  CameraAlt,
  InfoOutlined,
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from "@mui/icons-material";
import {
  Box,
  ButtonBase,
  Divider,
  Rating,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CardBox from "./CardBox";
// import { garage } from "../../utilities/Constants";
import { useSelector } from "react-redux";
import { kCalculatePrice } from "../../utilities/Constants";

export default function PickedGarageDetails() {
  const data = useSelector((state) => state.selectedGarage);
  const dutrationString = sessionStorage.getItem('duration');
  const duration = JSON.parse(dutrationString);
  const garage = data.garage.garage;
  const [image, setImage] = useState({
    img: garage.images[0],
    index: 0,
  });
  return (
    <Box flex={1} marginLeft={{ md: 2 }} order={{ xs: 1, md: 2 }}>
      <CardBox p={0}>
        <Box
          position="relative"
          sx={{
            borderRadius: 2,
          }}
        >
          <Box
            component="img"
            height={250}
            width="100%"
            src={image.img}
            alt="Image"
            key={image.img}
            sx={{
              borderRadius: 2,
            }}
          />
          <Box
            position="absolute"
            top="50%"
            left={0}
            transform="translateY(-50%)"
            sx={{
              display: "flex",
              alignItems: "center",
              paddingLeft: "1rem",
            }}
          >
            <ButtonBase
              sx={{
                color: "white",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                padding: "0.5rem",
                borderRadius: "50%",
              }}
              onClick={() => {
                if (image.index !== 0) {
                  setImage({
                    img: garage.images[image.index - 1],
                    index: image.index - 1,
                  });
                }
              }}
            >
              <KeyboardArrowLeft />
            </ButtonBase>
          </Box>
          <Box
            position="absolute"
            top="50%"
            right={0}
            transform="translateY(-50%)"
            sx={{
              display: "flex",
              alignItems: "center",
              paddingRight: "1rem",
            }}
          >
            <ButtonBase
              sx={{
                color: "white",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                padding: "0.5rem",
                borderRadius: "50%",
              }}
              onClick={() => {
                // console.log(garage.images);
                // console.log(image.img);
                // console.log(image.index);
                // console.log(garage.images[0]);
                // setImage({
                //   img: garage.images[0],
                //   index: 0,
                // });
                if (image.index < garage.images.length - 1) {
                  setImage({
                    img: garage.images[image.index + 1],
                    index: image.index + 1,
                  });
                }
                // var index = garage.images.findIndex((img) => img === image);
                // if (index < garage.images.length - 1) {
                //   setImage(garage.images[index + 1]);
                // }
              }}
            >
              <KeyboardArrowRight />
            </ButtonBase>
          </Box>
          <Box
            position="absolute"
            bottom={0}
            width="100%"
            textAlign="center"
            py={1}
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              color: "white",
            }}
          >
            <CameraAlt />
            <Typography variant="caption" sx={{ ml: 1 }}>
              {image.index + 1}/{garage.images.length}
            </Typography>
          </Box>
        </Box>
        <Box p={4}>
          <Typography fontSize={18} fontWeight="bold">
            {garage.name} on {garage.address}
          </Typography>
          {garage.reviews.length > 0 && (
            <Stack marginY={1} direction="row">
              <Rating name="rating" value={4.5} precision={0.5} readOnly />

              <Typography color="grey">({garage.reviews.length})</Typography>
            </Stack>
          )}
          <Divider
            sx={{ borderTopWidth: 1, borderTopColor: "black", marginY: 4.5 }}
          />
          <Stack direction="row" justifyContent="space-between">
            <Typography>Price per hour</Typography>
            <Typography fontWeight="bold">EGP {garage.pricePerHour}</Typography>
          </Stack>
          <Stack marginY={2} direction="row" justifyContent="space-between">
            <Stack direction="row">
              <Typography marginRight={0.5}>Transaction fee</Typography>
              <Tooltip
                title="The transaction fee helps us cover the costs of running the platform and providing customer service for your booking"
                arrow
              >
                <InfoOutlined
                  fontSize="small"
                  color="grey"
                  sx={{ cursor: "pointer" }}
                />
              </Tooltip>
            </Stack>
            <Typography fontWeight="bold">EGP 5</Typography>
          </Stack>
          <Divider
            sx={{ borderTopWidth: 1, borderTopColor: "black", marginY: 4.5 }}
          />
          <Stack direction="row" justifyContent="space-between">
            <Typography fontSize={20} fontWeight="bold">
              Final price
            </Typography>
            <Typography fontWeight="bold">
              EGP {kCalculatePrice(duration, garage.pricePerHour)}
            </Typography>
          </Stack>
        </Box>
      </CardBox>
    </Box>
  );
}
