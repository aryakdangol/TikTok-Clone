import React, { useState } from 'react'
import "./VideoSidebar.css"
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';

function VideoSidebar({likes, shares, messages}) {
    const[liked, setLiked] = useState(false);


    return (
        <div className = "videoSidebar">
            <div className="videoSidebar-button">
                {liked 
                ? <FavoriteIcon fontSize="large" onClick = {(e) => setLiked(false)} /> 
                : <FavoriteBorderIcon onClick = {(e) => setLiked(true)} />}
                <p>{liked ? likes + 1: likes}</p>
            </div>
            <div className="videoSidebar-button">
                <CommentIcon fontSize="large" />
                <p>{messages}</p>
            </div>
            <div className="videoSidebar-button">
                <ShareIcon fontSize="large"/>
                <p>{shares}</p>
            </div>
        </div>
    )
}

export default VideoSidebar
