import React from "react";
import Grid from "@mui/material/Grid";
import { Button, CssBaseline, IconButton, Tooltip } from "@mui/material";
import { Paper } from "@mui/material";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import {
  DateRangePicker,
  DateRange,
} from "@mui/x-date-pickers-pro/DateRangePicker";
import { useState } from "react";
import { Dayjs } from "dayjs";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import HomeIcon from "@mui/icons-material/Home";
import ListIcon from "@mui/icons-material/List";
import EditableCard from "../components/EditableCard";
import { useCreateFoodMutation } from "../reduxStore/apiSlice";


const HomePage: React.FC= () => {

  const [value, setValue] = useState<DateRange<Dayjs>>([null, null]);
  
  return (
    <>
      <Grid item container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          container
          direction={"column"}
          xs={false}
          sm={4}
          md={0.7}
          alignContent="center"
          pt={3}
          sx={{
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "primary.dark",
            gap: "2rem",
          }}
        >
          <Tooltip title="">
            <IconButton disabled>
              <FastfoodIcon sx={{ color: "primary.dark", fontSize: "2rem" }} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Home">
            <IconButton
              sx={{
                width: "max-content",
              }}
            >
              <HomeIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Categories">
            <IconButton
              sx={{
                width: "max-content",
              }}
            >
              <ListIcon />
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid
          item
          xs={12}
          sm={8}
          md={11.3}
          component={Paper}
          elevation={3}
          square
          sx={{ backgroundColor: "primary.light" }}
        >
          <Grid
            direction="row"
            container
            sx={{ maxWidth: "95%", m: "auto", mt: 3 }}
            justifyContent="space-between"
          >
            <LocalizationProvider
              dateAdapter={AdapterDayjs}
              localeText={{ start: "Start-Date", end: "- End-Date" }}
            >
              <DateRangePicker
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(startProps, endProps) => (
                  <Box
                    component={Paper}
                    sx={{
                      display: "flex",
                      alignItems: "flex-end",
                      bgcolor: "white",
                    }}
                  >
                    <TextField
                      id="input-with-s"
                      label="With sx"
                      {...startProps}
                      variant="standard"
                      size="small"
                      sx={{
                        width: "5.8rem",
                      }}
                    />
                    <TextField
                      id="input-with-sx"
                      label="With sx"
                      variant="standard"
                      {...endProps}
                      size="small"
                      sx={{
                        width: "5.8rem",
                      }}
                    />
                    <FilterAltIcon
                      sx={{ color: "action.active", mr: 1, my: 0.5 }}
                    />
                  </Box>
                )}
              />
            </LocalizationProvider>
            <Button variant="contained">Add Food</Button>
          </Grid>
          <Grid>
            <EditableCard
              getQuery={useCreateFoodMutation}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
