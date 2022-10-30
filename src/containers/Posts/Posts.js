import {
  Box,
  Chip,
  Divider,
  Typography,
} from "@mui/material";
import React, { useState, useEffect, Fragment } from "react";
import { useLocation, Link } from "react-router-dom";
import PostListItem from "../../components/PostListItem/PostListItem";
import { allPosts } from "../../fakedata/fakedata.test";
// import './posts.css'


// Sort all the array of posts by the date of post creation
// parameter: an array of posts
// return value: a sorted array of posts
const sortPostsByCreatedDate = (allPosts) => {
  return allPosts.sort(
    (post1, post2) => new Date(post1.createdAt) - new Date(post2.createdAt)
  );
};

// Filter all the posts by their tags
// parameters: a tag and an array of posts
// return value: an array of filtered posts
const filterPostsByTag = (tag, posts = []) => {
  let filteredPosts = posts.filter((post) => {
    return post.tags?.includes(tag);
  });
  return filteredPosts;
};

// Get all the tags from all the posts
// parameter: an array of all posts
// return value: a set of all distinct tags
const getAllTags = (mergedPosts) => {
  let tags = new Set();
  mergedPosts.forEach((post) => {
    for (let i = 0; i < post.tags.length; i++) {
      if (!tags.has(post?.tags[i])) {
        tags.add(post.tags[i]);
      }
    }
    // console.log("tags ", tags);
  });

  return tags;
};

// const getAllPosts = ()=>allPosts


// component
const Posts = () => {
  const location = useLocation();
  const [posts, setPosts] = useState([]);
  const [tags, setTags] = useState(new Set());
  const tag = new URLSearchParams(location.search).get("tag");
  let month = 0;


  useEffect(() => {
    let mergedPosts = allPosts;

    let tags = getAllTags(mergedPosts);
    tags = new Set(tags);
    setTags(tags);

    let reversedSortedPosts = [];
    if (tag) {
      mergedPosts = filterPostsByTag(tag, mergedPosts).reverse();
    }
    reversedSortedPosts = sortPostsByCreatedDate(mergedPosts).reverse();

    setPosts(reversedSortedPosts);
  }, [tag, location, posts, ]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
        }}
        variant="body1"
      >
        {tag ? `${tag.charAt(0).toUpperCase() + tag.slice(1)}` : "All Posts"}
      </Typography>

      <Typography
        color="textSecondary"
        sx={{ padding: "5px", fontSize: "11px", textAlign: "center" }}
      >
        (
        {tag ? (
          <span>
            {tag.toLowerCase()} is tagged in {posts?.length}
            {posts?.length <= 1 ? " post" : " posts"}
          </span>
        ) : (
          <span>
            {posts?.length}
            {posts?.length <= 1 ? " post" : " posts from all categories"}
          </span>
        )}
        )
      </Typography>

      {posts?.length > 0 && (
        <Box
          sx={{
            margin: 2,
            display: "flex",
          }}
        >
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "block",
              },
              marginRight: {
                xs: 0,
                sm: 3,
              },
              width: "20%",
              height: "60vh",
              textAlign: "left",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Link
                to={{
                  path: "/posts",
                }}
                style={{
                  textDecoration: "none",
                  color: "#00AACC",
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      xs: "12px",
                      md: "16px",
                    },
                    marginTop: {
                      xs: 7,
                      md: 5,
                    },
                    lineHeight: 1,
                  }}
                >
                  Algorithms and Data Structures
                </Typography>
              </Link>
            </Box>
            <Divider />
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Link
                to={{
                  path: "/posts",
                }}
                style={{
                  textDecoration: "none",
                  color: "#00AACC",
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      xs: "12px",
                      md: "16px",
                    },
                    marginTop: {
                      xs: 7,
                      md: 5,
                    },
                    lineHeight: 1,
                  }}
                >
                  Software Engineering
                </Typography>
              </Link>
            </Box>
            <Divider />
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Link
                to={{
                  path: "/posts",
                }}
                style={{
                  textDecoration: "none",
                  color: "#00AACC",
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      xs: "12px",
                      md: "16px",
                    },
                    marginTop: {
                      xs: 7,
                      md: 5,
                    },
                    lineHeight: 1,
                  }}
                >
                  Tutorials
                </Typography>
              </Link>
            </Box>
            <Divider />
          </Box>

          <Box
            sx={{
              width: {
                xs: "100%",
                sm: "60%",
              },

              marginRight: {
                xs: 0,
                sm: 3,
              },
            }}
          >
            {posts.length > 0 &&
              posts?.map((post, index) => {
                let flag = 0;
                if (month !== new Date(post?.createdAt).getMonth()) {
                  month = new Date(post?.createdAt).getMonth();
                  flag = month;
                }

                return (
                  <Fragment key={index}>
                    {flag ? (
                      <Typography
                        sx={{ fontSize: "10px" }}
                        color="textSecondary"
                        align="left"
                      >
                        {new Date(post?.createdAt).toDateString().slice(4, 7) +
                          " " +
                          new Date(post?.createdAt)
                            .toDateString()
                            .slice(11, 15)}
                      </Typography>
                    ) : null}

                    <PostListItem post={post} />
                  </Fragment>
                );
              })}
          </Box>

          <Box
            sx={{
              width: "20%",
              display: {
                xs: "none",
                sm: "block",
              },
            }}
          >
            <Typography
              sx={{
                marginBottom: "10px",
                color: "#444",
                fontSize: "14px",
                textAlign: "center",
              }}
            >
              Search by tags
            </Typography>

            <Divider />

            {[...tags].map((tag, index) => (
              <Chip
                key={index}
                size="small"
                label={`${tag}`}
                component={Link}
                to={{
                  pathname: "/posts",
                  search: `?tag=${tag}`,
                  // hash: "#the-hash",
                  state: { Posts: true },
                }}
                clickable
                sx={{ margin: "4px", color: "#00AACC" }}
              />
            ))}
          </Box>
        </Box>
      )}

      {posts?.length === 0 && (
        <Box
          sx={{
            height: "60vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography>
            No post for{" "}
            <span
              style={{ fontWeight: "bold", fontStyle: "italic" }}
            >{`${tag}`}</span>
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Posts;
