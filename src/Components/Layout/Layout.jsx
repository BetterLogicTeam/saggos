import { Grid, Slider } from "@mui/material";
import { Box, Stack } from "@mui/system";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Container from '@mui/material/Container';

function Layout() {
  return (
    <div>
      <Stack>
        <Grid container sx={{marginY: "130px" , display: "", justifyContent: ""}}>
            <Grid item  xs={1.7}></Grid>
          <Grid item xs={12} sm={3}>
          {/* .css-zbaamk-MuiGrid-root{{maxWidth: "71%"}} */}
            <Card sx={{ maxWidth: {xs: "100", sm: "300px"} }}>
              <CardActionArea>
                <CardMedia
                sx={{transition: "ease-out", "&:hover":{width: {xs: "104", sm: "300px"}}}}
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
            <Card sx={{ maxWidth: {xs: "100", sm: "300px"} }}>
              <CardActionArea>
                <CardMedia
                sx={{transition: "ease-out", "&:hover":{width: {xs: "100", sm: "304px"}}}}
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
                sx={{transition: "ease-out", "&:hover":{width: {xs: "100", sm: "304px"}}}}
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
            
            <Grid item xs={1.7}></Grid>
          <Grid item xs={12} sm={3}>
            <Card sx={{ maxWidth: {xs: "100", sm: "300px"} }}>
              <CardActionArea>
                <CardMedia
                sx={{transition: "ease-out", "&:hover":{width: {xs: "100", sm: "304px"}}}}
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
            <Card sx={{ maxWidth: {xs: "100", sm: "300px"} }}>
              <CardActionArea>
                <CardMedia
                sx={{transition: "ease-out", "&:hover":{width: {xs: "100", sm: "304px"}}}}
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
            <Card sx={{ maxWidth: {xs: "100", sm: "300px"} }}>
              <CardActionArea>
                <CardMedia
                sx={{transition: "ease-out", "&:hover":{width: {xs: "100", sm: "304px"}}}}
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

        <Grid container sx={{marginBottom: "50px" , display: "flex", justifyContent: ""}}>
            
            <Grid item xs={1.7}></Grid>
          <Grid item xs={12} sm={3}>
            <Card sx={{ maxWidth: {xs: "100", sm: "300px"} }}>
              <CardActionArea>
                <CardMedia
                sx={{transition: "ease-out", "&:hover":{width: {xs: "100", sm: "304px"}}}}
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
            <Card sx={{ maxWidth: {xs: "100", sm: "300px"} }}>
              <CardActionArea>
                <CardMedia
                sx={{transition: "ease-out", "&:hover":{width: {xs: "100", sm: "304px"}}}}
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
            <Card sx={{ maxWidth: {xs: "100", sm: "300px"} }}>
              <CardActionArea>
                <CardMedia
                sx={{transition: "ease-out", "&:hover":{width: {xs: "100", sm: "304px"}}}}
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

        <Grid container sx={{marginBottom: "50px" , display: "flex", justifyContent: ""}}>
            
            <Grid item xs={1.7}></Grid>
          <Grid item xs={12} sm={3}>
            <Card sx={{ maxWidth: {xs: "100", sm: "300px"} }}>
              <CardActionArea>
                <CardMedia
                sx={{transition: "ease-out", "&:hover":{width: {xs: "100", sm: "304px"}}}}
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
            <Card sx={{ maxWidth: {xs: "100", sm: "300px"} }}>
              <CardActionArea>
                <CardMedia
                sx={{transition: "ease-out", "&:hover":{width: {xs: "100", sm: "304px"}}}}
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
            <Card sx={{ maxWidth: {xs: "100", sm: "300px"} }}>
              <CardActionArea>
                <CardMedia
                sx={{transition: "ease-out", "&:hover":{width: {xs: "100", sm: "304px"}}}}
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


        </Box>

      </Stack>
    </div>
  );
}

export default Layout;
