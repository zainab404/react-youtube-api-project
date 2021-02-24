import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos, onVideoSelect}) => {
//  ^^^ this "videos" is referencing our state
  const renderedVideoList = videos.map((video) => {
    return (
    <VideoItem 
    key={video.id.videoId} 
    onVideoSelect={onVideoSelect} 
    video={video}/>
    )
                                                // ^^^ the video prop allows us to pass down each individal video's information to the VideoItem Component via the props system
    // The renderedVideoList variable loops for the videos state list and for each video it returns an instance of the VideoItem component
  });
  return <div>{renderedVideoList}</div>;
}

export default VideoList;

