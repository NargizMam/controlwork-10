import React from 'react';
import {Route, Routes} from 'react-router-dom';
import AppToolBar from './components/UI/AppToolBar/AppToolBar';
import {Container, CssBaseline} from '@mui/material';
import Posts from './features/posts/Posts';
import NewPost from './features/posts/NewPost';
import NewsInfo from './features/posts/components/NewsInfo';

const App = () => (
    <>
      <CssBaseline/>
      <header>
        <AppToolBar/>
      </header>
      <main>
        <Container>
          <Routes>
            <Route path="/" element={<Posts/>}/>
            <Route path="/create-news" element={<NewPost/>}/>
            <Route path="/news-info/:id" element={<NewsInfo/>}/>
          </Routes>
        </Container>
      </main>
    </>
);

export default App;
