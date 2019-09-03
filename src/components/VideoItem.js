import React from 'react';


const VideoItem = ({video, onVideoSelect}) => {
    return (
        <div className="video_items">
            <div  onClick={() => onVideoSelect(video)} className="left_video" style={{background: `url(${video.snippet.thumbnails.medium.url})`}}/>
            <div className="left_desc">
                {video.snippet.title}
                <p className="left_channel">{video.snippet.channelTitle}</p>
                <p className="left_channel">{Math.floor(Math.random() * 1000) + 1}K views</p>
            </div>
            
        </div>
    )
}

export default VideoItem;