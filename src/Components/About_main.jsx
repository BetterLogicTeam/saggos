import React from 'react';
import { Grid, Slider, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


function About_main() {
  return (
    <div>
        <Stack>
            <Grid container sx={{display: "flex", flexDirection: {xs: "column", sm: "row"}}}>
                <Grid item xs={2}></Grid>
                <Grid item xs={12} md={4} sx={{marginTop: "150px"}}>
                    <ImageList>
                        <ImageListItem sx={{width: "430px", height: "400px"}}>
                            <img src="https://irt-cdn.multiscreensite.com/md/unsplash/dms3rep/multi/photo-1434592370571-b4bacd3377b3.jpg" alt="" />
                        </ImageListItem>
                    </ImageList>
                </Grid>

                <Grid item xs={12} md={4} sx={{marginTop: {xs: "20px", md: "150px", lg: "170px"}, padding: {xs: "14px", md: "0px"}, paddingLeft: {md: "10px"}}}>
                    <Typography variant="h6" sx={{marginBottom: "20px"}}>Title</Typography>
                    <Typography variant="h6" sx={{marginBottom: "20px", fontSize: "15px"}}>
                    This is a text area for titles and paragraphs. Writing in paragraphs lets your visitor find what they are looking for quickly and easily.
                    </Typography>

                    <Typography variant="subtitle6" sx={{marginBottom: "20px"}}>
                    This is a text area for titles and paragraphs. Writing in paragraphs lets your visitor find what they are looking for quickly and easily.
                    </Typography>
                </Grid>

                <Grid item xs={2}></Grid>
            </Grid>

            <Grid container sx={{display: "flex", flexDirection: {xs: "column", sm: "row"}}}>
                <Grid item xs={2}></Grid>

                <Grid item xs={12} md={4} sx={{marginTop: {xs: "20px", md: "50px", lg: "0px"}, padding: {xs: "14px", md: "0px"}, paddingLeft: {md: "10px"}}}>
                    <Typography variant="h6" sx={{marginBottom: "20px"}}>Title</Typography>
                    <Typography variant="h6" sx={{marginBottom: "20px", fontSize: "15px"}}>
                    This is a text area for titles and paragraphs. Writing in paragraphs lets your visitor find what they are looking for quickly and easily.
                    </Typography>

                    <Typography variant="subtitle6" sx={{marginBottom: "20px"}}>
                    This is a text area for titles and paragraphs. Writing in paragraphs lets your visitor find what they are looking for quickly and easily.
                    </Typography>
                </Grid>


                <Grid item xs={12} md={4} sx={{marginTop: "0px"}}>
                    <ImageList>
                        <ImageListItem sx={{width: "430px", height: "400px"}}>
                            <img src="https://irt-cdn.multiscreensite.com/md/unsplash/dms3rep/multi/photo-1512445181747-57ba1fa4ac83.jpg" alt="" />
                        </ImageListItem>
                    </ImageList>
                </Grid>

                <Grid item xs={2}></Grid>
            </Grid>

            <Grid container sx={{display: "flex", flexDirection: {xs: "column", sm: "row"}}}>
                <Grid item xs={2}></Grid>


                <Grid item xs={12} md={4} sx={{marginTop: "0px"}}>
                    <ImageList>
                        <ImageListItem sx={{width: "430px", height: "400px"}}>
                            <img src="https://irt-cdn.multiscreensite.com/md/unsplash/dms3rep/multi/photo-1461773518188-b3e86f98242f.jpg" alt="" />
                        </ImageListItem>
                    </ImageList>
                </Grid>


                <Grid item xs={12} md={4} sx={{marginTop: {xs: "20px", md: "50px", lg: "0px"}, padding: {xs: "14px", md: "0px"}, paddingLeft: {md: "10px"}}}>
                    <Typography variant="h6" sx={{marginBottom: "20px"}}>Title</Typography>
                    <Typography variant="h6" sx={{marginBottom: "20px", fontSize: "15px"}}>
                    This is a text area for titles and paragraphs. Writing in paragraphs lets your visitor find what they are looking for quickly and easily. 
                    </Typography>

                    <Typography variant="subtitle6" sx={{marginBottom: "20px"}}>
                    This is a text area for titles and paragraphs. Writing in paragraphs lets your visitor find what they are looking for quickly and easily.
                    </Typography>
                </Grid>

                <Grid item xs={2}></Grid>
            </Grid>

            
        </Stack>
    </div>
  )
}

export default About_main