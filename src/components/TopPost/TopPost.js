
import { Box, Divider, Stack, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import './toppost.css'

const TopPost = ({title, imgUrl, createdAt }) => {

  return (
    <Box sx={{ paddingBottom: "15px" }}>
      <Link
        to={{
          pathname: "/post",
          search: `?title=${title}`,
          hash: "#hash-title",
          state: { Post: true },
        }}
        className="link"
      >
        <Stack direction="row" spacing={3}>
          <Box>
            <img src={`${imgUrl}`} alt="" width="120px" />
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: "18px",
                color: "#00AACC",
              }}
            >
              {title}
            </Typography>
            <Typography
              sx={{ fontSize: "10px", fontStyle: "italic" }}
              color="textSecondary"
            >
              {createdAt}
            </Typography>
          </Box>
        </Stack>
      </Link>
      <Divider />
    </Box>
  );
}

TopPost.propTypes = {
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string,
  createdAt: PropTypes.string,
}

export default TopPost;