import { ArrowRightAlt } from "@mui/icons-material";
import { Box, Button, Chip, Grid, Paper, styled, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const LinkedTypography = styled(Typography)(({ theme }) => ({
  fontWeight: "bolder",
  color: "#00AACC",
  "& .MuiTypography-h6": {
    "&:hover": {
      textDecoration: "underline",
      color: "gray",
    },
  },
}));


function PostCard({ post }) {

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item xs={12} md={12} lg={6} xl={6}>
        <Paper
          square
          elevation={1}
          sx={{
            marginTop: 2,
            marginBottom: 2,
          }}
        >
          <Box>
            <Box>
              <Link
                to={{
                  pathname: "/post",
                  search: `?title=${post.title}`,
                  hash: "#the-hash",
                  state: { Post: true },
                }}
              >
                <img
                  alt="post"
                  src={`${post.image}`}
                  className="all-post-image"
                  width="100%"
                  height="120px"
                />
              </Link>
            </Box>
            <Box sx={{ padding: 1.5 }}>
              <Link
                to={{
                  pathname: "/post",
                  search: `?title=${post.title}`,
                  hash: "#the-hash",
                  state: { Post: true },
                }}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <LinkedTypography variant="h6">{post.title}</LinkedTypography>
              </Link>
              <div>
                {post.tags.map((tag, index) => {
                  return (
                    <Chip
                      size="large"
                      label={`${tag}`}
                      component={Link}
                      key={index}
                      to={{
                        pathname: "/all-posts",
                        search: `?tag=${tag}`,
                        hash: "#the-hash",
                        state: { AllPosts: true },
                      }}
                      clickable
                      sx={{ margin: 1, color: "#00AACC" }}
                    />
                  );
                })}
              </div>
              <Typography
                sx={{
                  fontSize: "12px",
                  lineHeight: 1.5,
                  fontStyle: "italic",
                }}
                color="textSecondary"
                component="p"
              >
                {post.description}
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "right"}}>
                <Button
                  component={Link}
                  sx={{ textTransform: "none", color: "#00AACC" }}
                  to={{
                    pathname: "/post",
                    search: `?title=${post.title}`,
                    hash: "#the-hash",
                    state: { Post: true },
                  }}
                >
                  Continue reading
                  <ArrowRightAlt />
                </Button>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default PostCard;
