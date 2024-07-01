import React, { useState } from 'react';
import { Typography, Chip, Stack } from '@mui/material';
import Button from '@mui/material/Button';
import { Edit } from '@mui/icons-material';

import AddEditDrill from "./AddEditDrill.js";

const DrillDetail = ({drill}) => {
    const [editing, setEditing] = useState(false);

    const toggleEditing = async => {
        setEditing(!editing);
    }

    return(
        <>
            {!editing &&     
            <>
            <Typography variant="h4" mb={2}>{drill.name}</Typography>

            <Typography variant="subtitle2" mb={1}>Description</Typography>
            <Typography variant="body1" mb={2}>{drill.description}</Typography>

            <Typography variant="subtitle2" mb={1}>Skills practiced</Typography>
            <Stack direction="row" spacing={1} mb={2}>
                <Chip label="Example 1"/>
                <Chip label="Example 2" />
                <Chip label="Example 3" />
            </Stack>

            <Typography variant="subtitle2" mb={1}>Duration (minutes)</Typography>
            <Typography variant="body1" mb={2}>{drill.duration}</Typography>

            <Button variant="text" onClick={toggleEditing}><Edit sx={{ marginRight: 0.5}}/> Edit</Button>
            </>
            }

            {editing &&
            <AddEditDrill drill={drill} cancelEditor={toggleEditing}></AddEditDrill>
            }
        </>
    )
}

export default DrillDetail;