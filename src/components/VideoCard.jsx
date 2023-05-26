import { Link } from "react-router-dom"
import { Typography, Card, CardContent, CardMedia } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import { motion } from "framer-motion"
import Avatar from "@mui/material"

const VideoCard = ({video: { id: {videoId}, snippet}}, {channelDetail}) => {
  return (

    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >


    <Card sx={{ width: "320px", boxShadow:"none", borderRadius:"2%", padding:"10px", backgroundColor:"#1e1e1e"}}>
        <Link to={`/video/${videoId}`}>
        <CardMedia 
        image={snippet?.thumbnails?.high?.url}
        alt={snippet?.title}
        sx={{width:"320px", height: 180}}
        />
        </Link>
<CardContent sx={{ backgroundColor: "#1e1e1e", height: "100px"}}>
<Link to={`/video/${videoId}`}>
    <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
        {snippet?.title.slice(0,60)}
    </Typography>
    </Link>
    <Link to={`/channel/${snippet?.channelId}`}>
    
    <Typography variant="subtitle2" fontWeight="bold" color="gray">
        {snippet?.channelTitle.slice(0,60)}
        <CheckCircle sx={{ fontSize: 14, color:"gray", ml: "5px"}}/>
    </Typography>
    </Link>
</CardContent>
    </Card>

    
    </motion.div>
  )
}

export default VideoCard