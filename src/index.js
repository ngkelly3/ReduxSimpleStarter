import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// Google API Key that will allow us to make requests to YouTube
const API_KEY = 'AIzaSyB_LPp1iO9UqxA_HK8DtQ27JNm6MSothpk';

// Create a new component.  This component should produce
// some HTML (but we haven't sent it to the DOM yet!)
class App extends Component {

  state = {
    videos: [],
    selectedVideo: null
  };

  componentDidMount() {
    this.videoSearch('surfboards');
  }

  videoSearch = (term) => {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    )
  }
}

// Take this component's generated HTML and put it on
// the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
