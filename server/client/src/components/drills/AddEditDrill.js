import React, { useState, useEffect } from 'react';

import { TextField, Button, Box, Stack, Typography, Modal, Paper } from '@mui/material';


const AddEditDrill = ({drill, closeEditor, showInModal, onDrillUpdate}) => {
    const [name, setName] = useState(drill?.name || "");
    const [description, setDescription] = useState(drill?.description || "");
    const [duration, setDuration] = useState(drill?.duration || "");

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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

        // if (!closeEditor && showInModal) {
    //     closeEditor = handleClose;
    // }

        //check if anything changed - this isn't super reliable - is there a better way of doing it in MUI?
        // if(drill && (name !== drill.name || description !== drill.description || duration !== drill.duration)){
        //     toggleEnableSave(true);
        // } else {
        //     toggleEnableSave(false);
        // }
    }

    const save = async e => {
        e.preventDefault();
        const reqBody = { name: { name } , description: { description }, duration: { duration } }
        console.log(reqBody);

        try {
            if(drill){
                // edit existing drill
                const response = await fetch(`http://localhost:5000/drills/${drill.drill_id}`, {
                    method: "PUT",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(reqBody)
                }); 
            } else {
                //add new drill
                const response = await fetch("http://localhost:5000/drills",{
                    method: 'POST',
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(reqBody)
                });
            }

            if(showInModal){
                handleClose();
            } else { 
                closeEditor();
            }
            onDrillUpdate('add or edit');
        } catch (error) {
            console.error(error.message);
        }
    }

    const deleteDrill = async id => {
        try {
            const deleteReq = await fetch(`http://localhost:5000/drills/${id}`,{
                method: "DELETE"
            });
            
            onDrillUpdate('delete');
        } catch (error) {
            console.error(error.message);
        }
    };

    const returnFormBody = () => {
        return(
            <>
        <Typography variant="h5" mb={2}>{drill ? "Edit" : "Add"} Drill</Typography>
        <form 
            id="editDrillForm"
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
                    //  disabled={!enableSave}
                     onClick={save}
                >Save</Button>

                <Button
                    variant="text"
                    onClick={showInModal ? handleClose : closeEditor}
                >Cancel</Button>
                </Box>
                
                {drill && 
                <Button
                    variant="text"
                    color="error"
                    onClick={() => deleteDrill(drill.drill_id)}
                        >Delete</Button>
                }
            </Box>
            </Stack>
            </form>
        </>
        )
    }

    return(
        <>
        {showInModal ? 
        (
            <>
            <Button
                    variant="contained"
                     onClick={handleOpen}
                >Add new drill</Button>

            <Modal
            aria-labelledby="unstyled-modal-title"
            aria-describedby="unstyled-modal-description"
            open={open}
            onClose={handleClose}
        >
            <Box 
                component={Paper} 
                sx={{ 
                    width: 800, 
                    padding: 4,
                    position: 'fixed',
                    top: 'calc(50% - 200px)',
                    left: 'calc(50% - 400px)'
                 }}>
                    {returnFormBody()}
            </Box>
        </Modal>
        </>
        ) : (
        returnFormBody()
        )
      }
    </>
    )
}

export default AddEditDrill;