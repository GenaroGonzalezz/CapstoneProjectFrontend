import AppBar from "@mui/material/AppBar";
import { Badge, Typography, Box, Toolbar, IconButton, Button, Container } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import Grade from "@mui/icons-material/Grade";

const Navbar = ({ favMovieQty }) => {
  const navigate = useNavigate()

  return (
    <AppBar position="static" sx={{backgroundColor:"crimson"}}>
      <Container maxWidth="xl">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
              color: "inherit",
              display: { xs: "none", md: "flex" },
            }}
          >
            CLONEFLIX
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link to="/admin" style={{ textDecoration: "none" }}>
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Admin
              </Button>
            </Link>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Shop
              </Button>
            </Link>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Badge badgeContent={favMovieQty}>
              <IconButton
                sx={{ p: 0 }}
                onClick={() => navigate('/cart')}
              >
              <Grade sx={{ color: "white" }} />
              </IconButton>
            </Badge>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
