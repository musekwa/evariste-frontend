

import { Box } from '@mui/material'
import React, { Fragment } from 'react'
import TopPost from '../../components/TopPost/TopPost'
import { topPosts } from '../../fakedata/topPosts.js'

const TopPosts = ({ category }) => {


  return (
    <Box>
        {
            topPosts[`${category}`]?.map((post) =>{  
                return (
                <Fragment key={post.title}>             
                    <TopPost  title={post.title} imgUrl={post.image} createdAt={post.createdAt} />
                </Fragment>
            )})
            
        }
    </Box>
  )
}

export default TopPosts