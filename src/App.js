import React from 'react';
import SearchBar from './components/container/SearchBar';
import VideoList from './components/container/VideoList';
import VideoDetail from './components/presentational/VideoDetail';
import axios from 'axios';

const App = () => {
  
  const [video, setVideo] = useState(null);

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
  }

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

export default App;