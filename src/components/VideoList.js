import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos}) => {
    const renderVideoList = videos.map((video) => {
        return <VideoItem video={video}/>;
    })
    return <div>{renderVideoList}</div>
};

export default VideoList;