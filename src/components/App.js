import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import axios from 'axios';

class App extends React.Component {
  
  state = {videos: [], selectedVideo: null};

  componentDidMount() {
    this.onSearchSubmit('hello world')
  }
  //^^^ this componentDidMount allows us to provide a default search term, so that the user doesn't just see a blank screen when coming to the website

  onSearchSubmit = async (keyword) => {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search',{
      params: {
        q: keyword, 
        type: 'video', 
        key: 'AIzaSyDHrzazB7fK_odzK5p2PAS7Q4FQSHGuN44',
        part: 'snippet'
      }
    })
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  }

  onVideoSelect = (video) => {
    this.setState({selectedVideo: video});
    // ^^^ the onVideoSelect callback function takes in a video object (being the individual video from the state list, "videos", and assigns it to the 'selected video' state object)
  }

  render() {
    return (
        <div className="container mx-auto">
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <div className="grid grid-cols-3 gap 4">
          <VideoDetail video={this.state.selectedVideo}/>
          <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
        </div>
      </div>
    ) 
  }
};

export default App;