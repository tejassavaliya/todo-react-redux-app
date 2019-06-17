import React from 'react';
import './App.css';

import Posts from './components/Posts';
import PostForm from './components/Postform';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <PostForm/>
        <div className='hBorder'>&nbsp;</div>
        <Posts/>
      </header>
    </div>
  );
}

export default App;
