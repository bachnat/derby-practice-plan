import React, { Fragment } from 'react';
import { Container } from '@mui/material';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';

//components
import AddEditDrill from "./components/AddEditDrill.js";
import ListDrills from './components/ListDrills.js';
import ListSkills from './components/ListSkills.js';

function App() {
  return (
    <Container>
      <h1>Roller Derby Practice Plan</h1>
        <AddEditDrill></AddEditDrill>
        <ListDrills></ListDrills>
      <hr/>
        <p><strong>To do next:</strong></p>
          <ol>
            <li>Use same component for add/edit - pass an existing drill to it / Revamp Add Drill to account for new fields</li>
            <li>Refresh List view when a drill is deleted or changed</li>
            <li>When a drill is changed and its name changes, need to show change in the List</li>
            <li>Revamp list - click on row expands the details, not a button</li>
            <li>Get tagging working - database setup</li>
            <li>Get tagging working - display tags per drill</li>
            <li>Get tagging working - allow add/editing of tags</li>
            <li>Add "Are you sure?" to delete component</li>
            <li>Sort list of drills alphabetically</li>
            <li>Spend some more time making it look nice??</li>
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
