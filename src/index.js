import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

// Google API Key that will allow us to make requests to YouTube
const API_KEY = 'AIzaSyB_LPp1iO9UqxA_HK8DtQ27JNm6MSothpk';

// Create a new component.  This component should produce
// some HTML (but we haven't sent it to the DOM yet!)
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {videos: []};
    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {this.setState({ videos })});

  };

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    )
  }
}

// Take this component's generated HTML and put it on
// the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
