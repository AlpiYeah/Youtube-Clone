import { Box, CardContent, Stack, Card, Typography } from '@mui/material'
import React from 'react'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import Loader from './Loader'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


const CommentSection = () => {

  const {id} = useParams()
    const [comments, setComments] = useState([])

    useEffect(() => {
        fetchFromAPI(`commentThreads?part=snippet&videoId=${id}&maxResults=25`).then((data)=>setComments(data.items))
          }, [comments])

          if(!comments?.length) return <Loader />;

  return (
    <Stack direction="column">
      {comments.map((item,idx) => (
        <Box key={idx}>
            {item.id.id && 
             <Card>
        <Stack direction="row">
            <CardContent>
                <Typography>
                    {snippet?.topLevelComment?.snippet?.authorDisplayName}
                </Typography>
            </CardContent>

        </Stack>
    </Card>}

        </Box>
      ))}

    </Stack>
  )
}

export default CommentSection