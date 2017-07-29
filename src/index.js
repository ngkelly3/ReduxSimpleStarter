import React from 'react';
import ReactDOM from 'react-dom';

// Google API Key that will allow us to make requests to YouTube
const API_KEY = 'AIzaSyB_LPp1iO9UqxA_HK8DtQ27JNm6MSothpk';

// Create a new component.  This component should produce
// some HTML (but we haven't sent it to the DOM yet!)

const App = () => {
  return (
    <div>Hi!</div>
  )
}

// Take this component's generated HTML and put it on
// the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
