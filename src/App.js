import React from 'react';
import './App.css';
import asyncHOC from './components/asyncHOC';
import InfiniteScroller from './components/InfiniteScroller';

function App() {
  let AsyncButton = asyncHOC(() => {
    return new Promise((resolve) => {
      // simulate delayed loading
      setTimeout(() => {
        resolve(import('./components/Button'));
      }, 2000);
    });
  });
  return (
    <div className="App" style={{margin: 20}}>
      <InfiniteScroller />
    </div>
  );
}

export default App;
