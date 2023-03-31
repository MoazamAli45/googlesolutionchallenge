import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

// const marks = [
//   {
//     value: 0,
//     label: "0°C",
//   },
//   {
//     value: 20,
//     label: "20°C",
//   },
//   {
//     value: 37,
//     label: "37°C",
//   },
//   {
//     value: 100,
//     label: "100°C",
//   },
// ];

export default function SliderDonation(props) {
  const value = ((props.value / 20000) * 100).toFixed(2);
  if (value < 0) {
    return;
  }
  function valuetext(value) {
    return `${value}%`;
  }
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Always visible"
        defaultValue={value}
        getAriaValueText={valuetext}
        onChangeCommitted={(event, value) => props.setValue(value)}
        value={value === "" ? 0 : value}
        step={1}
        // marks={marks}
        valueLabelDisplay="on"
        sx={{
          color: "#77c2bc",
          maxWidth: "450px",
          height: "15px",
        }}
      />
    </Box>
  );
}
