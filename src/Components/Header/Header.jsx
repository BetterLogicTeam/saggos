import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
// import InputAdornment from '@mui/material/InputAdornment';
import FormControl from "@mui/material/FormControl";
// import TextField from '@mui/material/TextField';
import AccountCircle from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



function Header() {
  return (
    <Box>
      <Grid
        Container
        sx={{
          marginTop: "25px",
          bgcolor: "rgb(243,243,243)",
          padding: {xs: "30px", sm: "57px"},
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
         flexDirection: {xs: "column", sm: "row"}
        }}
      >
        <Grid xs={4}
          item
          sx={{
            fontSize: "36px",
            fontWeight: "bold",
            fontFamily: "Great Vibes",
            display: "initial",
            color: "rgb(248, 24, 24)",
            border: "1px solid",
            paddingTop: "20px",
            paddingX: "16px",
            paddingBottom: "8px",
            marginRight: "50px",
            marginBottom:{xs: "15px"}
          }}
        >
          <Box sx={{paddingRight: "10px"}}>Saggo'z </Box>
        </Grid>

        <Grid item
         xs={4}
        >
          <Box>
            {/* <TextField label="Search Store" variant="outlined" color='error'>
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
            </TextField> */}

            <FormControl variant="standard"
            sx={{
                color: "rgb(248, 24, 24)",
                border: "1px solid",
                marginRight: "50px",
                paddingX: "10px",
                marginBottom:{xs: "15px"}
                // padding: "30px"
             }}>
              <InputLabel htmlFor="input-with-icon-adornment"
              sx={{color: "error"}}>
                {/* With a start adornment */}
              </InputLabel>
              <Input
              
                id="input-with-icon-adornment"
                startAdornment={
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                }
                
              />
            </FormControl>
          </Box>
        </Grid>

        <Grid item xs={4}>
            <Box>
                <ShoppingCartIcon sx={{fontSize: "35px", padding: "7px"}}></ShoppingCartIcon>
                
            </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Header;
