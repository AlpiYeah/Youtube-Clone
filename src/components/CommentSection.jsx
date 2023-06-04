import {
  Box,
  CardContent,
  Stack,
  Card,
  Typography,
  Avatar,
  CardMedia,
  Divider,
} from "@mui/material";
import React from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import Loader from "./Loader";
import { useState, useEffect } from "react";

const CommentSection = ({ id }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchFromAPI(
      `commentThreads?part=snippet&videoId=${id}&maxResults=1`
    ).then((data) => setComments(data.items));
  }, [comments]);

  if (!comments?.length) return <Loader />;

  return (
    <Stack direction="column">
      {comments.map((comments, idx) => (
        <Box key={idx}>
          {comments.id && (
            <Card sx={{ backgroundColor: "primary.main" }}>
              <Stack direction="row">
                <CardContent sx={{ display: "block", textAlign: "center" }}>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    color="#FFF"
                  >
                    {
                      comments?.snippet?.topLevelComment?.snippet
                        ?.authorDisplayName
                    }
                  </Typography>
                  <Typography variant="subtitle2" color="#FFF">
                    {comments?.snippet?.topLevelComment?.snippet?.textOriginal}
                  </Typography>
                </CardContent>
                <Divider color="#1e1e1e">

                </Divider>

                <Avatar
                  alt={
                    comments?.snippet?.topLevelComment?.snippet
                      ?.authorDisplayName
                  }
                  src={
                    comments?.snippet?.topLevelComment?.snippet
                      ?.authorProfileImageUrl
                  }
                />
              </Stack>
            </Card>
          )}
        </Box>
      ))}
    </Stack>
  );
};

export default CommentSection;
