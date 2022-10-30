import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { LinkedIn, Twitter, GitHub } from "@mui/icons-material";

const Footer = () => {
  // const classes = styles();

  const openNewWindowTab = (url) => {
    window.open(url);
  };

  return (
    <footer style={{ backgroundColor: "#eeeeee", marginTop: 30  }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={4} sx={{}}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              paddingLetf: "20px",
              paddingRight: "20px",
            }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography sx={{ color: "#00AACC" }}>Home</Typography>
            </Link>
            <Link to="/posts" style={{ textDecoration: "none" }}>
              <Typography sx={{ color: "#00AACC" }}>All Posts</Typography>
            </Link>
            <Link to="/portfolio" style={{ textDecoration: "none" }}>
              <Typography sx={{ color: "#00AACC" }}>Portfolios</Typography>
            </Link>
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={4} sx={{}}></Grid>

        <Grid item xs={12} sm={12} md={4}>
          <Typography variant="body1" align="center" gutterBottom>
            More About Me ...
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="text"
              onClick={() => openNewWindowTab("https://github.com/musekwa")}
            >
              <GitHub fontSize="large" sx={{ color: "#00AACC" }} />
            </Button>
            <Button
              variant="text"
              onClick={() =>
                openNewWindowTab("https://twitter.com/MusekwaEvariste")
              }
            >
              <Twitter fontSize="large" sx={{ color: "#00AACC" }} />
            </Button>
            <Button
              variant="text"
              onClick={() =>
                openNewWindowTab("https://www.linkedin.com/in/musekwa/")
              }
            >
              <LinkedIn fontSize="large" sx={{ color: "#00AACC" }} />
            </Button>
          </Box>
        </Grid>
      </Grid>

      <Typography variant="body2" align="center">
        Licensed under
        <Button
          variant="text"
          sx={{ color: "#00AACC" }}
          onClick={() =>
            openNewWindowTab("https://creativecommons.org/licenses/by/4.0/")
          }
        >
          CC BY 4.0
        </Button>
        &copy; 2021 Musekwa
      </Typography>
      {/* </Container> */}
    </footer>
  );
}

export default Footer;
