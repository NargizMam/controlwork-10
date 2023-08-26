import React from 'react';
import {Route, Routes} from 'react-router-dom';
import AppToolBar from './components/UI/AppToolBar/AppToolBar';
import {Container, CssBaseline} from '@mui/material';
import Posts from './features/posts/Posts';

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
          </Routes>
        </Container>
      </main>
    </>
);

export default App;
