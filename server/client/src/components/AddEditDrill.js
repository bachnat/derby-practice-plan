import React, { useState, useEffect } from 'react';

import { TextField, Button, Box, Stack } from '@mui/material';


const AddDrill = ({drill, cancelEditor}) => {
    const [enableSave, toggleEnableSave] = useState(false);
    const [name, setName] = useState(drill?.name || "");
    const [description, setDescription] = useState(drill?.description || "");
    const [duration, setDuration] = useState(drill?.duration || "");

    const addDrill = async e => {
        e.preventDefault();
        console.log('attempted to add '+ name + ' to the list');
        try {
            const reqBody= { name }
            const response = await fetch("http://localhost:5000/drills",{
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(reqBody)
            });

            window.location = "/";
        } catch (error) {
            console.error(error.message)
        }
    };

    const typing = async event => {
        let text = event.target.value;

        switch (event.target.id) {
            case "editDrillName":   
                setName(text);
                break;
            case "editDrillDescription":   
                setDescription(text);
                break;
            case "editDrillDuration":
                setDuration(text);
                break;
        }

        if(name !== drill.name || description !== drill.description || duration !== drill.duration){
            toggleEnableSave(true);
        } else {
            toggleEnableSave(false);
        }
    }

    const cancel = async => {
        cancelEditor();
    }

    const saveChanges = async e => {
        e.preventDefault();
        
        try {
            const reqBody = { name: { name } , description: { description }, duration: { duration } }
            console.log(reqBody);
            const response = await fetch(`http://localhost:5000/drills/${drill.drill_id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(reqBody)
            }); 
            
            // setOpen(false); we don't need to close it if the window refreshes
            ///need to refresh to show new edits somehow
            // window.location = "/";
        } catch (error) {
            console.error(error.message);
        }
    }

    const deleteDrill = async id => {
        try {
            const deleteReq = await fetch(`http://localhost:5000/drills/${id}`,{
                method: "DELETE"
            });
            
            window.location = "/";
            //TODO move into its own thing?
            ///TODO - Refresh the page? Reset the Parent component?
            // setDrills(drills.filter(drill => drill.drill_id !== id)); 
            ///show me all the todos that are not the id we just deleted
        } catch (error) {
            console.error(error.message);
        }
    };

    return(
        <>
        {drill &&
        <>
        <h3>Add/Edit Drill</h3>
        <form 
            id="editDrillForm"
            onSubmit={saveChanges}
        >
            <Stack spacing={2}>
            <TextField id="editDrillName" 
                label="Drill Name" 
                variant="outlined" 
                fullWidth
                value={name}
                onChange={typing}
            />

            <TextField id="editDrillDescription" 
                label="Description" 
                fullWidth
                multiline
                variant="outlined" 
                value={description}
                onChange={typing}
            />
            
            <TextField id="editDrillDuration" 
                label="Duration" 
                variant="outlined"
                value={duration}
                // endAdornment={<InputAdornment position="end">minutes</InputAdornment>}
                onChange={typing}
            />

            <Box display="flex" justifyContent="space-between">
                <Box>
                <Button
                    variant="contained"
                     sx={{ mr: 1 }}
                     disabled={!enableSave}
                     onClick={saveChanges}
                >Save</Button>
                <Button
                    variant="text"
                    onClick={cancel}
                >Cancel</Button>
                </Box>

                <Button
                    variant="text"
                    color="error"
                    onClick={() => deleteDrill(drill.drill_id)}
                        >Delete</Button>
            </Box>
            </Stack>
            </form>
            </>
        }

        {!drill && 
        <form onSubmit={addDrill}>
            <label htmlFor="addDrillInput">Add Drill</label>
            <input
            id="addDrillInput"
            type="text"
            onChange={e => setName(e.target.value)}
            />
            <button
            disabled={name.length === 0 }
            >Add Drill</button>
        </form>
        }
    </>
    )
}

export default AddDrill;