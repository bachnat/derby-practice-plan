import React, { useState, useEffect } from 'react';
import { Typography, Chip, Stack } from '@mui/material';
import Button from '@mui/material/Button';
import { Edit, Close } from '@mui/icons-material';

import AddEditDrill from "./AddEditDrill.js";

const DrillDetail = ({drill, closeDrillDetail, onDrillUpdate}) => {
    const [editing, setEditing] = useState(false);
    const [selectedDrill, selectDrill] = useState(drill);

    useEffect(() => {
        selectDrill(drill);
    }, [drill]);

    const toggleEditing = async => {
        setEditing(!editing);
    }

    const fetchUpdatedDrill = async(drill_id) => {
        try {
            const response = await fetch(`http://localhost:5000/drills/${drill_id}`); 
            const jsonData = await response.json();

            return jsonData;
        } catch (error) {
            console.error(error.message);
        }
    }

    const handleDrillUpdate = async (action) => {
        if (action === "delete") {
            closeDrillDetail();
        } else {
            const updatedDrill = await fetchUpdatedDrill(drill.drill_id);
            selectDrill(updatedDrill); //update the drill that was changed
        } 
        onDrillUpdate(); //update the List view 
    }

    return(
        <>
            <Button 
                onClick={closeDrillDetail}
                sx={{ position: 'absolute', right: 0, top: 0, width: 58, height: 58 }}
            ><Close/></Button>

            {!editing &&     
            <>
            <Typography variant="h4" mb={2}>{selectedDrill.name}</Typography>

            <Typography variant="subtitle2" mb={1}>Description</Typography>
            <Typography variant="body1" mb={2}>{selectedDrill.description}</Typography>

            <Typography variant="subtitle2" mb={1}>Skills practiced</Typography>
            <Stack direction="row" spacing={1} mb={2}>
                <Chip label="Example 1"/>
                <Chip label="Example 2" />
                <Chip label="Example 3" />
            </Stack>

            <Typography variant="subtitle2" mb={1}>Duration (minutes)</Typography>
            <Typography variant="body1" mb={2}>{selectedDrill.duration}</Typography>

            <Button variant="text" onClick={toggleEditing}><Edit sx={{ marginRight: 0.5}}/> Edit</Button>
            </>
            }

            {editing &&
            <AddEditDrill drill={selectedDrill} closeEditor={toggleEditing} onDrillUpdate={handleDrillUpdate}></AddEditDrill>
            }
        </>
    )
}

export default DrillDetail;