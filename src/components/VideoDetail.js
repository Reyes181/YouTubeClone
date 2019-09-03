import React from 'react';

import UserIcon from '../resources/user_icon.jpg';

const VideoDetail = ({video}) => {
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

    return(
        <div className="selected_video">
            <div className="main_video">
                <iframe 
                    frameBorder="0" 
                    height="100%" 
                    width="100%" 
                    title="Video Player"
                    src={videoSrc}
                />
            </div>
            <div className="main_content">
                <h2 className="main_title">
                    {video.snippet.title} 
                </h2>
                <h4 className="main_views">{(Math.floor(Math.random() * 1000000) + 1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} views</h4>
                <div className="border"></div>
                <div className="main_channel_box">
                    <div className="channel_icon" style={{background: `url(${UserIcon})`}}/>
                    <div className="detail_box">
                        <h3 className="main_channel">
                            {video.snippet.channelTitle}
                        </h3>
                        <h4 className="main_published">
                            Published on {(new Date(video.snippet.publishedAt)).toString().split(' ').splice(1,3).join(' ')}
                        </h4>
                        <p className="main_desc">
                            {video.snippet.description}
                        </p>
                    </div>
                    <div className="subscribe_box">
                        <div className="sub_button">
                            SUBSCRIBE 52K
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoDetail