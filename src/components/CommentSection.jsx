import {
  Box,
  CardContent,
  Stack,
  Card,
  Typography,
  Avatar,
  Divider,
} from "@mui/material";
import React from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import Loader from "./Loader";
import { useState, useEffect } from "react";
import ChatIcon from "@mui/icons-material/Chat";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { Link } from "react-router-dom";

const CommentSection = ({ id }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchFromAPI(`commentThreads?part=snippet&videoId=${id}&maxResults=1`).then(
      (data) => setComments(data.items)
    );
  }, [id]);

  if (!comments?.length) return <Loader />;

  return (
    <Stack direction="column">
      {comments
        .filter((item, index) => index < 20)
        .map((comments, idx) => (
          <Box key={idx}>
            {comments.id && (
              <Card
                sx={{
                  backgroundColor: "primary.main",
                  margin: 1,
                  borderRadius: 2,
                  padding: "15px",
                }}
              >
                <Stack direction="row">
                  <Link
                    to={`/channel/${comments?.snippet?.topLevelComment?.snippet?.authorChannelId}`}
                  >
                    <Avatar
                      alt={
                        comments?.snippet?.topLevelComment?.snippet
                          ?.authorDisplayName
                      }
                      src={
                        comments?.snippet?.topLevelComment?.snippet
                          ?.authorProfileImageUrl
                      }
                      sx={{ width: 52, height: 52 }}
                    />
                  </Link>
                  <CardContent sx={{ display: "block", marginTop: "-20px" }}>
                    <Link
                      to={`/channel/${comments?.snippet?.topLevelComment?.snippet?.authorChannelId.value}`}
                    >
                      <Typography variant="h6" fontWeight="bold" color="#FFF">
                        {
                          comments?.snippet?.topLevelComment?.snippet
                            ?.authorDisplayName
                        }
                      </Typography>
                    </Link>
                    <Typography variant="subtitle2" color="#FFF">
                      {
                        comments?.snippet?.topLevelComment?.snippet
                          ?.textOriginal
                      }
                    </Typography>
                  </CardContent>
                </Stack>
                <Divider color="#1e1e1e" variant="middle" />
                <Typography
                  variant="subtitle2"
                  fontWeight="bold"
                  color="gray"
                  marginTop="5px"
                  marginLeft="60px"
                >
                  <ChatIcon
                    fontSize="small"
                    sx={{ marginX: "8px", marginBottom: "-7.3px" }}
                  />
                  {parseInt(
                    comments?.snippet?.topLevelComment?.snippet?.likeCount
                  ).toLocaleString("en-US")}{" "}
                  <ThumbUpIcon
                    fontSize="small"
                    sx={{ marginBottom: "-7.3px", marginX: "8px" }}
                  />
                  {parseInt(comments?.snippet?.totalReplyCount).toLocaleString(
                    "en-US"
                  )}{" "}
                </Typography>
              </Card>
            )}
          </Box>
        ))}
    </Stack>
  );
};

export default CommentSection;
