import { Button, Grid, InputAdornment, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
  return (
    <div>
        <Stack>
            <Grid Container sx={{bgcolor: "rgb(238,238,238)", display: "flex",flexDirection:{xs: "column", sm: "row"}, justifyContent: "space-around", padding: "80px"}}>
              <Grid item sx={{display: "flex", flexDirection: "column"}}>
              <Typography sx={{marginBottom: "40px"}} variant="subtitle4">SIGN UP TO OUR MAILING LIST</Typography>
              <Typography sx={{marginBottom: "10px"}} variant="subtitle4">Insert your mail and get latest updates</Typography>
                    <input style={{marginBottom: "20px", padding: "10px"}} type="text" />
                    <Button sx={{bgcolor: "rgb(228,166,76)",marginBottom: "10px", paddingX: "20px",paddingY : "10px", width:{xs: "80%", sm: "60%"}}} variant="contained">SIGN UP</Button>

                {/* <Typography variant="subtitle4">FOLLOW US</Typography> */}
              </Grid>

                <Grid item sx={{display: "flex", flexDirection: "column"}}>
                <Typography sx={{marginBottom: "40px"}} variant="subtitle4">CONTACT US</Typography>
                <Typography sx={{marginBottom: "10px"}} variant="subtitle6">Company Name,</Typography>
                <Typography sx={{marginBottom: "10px"}} variant="subtitle6">Street Address, </Typography>
                <Typography sx={{marginBottom: "10px"}} variant="subtitle6">City, State and Zip</Typography>
                    
                </Grid>

                <Grid item sx={{display: "flex", flexDirection: "column"}}>
                <Typography sx={{marginBottom: "40px"}} variant="subtitle4">FOLLOW US</Typography>
                <Typography sx={{marginBottom: "20px"}} variant="subtitle6">Coupons, latest updates and more fun:</Typography>
                <InputAdornment sx={{color: "rgb(51,51,51)", marginTop: "17px", justifyContent: "space-around"}} position="">
                    <FacebookIcon></FacebookIcon>
                    <TwitterIcon></TwitterIcon>
                    <YouTubeIcon></YouTubeIcon>
                  </InputAdornment>

                    
                </Grid>
            </Grid>
            
        </Stack>
    </div>
  )
}

export default Footer