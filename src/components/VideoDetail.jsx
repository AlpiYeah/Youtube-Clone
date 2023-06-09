import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import {
  Typography,
  Box,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { CommentSection, Loader, Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import React from "react";
import { motion } from "framer-motion";
import DownloadIcon from "@mui/icons-material/Download";
import PersonIcon from "@mui/icons-material/Person";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { ThumbUp } from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import dayjs from "dayjs";
var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

const VideoDetail = () => {
  const [videos, setVideos] = useState(null);
  const [videoDetail, setVideoDetail] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  if (!videoDetail?.snippet) return <Loader />;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {videoDetail.snippet.title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              
              px={2}
            >
              <Link to={`/channel/${videoDetail.snippet.channelId}`}>
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <Typography variant="subtitle1" color="#fff">
                    {videoDetail.snippet.channelTitle}
                    <PersonIcon
                      fontSize="medium"
                      sx={{ marginLeft: "3px", marginBottom: "-6px" }}
                    />
                  </Typography>
                </motion.div>
              </Link>

              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1">
                  {parseInt(videoDetail.statistics.viewCount).toLocaleString()}{" "}
                  <RemoveRedEyeIcon
                    sx={{ marginLeft: "5px", marginBottom: "-6px" }}
                  />
                </Typography>
                <Typography variant="body1" >
                  {parseInt(videoDetail.statistics.likeCount).toLocaleString()}{" "}
                  <ThumbUp sx={{ marginLeft: "5px", marginBottom: "-6px" }} />
                </Typography>
                <Link to={`https://www.youtubdle.com/watch?v=${id}`}>
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                  >
                    <DownloadIcon
                      fontSize="medium"
                      sx={{ color: "#fff", marginBottom: "-6px" }}
                    />
                  </motion.div>
                </Link>
              </Stack>
            </Stack>
            <Accordion
              disableGutters
              elevation={0}
              sx={{
                backgroundColor: "#000",
                borderRadius: 2,
                "&:before": {
                  display: "none",
                },
                marginY:"20px"
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                Details
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    color: "white",

                    paddingBottom: "10px",
                    fontWeight: "bold",
                  }}
                >
                  Uploaded • {dayjs().to(dayjs(videoDetail.snippet.publishedAt))}
                </Typography>
                <Typography sx={{ color: "white" }}>
                  {videoDetail?.snippet.description}
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Typography
              sx={{
                color: "white",
                paddingX: "20px",
                paddingTop: "20px",
                paddingBottom: "10px",
                fontWeight: "bold",
              }}
            >
              {parseInt(videoDetail.statistics.commentCount).toLocaleString()}{" "}
              Comments
            </Typography>

            <CommentSection id={id} />
          </Box>
        </Box>

        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          marginTop="-13px"
          
        >
          <Typography
          variant="h4"
          fontWeight="bold"
          align="center"
          mb={2}
          sx={{
            color: "white",
            marginBottom:"10px"
          }}
        >
          Suggested <span style={{ color: "#F31503" }}>Videos</span>
        </Typography>
          <div>
            <Videos videos={videos} direction="column" />
          </div>
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
