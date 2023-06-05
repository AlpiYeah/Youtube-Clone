import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(
        `channels?part=snippet,statistics&id=${id}`
      );
      setChannelDetail(data?.items[0]);
      const videosData = await fetchFromAPI(
        `search?channelId=${id}&part=snippet%2Cid&order=date`
      );

      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box >
        <img
          class="banner"
          alt={channelDetail?.snippet?.title}
          src={channelDetail?.brandingSettings?.image?.bannerExternalUrl}
        />
      </Box>
      <ChannelCard channelDetail={channelDetail} marginTop="-60px" marginLeft="30px" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} />

      <Box p={2} display="flex">
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
