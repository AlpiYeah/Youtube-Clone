import { Card, CardContent, Stack, Typography } from '@mui/material'
import React from 'react'

const CommentCard = ({comment:{id:{id}, snippet}}) => {
  return (
    <Card>
        <Stack direction="row">
            <CardContent>
                <Typography>
                    {snippet?.topLevelComment?.snippet?.authorDisplayName}
                </Typography>
            </CardContent>

        </Stack>
    </Card>
  )
}

export default CommentCard