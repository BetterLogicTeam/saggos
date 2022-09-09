import { Grid, Slider } from "@mui/material";
import { Box, Stack } from "@mui/system";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Container from '@mui/material/Container';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
// width="66%" height="390px"
function Store_main() {
  return (
    <div>
        <Stack>

            <Box sx={{display: "flex",justifyContent: "center",alignItems: "center", marginTop: "170px"}}>
                <ImageList sx={{display: "flex",justifyContent: "center",alignItems: "center"}}>
                    <ImageListItem sx={{ width: {xs: "800px"}, height: {xs: "390px"}}}>
                    <img
            src="slide_1.webp"
          />
                    </ImageListItem>
                </ImageList>
            {/* <img src=" alt="" sx={{width: {xs: "200px"}}}/> */}
            {/* <Typography variant="h4" sx={{textOverlay: ""}}>ALMOST THERE</Typography> */}
            </Box>
        <Grid container sx={{marginY: "130px" , display: "", justifyContent: ""}}>
            <Grid item  xs={1.7}></Grid>
          <Grid item xs={12} sm={3}>
          {/* .css-zbaamk-MuiGrid-root{{maxWidth: "71%"}} */}
            <Card sx={{ maxWidth: {xs: "200", sm: "300px"} }}>
              <CardActionArea>
                <CardMedia
                // sx={{transition: "ease-out", "&:hover":{width: "304px"}}}
                  component="img"
                  height="220"
                  image="https://d2j6dbq0eux0bg.cloudfront.net/images/78339660/3200399876.jpg"
                  alt="green iguana"
                />
                
              </CardActionArea>
            </Card>
            <Typography variant="h6" color="text.secondary" sx={{textAlign: "center", padding: "10px"}}>Jewellery</Typography>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Card sx={{ maxWidth: {xs: "200", sm: "300px"} }}>
              <CardActionArea>
                <CardMedia
                sx={{transition: "ease-out", "&:hover":{width: "304px"}}}
                  component="img"
                  height="220"
                  image="https://d2j6dbq0eux0bg.cloudfront.net/images/78339660/3200400668.jpg"
                  alt="green iguana"
                />
              </CardActionArea>
            </Card>
            <Typography variant="h6" color="text.secondary" sx={{textAlign: "center", padding: "10px"}}>HandBags</Typography>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Card sx={{ maxWidth: {xs: "200", sm: "300px"} }}>
              <CardActionArea>
                <CardMedia
                sx={{transition: "ease-out", "&:hover":{width: "304px"}}}
                  component="img"
                  height="220"
                  image="https://d2j6dbq0eux0bg.cloudfront.net/images/78339660/3200516493.jpg"
                  alt="green iguana"
                />
              </CardActionArea>
            </Card>
            <Typography variant="h6" color="text.secondary" sx={{textAlign: "center", padding: "10px"}}>Bangles</Typography>
          </Grid>

          
        </Grid>



        <Box>
        <Typography variant="h4" sx={{textAlign: "center", paddingBottom: "34px"}}>Featured Products</Typography>
        <Grid container sx={{marginBottom: "50px" , display: "flex", justifyContent: ""}}>
            
            <Grid item xs={2.3} sm={1} md={2.3}></Grid>
          <Grid item xs={12} sm={2} md={1.5}>
            <Card sx={{ maxWidth: {xs: "200", sm: "160px"}, marginBottom: {xs: "20px"} }}>
              <CardActionArea>
                <CardMedia
                // sx={{transition: "ease-out", "&:hover":{width: "204px"}}}
                  component="img"
                  height="220"
                  image="https://d2j6dbq0eux0bg.cloudfront.net/images/78339660/3200399876.jpg"
                  alt="green iguana"
                />
                
              </CardActionArea>
              <Typography variant="h6" color="text.secondary" sx={{textAlign: "", padding: "10px"}}>Jewellery</Typography>
              <Typography variant="h6" color="text.secondary" sx={{textAlign: "",fontSize: "11px", paddingX: "10px"}}>JKU00001</Typography>
              <Typography variant="subtitle6" color="text.secondary" sx={{textAlign: "center", padding: "10px"}}>9.99Rs</Typography>

            </Card>
            
          </Grid>

          <Grid item xs={12} sm={2} md={1.5}>
            <Card sx={{ maxWidth: {xs: "200", sm: "160px"}, marginBottom: {xs: "20px"} }}>
              <CardActionArea>
                <CardMedia
                // sx={{transition: "ease-out", "&:hover":{width: "204px"}}}
                  component="img"
                  height="220"
                  image="https://d2j6dbq0eux0bg.cloudfront.net/images/78339660/3200400668.jpg"
                  alt="green iguana"
                />
              </CardActionArea>
            <Typography variant="h6" color="text.secondary" sx={{textAlign: "", padding: "10px"}}>HandBags</Typography>
              <Typography variant="h6" color="text.secondary" sx={{textAlign: "",fontSize: "11px", paddingX: "10px"}}>JKU00002</Typography>
              <Typography variant="subtitle6" color="text.secondary" sx={{textAlign: "center", padding: "10px"}}>7.99Rs</Typography>

            </Card>
          </Grid>

          <Grid item xs={12} sm={2} md={1.5}>
            <Card sx={{ maxWidth: {xs: "200", sm: "160px"}, marginBottom: {xs: "20px"} }}>
              <CardActionArea>
                <CardMedia
                // sx={{transition: "ease-out", "&:hover":{width: "204px"}}}
                  component="img"
                  height="220"
                  image="https://d2j6dbq0eux0bg.cloudfront.net/images/78339660/3200516493.jpg"
                  alt="green iguana"
                />
              </CardActionArea>
            <Typography variant="h6" color="text.secondary" sx={{textAlign: "", padding: "10px"}}>Bangles</Typography>
              <Typography variant="h6" color="text.secondary" sx={{textAlign: "",fontSize: "11px", paddingX: "10px"}}>JKU00003</Typography>
              <Typography variant="subtitle6" color="text.secondary" sx={{textAlign: "center", padding: "10px"}}>3.99Rs</Typography>

            </Card>
          </Grid>

          <Grid item xs={12} sm={2} md={1.5}>
            <Card sx={{ maxWidth: {xs: "200", sm: "160px"}, marginBottom: {xs: "20px"} }}>
              <CardActionArea>
                <CardMedia
                // sx={{transition: "ease-out", "&:hover":{width: "204px"}}}
                  component="img"
                  height="220"
                  image="https://d2j6dbq0eux0bg.cloudfront.net/images/78339660/3200440197.jpg"
                  alt="green iguana"
                />
              </CardActionArea>
            <Typography variant="h6" color="text.secondary" sx={{textAlign: "", padding: "10px"}}>Savannah</Typography>
              <Typography variant="h6" color="text.secondary" sx={{textAlign: "",fontSize: "11px", paddingX: "10px"}}>JKU00003</Typography>
              <Typography variant="subtitle6" color="text.secondary" sx={{textAlign: "center", padding: "10px"}}>3.99Rs</Typography>

            </Card>
          </Grid>

          <Grid item xs={12} sm={2} md={1.5}>
            <Card sx={{ maxWidth: {xs: "200", sm: "160px"}, marginBottom: {xs: "20px"} }}>
              <CardActionArea>
                <CardMedia
                // sx={{transition: "ease-out", "&:hover":{width: "204px"}}}
                  component="img"
                  height="220"
                  image="https://d2j6dbq0eux0bg.cloudfront.net/images/78339660/3200516533.jpg"
                  alt="green iguana"
                />
              </CardActionArea>
            <Typography variant="h6" color="text.secondary" sx={{textAlign: "", paddingY: "10px"}}>Pearls Necklace</Typography>
              <Typography variant="h6" color="text.secondary" sx={{textAlign: "",fontSize: "11px", paddingX: "10px"}}>JKU00003</Typography>
              <Typography variant="subtitle6" color="text.secondary" sx={{textAlign: "center", padding: "10px"}}>6.99Rs</Typography>

            </Card>
          </Grid>

          
        </Grid>

        


        
        </Box>

      </Stack>
    </div>
  )
}

export default Store_main