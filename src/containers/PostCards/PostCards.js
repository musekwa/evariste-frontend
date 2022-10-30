// import { Box } from "@mui/material";
import React from "react";
import PostCard from "../../components/PostCard/PostCard";


const PostCards = ({ postCards, category }) =>{
  return (
    <>
      {postCards[`${category}`] &&
        postCards[`${category}`]?.map((post, index) => {
          return <PostCard key={index} post={post} />;
        })}
    </>
  );
}

export default PostCards;
