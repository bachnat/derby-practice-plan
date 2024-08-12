import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Stack, Typography, Modal, Paper } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const AddEditPractice = ({practice, showInModal, onpracticeUpdate}) => {
    const [name, setName] = useState(practice?.name || "");

    const typing = async event => {
        let text = event.target.value;

        switch (event.target.id) {
            case "editpracticeName":   
                setName(text);
                break;
         }
    }

    const save = async e => {
        e.preventDefault();
        const reqBody = { name: { name } }
        console.log(reqBody);

        try {
            if(practice){
                // edit existing practice
                const response = await fetch(`http://localhost:5000/practices/${practice.practice_id}`, {
                    method: "PUT",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(reqBody)
                }); 
            } else {
                //add new practice
                const response = await fetch("http://localhost:5000/practices",{
                    method: 'POST',
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(reqBody)
                });
            }
            
            /////to do: go to Practice detail
            onpracticeUpdate('add or edit');
        } catch (error) {
            console.error(error.message);
        }
    }

    const deletepractice = async id => {
        try {
            const deleteReq = await fetch(`http://localhost:5000/practices/${id}`,{
                method: "DELETE"
            });
            
            onpracticeUpdate('delete');
        } catch (error) {
            console.error(error.message);
        }
    };

    return(
        <>
        <Typography variant="h5" mb={2}>{practice ? "Edit" : "Add"} practice</Typography>
        <form 
            id="editpracticeForm"
        >
            <Stack spacing={2}>
            <TextField id="editpracticeName" 
                label="Practice Name" 
                variant="outlined" 
                fullWidth
                value={name}
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
                component={RouterLink}
                variant="text"
                to="/"
            >Cancel</Button>
                </Box>
                
                {practice && 
                <Button
                    variant="text"
                    color="error"
                    onClick={() => deletepractice(practice.practice_id)}
                        >Delete</Button>
                }
            </Box>
            </Stack>
            </form>
        </>
    )
}

export default AddEditPractice;