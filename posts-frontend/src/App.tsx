import React from 'react';
import {Routes} from 'react-router-dom';
import AppToolBar from './components/UI/AppToolBar/AppToolBar';
import {Container, CssBaseline} from '@mui/material';

const App = () => (
    <Container className="App">
      <CssBaseline/>
      <AppToolBar/>
      <Routes>
      </Routes>
    </Container>
);

export default App;
