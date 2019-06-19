import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Posts from './components/Posts';
import PostForm from './components/Postform';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
         <PostForm/>
          <div className='hBorder'>&nbsp;</div>
          <Posts/>
        </header>
      </div>
    </Provider>
  );
}

export default App;
