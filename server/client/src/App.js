import React from 'react';
import { Container, Typography } from '@mui/material';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';

//components
import DrillsManager from './components/drills/DrillsManager.js';
import ListSkills from './components/skills/ListSkills.js';

function App() {
  return (
    <Container>
      <Typography variant="h2">Roller Derby Practice Plan</Typography>
      <Typography variant="h4" mb={4}>All Drills</Typography>
      <DrillsManager></DrillsManager>
      <hr/>
        <p><strong>To do next:</strong></p>
          <ol>
            <li>Clean up layout Move Skills onto their own page</li>
            <li>Form error checking</li>
            <li>Create a plan - with Name</li>
            <li>Add drills to plan - show list of drills</li>
            <li>Revamp list - click on row expands the details, not a button</li>
            <li>CloseEditor - set by params, if no param, then default (instead of the ternatary operators everywhere)</li>
            <li>Get tagging working - database setup</li>
            <li>Get tagging working - display tags per drill</li>
            <li>Get tagging working - allow add/editing of tags</li>
            <li>What happens if you select another drill while you're editing a different one?</li>
            <li>Add "Are you sure?" to delete component</li>
            <li>Sort list of drills alphabetically (later - allow use to sort)</li>
            <li>Tagging autocomplete typing</li>
            <li>Filter by tags</li>
            <li>Later: sorting</li>
          </ol>
      <hr/>
      <ListSkills></ListSkills>
    </Container>
  );
}

export default App;
