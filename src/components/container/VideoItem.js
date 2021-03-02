import React from 'react';
import './VideoItem.css';

const VideoItem = ({video, onVideoSelect}) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="h-40 grid grid-rows-1 grid-flow-col gap-4">
      {/* ^^^^^^^^ this onClick prop makes sure that when a user clicks, it invoked the onVideoSelect callback function and refers to the particular video being clicked on */}
      <div className="border-solid border-4 border-light-blue-500" id="video-item">
        <div className="video-title">{video.snippet.title}</div>
        <img 
        src={video.snippet.thumbnails.medium.url} 
        alt={video.snippet.title}>
        </img>
      </div>
    </div>
  ) 
};

export default VideoItem;