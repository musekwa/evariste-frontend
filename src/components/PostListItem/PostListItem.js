import { Chip, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const PostListItem = ({ post }) => {
  return (
    <Paper
      sx={{ p: 1, margin: "5px 0px 10px 0px", backgroundColor: "#f8f8f8" }}
    >
      <Link
        to={{
          pathname: "/post",
          search: `?title=${post?.title}&category=${post?.category}`,
          hash: "#hash-title",
          state: { Post: true },
        }}
        style={{
          textDecoration: "none",
          color: "inherit",
          padding: "5px 0px 5px 0px",
        }}
      >
        <Typography
          sx={{ fontSize: "16px", color: "#00AACC", textAlign: "left" }}
        >
          {post?.title}
        </Typography>
      </Link>
      <Typography sx={{ fontSize: "12px", textAlign: "justify" }}>
        {post?.description}
      </Typography>
      <Grid container>
        <Grid
          item
          xs={8}
          sx={{
            display: "flex",
            alignItems: "end",
            justifyContent: "start",
          }}
        >
          {post?.tags?.map((tag, index) => {
            return (
              <Chip
                key={index}
                size="small"
                label={`${tag}`}
                component={Link}
                to={{
                  pathname: "/all-posts",
                  search: `?tag=${tag}`,
                  hash: "#the-hash",
                  state: { AllPosts: true },
                }}
                clickable
                sx={{ margin: "2px", color: "#00AACC" }}
              />
            );
          })}
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            display: "flex",
            alignItems: "end",
            justifyContent: "end",
          }}
        >
          <Typography
            sx={{
              fontStyle: "italic",
              fontSize: "10px",
              textAlign: "right",
              color: "slategrey",
            }}
          >
            {post?.createdAt}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default PostListItem;
