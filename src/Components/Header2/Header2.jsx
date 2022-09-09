import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import { Grid } from "swiper";
import FormControl from "@mui/material/FormControl";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";


const pages = ["Store", "Contact", "About Us"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Header2() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "space-around" }}>
      <AppBar position="fixed" sx={{ bgcolor: "white" }}>
        <Container maxWidth="lg" sx={{ bgcolor: "white" }}>
          <Toolbar disableGutters>
            <Box
              sx={{
                fontSize: "36px",
                fontWeight: "bold",
                fontFamily: "Great Vibes",
                display: "initial",
                color: "rgb(248, 24, 24)",
                border: "1px solid",
                // paddingTop: "20px",
                paddingX: "16px",
                // paddingBottom: "4px",
                marginRight: "50px",
                marginTop: "10px",
                marginBottom: { xs: "15px" },
                // paddingRight: "10px"
              }}
            >
              Saggo'z{" "}
            </Box>
            {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
           <Link to="/"> <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 400,
                letterSpacing: ".3rem",
                color: "black",
                "&:hover": { bgcolor: "rgb(51,51,51)", color: "white" },
                textDecoration: "none",
                marginRight: { md: "10px", lg: "40px" },
                marginLeft: {md: "0px", lg: "60px"},
                // bgcolor: "rgb(51,51,51)",
                paddingY: "6px",
                paddingX: "19px",
                borderRadius: "4px",
                textDecoration: "none"
              }}
            >
              Home
            </Typography>
            </Link>
            <Box
              sx={{
                // flexGrow: 1,
                display: { xs: "flex", md: "none", color: "black" },
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none", color: "black" },
                }}
              >
                {/* {pages.map((page) => ( */}
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography sx={{ color: "black" }} textAlign="center">
                    {/* {page} */}


            <Link to="/"> <Button
                      onClick={handleCloseNavMenu}
                      sx={{
                        my: 2,
                        paddingY: "8px",
                        paddingX: "22px",
                        color: "black",
                        display: "flex",
                        marginRight: { md: "10px", lg: "20px" },
                        justifyContent: "",
                        "&:hover": { bgcolor: "rgb(51,51,51)", color: "white" },
                      }}
                    >
                      Home
                    </Button>
                    </Link> 

                  <Link to="/Store_main"> <Button
                      onClick={handleCloseNavMenu}
                      sx={{
                        my: 2,
                        paddingY: "8px",
                        paddingX: "22px",
                        color: "black",
                        display: "flex",
                        marginRight: { md: "10px", lg: "20px" },
                        justifyContent: "",
                        "&:hover": { bgcolor: "rgb(51,51,51)", color: "white" },
                      }}
                    >
                      Store
                    </Button>
                    </Link> 

                   <Link to="/Contact_main"> <Button
                      onClick={handleCloseNavMenu}
                      sx={{
                        my: 2,
                        paddingY: "8px",
                        paddingX: "22px",
                        color: "black",
                        display: "flex",
                        marginRight: { md: "10px", lg: "20px" },
                        justifyContent: "",
                        "&:hover": { bgcolor: "rgb(51,51,51)", color: "white" },
                      }}
                    >
                      Contact
                    </Button></Link>

                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{
                        my: 2,
                        paddingY: "8px",
                        paddingX: "22px",
                        color: "black",
                        display: "flex",
                        marginRight: { md: "10px", lg: "20px" },
                        justifyContent: "",
                        "&:hover": { bgcolor: "rgb(51,51,51)", color: "white" },
                      }}
                    >
                      About Us
                    </Button>

                    <FormControl
                      variant="standard"
                      onClick={handleCloseNavMenu}
                      sx={{
                        color: "rgb(248, 24, 24)",
                        border: "1px solid",
                        marginLeft: "20px",
                        // display: {xs: "none"},
                      }}
                    >
                      <InputLabel
                        htmlFor="input-with-icon-adornment"
                        sx={{ color: "error" }}
                      >
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

                    <InputAdornment
                position="end"
                sx={{ marginLeft: "30px",marginTop: "40px",marginBottom: "20px", display: { xs: "" } }}
              >
                <ShoppingCartIcon sx={{ fontSize: "35px" }} />
              </InputAdornment>
                  </Typography>
                </MenuItem>
                {/* ))} */}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            {/* <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "black",
                textDecoration: "none",
                color: "black",
              }}
            >
              LOGO
            </Typography> */}

            <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Link to="/Store_main">  <Button
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  paddingY: "8px",
                  paddingX: "22px",
                  color: "black",
                  display: "flex",
                  marginRight: { md: "10px", lg: "20px" },
                  justifyContent: "",
                  "&:hover": { bgcolor: "rgb(51,51,51)", color: "white" },
                }}
              >
                Store
              </Button>
              </Link>

             <Link to="/Contact_main"> <Button
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  paddingY: "8px",
                  paddingX: "22px",
                  color: "black",
                  display: "flex",
                  marginRight: { md: "10px", lg: "20px" },
                  justifyContent: "",
                  "&:hover": { bgcolor: "rgb(51,51,51)", color: "white" },
                }}
              >
                Contact
              </Button>
              </Link>

              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  paddingY: "8px",
                  paddingX: "22px",
                  color: "black",
                  display: "flex",
                  marginRight: { md: "10px", lg: "20px" },
                  justifyContent: "",
                  "&:hover": { bgcolor: "rgb(51,51,51)", color: "white" },
                }}
              >
                About Us
              </Button>

              <FormControl
                variant="standard"
                onClick={handleCloseNavMenu}
                sx={{
                  color: "rgb(248, 24, 24)",
                  border: "1px solid",
                  marginLeft: "20px",
                  marginY: "12px"
                  // display: {xs: "none"},
                }}
              >
                <InputLabel
                  htmlFor="input-with-icon-adornment"
                  sx={{ color: "error" }}
                >
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

              <InputAdornment
                onClick={handleCloseNavMenu}
                position="end"
                sx={{ marginLeft: "30px",marginTop: "40px", display: { xs: "" } }}
              >
                <ShoppingCartIcon sx={{ fontSize: "35px" }} />
              </InputAdornment>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default Header2;
