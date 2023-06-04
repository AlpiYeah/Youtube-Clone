import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { motion } from "framer-motion";
import PersonIcon from "@mui/icons-material/Person";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
      <Card
        sx={{
          width: "340px",
          boxShadow: "none",
          borderRadius: "2%",
          padding: "10px",
          backgroundColor: "#1e1e1",

        }}
      >
        <Link to={`/video/${videoId}`}>
          <CardMedia
            image={snippet?.thumbnails?.high?.url}
            alt={snippet?.title}
            sx={{ width: "320px", height: 180 }}
          />
        </Link>
        <CardContent sx={{ backgroundColor: "#1e1e1e", height: "100px" }}>
          <Link to={`/video/${videoId}`}>
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              color="#FFF"
              paddingBottom="5px"
            >
              {snippet?.title.slice(0, 60)}
            </Typography>
          </Link>
          <Link to={`/channel/${snippet?.channelId}`}>
            <Typography variant="subtitle2" fontWeight="bold" color="gray">
              <PersonIcon
                fontSize="small"
                sx={{ marginRight: "3px", marginBottom: "-4px" }}
              />
              {snippet?.channelTitle.slice(0, 60)}
            </Typography>
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default VideoCard;
