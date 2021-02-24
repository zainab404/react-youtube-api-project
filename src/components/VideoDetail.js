import React from 'react';

const VideoDetail = ({video}) => {
  if(!video) {
    return <h2>Loading...</h2>
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

  return (
  <div>
    <div>
      <iframe title="video player" src={videoSrc} />
    </div>
    <div className="segment">
      <h4 className="header">{video.snippet.title}</h4>
      <p>{video.snippet.description}</p>
    </div>
    
  </div>
  )
}

export default VideoDetail;
