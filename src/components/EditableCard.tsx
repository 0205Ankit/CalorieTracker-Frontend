import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import moment from "moment";

interface EditableInputProps {
    getQuery: any
}

const EditableCard: React.FC<EditableInputProps> = ({getQuery}) => {
  const [name, setName] = useState("");
  const [calorie, setCalorie] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");

  const addFoodHandler = async (e: any) => {
    const [createFood]=getQuery()
    e.preventDefault();
    try {
        const payload={
            
        }
        const res =await createFood()
    } catch (err) {}
  };

  return (
    <>
      <Grid
        item
        container
        justifyContent={"space-between"}
        component={Paper}
        sx={{
          width: "75%",
          margin: "auto",
          padding: "1rem",
          bgcolor: "white",
          marginTop: "3rem",
        }}
      >
        <Box>
          <Box>
            <TextField
              placeholder="Food Name"
              id="food-name"
              size="small"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "center", marginTop: "0.5rem" }}
          >
            Calories:
            <TextField
              id="input-with-sx"
              type={"number"}
              variant="outlined"
              placeholder="0"
              size="small"
              sx={{ maxWidth: 130 }}
              onChange={(e) => {
                setCalorie(e.target.value);
              }}
            />
          </Box>
        </Box>
        <Box>
          <FormControl
            fullWidth
            variant="standard"
            sx={{ minWidth: 100, marginBottom: "0.7rem" }}
          >
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              defaultValue=""
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              //   value={age}
              label="Category"
              autoWidth
              onChange={(e: any) => {
                setCategory(e.target.value);
              }}
            >
              <MenuItem value={"Breakfast"}>Breakfast</MenuItem>
              <MenuItem value={"Lunch"}>Lunch</MenuItem>
              <MenuItem value={"Dinner"}>Dinner</MenuItem>
              <MenuItem value={"DinnerParty"}>Dinner Party</MenuItem>
              <MenuItem value={"Snacks"}>Snacks</MenuItem>
            </Select>
          </FormControl>
          <Box>
            <Typography>
              <>
                {moment().hours() + ":" + moment().minutes()}
                {moment().toString().slice(3, -18)}
              </>
            </Typography>
          </Box>
          <FormControl>
            <Grid item container gap={"0.5rem"} mt={0.7}>
              <Button variant="contained">Cancel</Button>
              <Button variant="contained" onClick={addFoodHandler}>
                Add
              </Button>
            </Grid>
          </FormControl>
        </Box>
      </Grid>
    </>
  );
};

export default EditableCard;
