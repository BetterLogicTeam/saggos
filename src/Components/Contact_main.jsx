import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Grid, Button, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { Input } from '@mui/material';
import { TextareaAutosize } from '@mui/base';

function Contact_main() {
  return (
    <div>
        <Stack>
        <Box sx={{marginTop: "90px"}}>
        <ImageList sx={{display: "flex",justifyContent: "center",alignItems: "center"}}>
                    <ImageListItem sx={{ width: {xs: "800px"}, height: {xs: "390px"}, marginTop: "70px"}}>
                    <img
            src="Capture.PNG"
          />
                    </ImageListItem>
                </ImageList>
        </Box>

        <Box>
            <Grid container sx={{paddingX: {xs: "5px", sm: "80px"}, paddingY: "80px"}}>
                <Grid item xs={2}></Grid>
                <Grid item sx={{display: "flex", flexDirection: "column", justifyContent: "space-around", marginRight: {xs: "0px", sm: "10px", md: "50px"}}}>
                <Input type="text" placeholder='Name:' sx={{marginBottom: "15px", width: {xs: "280px", sm: "350px"}, height: "40px", border: "1px solid black",paddingLeft: "8px"}}/>
                <Input type="email" placeholder='Email:' sx={{marginBottom: "15px", width: {xs: "280px", sm: "350px"}, height: "40px", border: "1px solid black",paddingLeft: "8px"}}/>
                <Input type="phone" placeholder='Phone:' sx={{marginBottom: "15px", width: {xs: "280px", sm: "350px"}, height: "40px", border: "1px solid black",paddingLeft: "8px"}}/>
                <TextareaAutosize   minRows={4} placeholder="Message:" style={{marginBottom: "20px",paddingLeft: "8px"}}></TextareaAutosize>
                <Button sx={{bgcolor: "rgb(228,166,76)",marginBottom: "10px",fontWeight: "800",fontSize: "18px", paddingX: "20px",paddingY : "15px", width:{xs: "80%", sm: "50%"}}} variant="contained">SEND</Button>

                </Grid>

                <Grid item sx={{display: "flex", flexDirection: "column", justifyContent: "", marginTop: {xs: "40px", sm: "0px"}}}>

                    <Typography variant="subtitle6" sx={{marginBottom: "15px", marginLeft: {xs: "50px", md: "0px"}}}>Street Address, City, State and Zip</Typography>
                    <Typography variant="subtitle6" sx={{marginBottom: "15px", marginLeft: {xs: "50px", md: "0px"}}}>mymail@mailservice.com</Typography>
                    <Typography variant="subtitle6" sx={{marginBottom: "35px", marginLeft: {xs: "50px", md: "0px"}}}>555-555-5555</Typography>
                <Button sx={{bgcolor: "rgb(228,166,76)",marginBottom: "10px", marginLeft: {xs: "50px", md: "0px"},fontWeight: "600",fontSize: "16px", paddingX: "20px",paddingY : "15px", width:{xs: "80%", sm: "66%"}}} variant="contained">FIND US</Button>

                </Grid>
            </Grid>
        </Box>
        </Stack>
    </div>
  )
}

export default Contact_main