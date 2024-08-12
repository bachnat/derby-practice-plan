import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';

import MainNav from './components/MainNav.js';
import PracticeManager from './components/practices/PracticeManager.js';
import DrillManager from './components/drills/DrillManager.js';
import SkillManager from './components/skills/SkillManager.js';
import AddEditPractice from './components/practices/AddEditPractice.js';

function App() {
  return (
    <Router>
          {/* <Typography variant="h1" display="block" gutterBottom>
        Roller Derby Practice Builder
      </Typography> */}
      <Box sx={{ display: 'flex' }}>
          <MainNav></MainNav>
          <Box 
            component="main"
            sx={{
              flexGrow: 1,
              padding: [0,6]
            }}>   
              <Routes>
                <Route exact path='/' element={<PracticeManager/>} />
                <Route exact path='/createpractice' element={<AddEditPractice/>} />
                <Route path='/drills' element={<DrillManager/>} />
                <Route path='/skills' element={<SkillManager/>} />
              </Routes>
          </Box>
      </Box>
    </Router>
  );
}

export default App;
