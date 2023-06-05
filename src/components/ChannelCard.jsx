import React from "react";
import {
  Box,
  CardContent,
  CardMedia,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const ChannelCard = ({ channelDetail, marginTop, marginLeft }) => (
  <Box
    sx={{
      boxShadow: "none",
      borderRadius: "20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: { xs: "356px", md: "320px" },
      height: "326px",
      margin: "auto",
      marginTop,
    }}
  >
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          color: "#fff",
         
        }}
      >
        <CardMedia
        
          image={channelDetail?.snippet?.thumbnails?.high?.url}
          alt={channelDetail?.snippet?.title}
          sx={{
            borderRadius: "50%",
            height: "180px",
            width: "180px",
            mb: 2,
            border: "8px solid #000",
            
            marginLeft,
          }}
        />
        <Typography variant="h5" fontWeight="500"  >
          {channelDetail?.snippet?.title}
         
        </Typography>
        {channelDetail?.statistics?.subscriberCount && (
          
          <Stack direction="row" marginTop="10px" >
            <Stack direction="column" p={2} flex={'auto'} >
            <Typography
              sx={{ fontSize: "20px", fontWeight: 400, color: "white" }}
            >
             {parseInt(
                channelDetail?.statistics?.subscriberCount
              ).toLocaleString("en-US")}{" "}
</Typography>
<Typography
              sx={{ fontSize: "15px", fontWeight: 500, color: "gray" }}
            >
              Subscribers
            </Typography>
            </Stack>
            <Divider orientation="vertical" color="#1e1e1e" variant="middle" flexItem sx={{marginX:"10px"}}/>
            <Stack direction="column" p={2} flex={'auto'}>
            <Typography
              sx={{ fontSize: "20px", fontWeight: 400, color: "white" }}
            >
             {parseInt(
                channelDetail?.statistics?.videoCount
              ).toLocaleString("en-US")}{" "}
</Typography>
<Typography
              sx={{ fontSize: "15px", fontWeight: 500, color: "gray" }}
            >
              Uploads
            </Typography>
            </Stack>
          </Stack>
        )}
      </CardContent>
    </Link>
  </Box>

);

export default ChannelCard;
