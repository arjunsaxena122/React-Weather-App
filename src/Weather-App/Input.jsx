import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import weatherData from "./WeatherData.js"

export default function Input({updateInfo}) {
  
  const [city, setCity] = useState("");

  function getInputValue(event) {
    setCity(event.target.value);
  }

  async function getValues(event) {
    event.preventDefault();
    console.log(city)
    setCity("");
    let updateData = await weatherData(city)
    updateInfo(updateData)

  }


  return (
    <>
      <div className="text-center ">
        

        <form onSubmit={getValues}>
        <Box
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            required
            id="outlined-basic"
            label="City Name"
            variant="outlined"
            value={city}
            onChange={getInputValue}
          />
        </Box>

          <Button variant="outlined" onClick={getValues} type="submit">
            Submit
          </Button>

        </form>
      </div>


    </>
  );
}
