import { useState } from 'react';
import { TextField, Button, Box, Stack, Typography, Modal, Paper } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const AddEditPractice = ({practice, showInModal, onPracticeUpdate}) => {
    const [name, setName] = useState(practice?.name || "");

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const navigate = useNavigate();

    const resetForm = () => {
        setName('');
    };

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
                const response = await fetch(`/api/practices/${practice.practice_id}`, {
                    method: "PUT",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(reqBody)
                }); 
            } else {
                //add new practice
                const response = await fetch("/api/practices",{
                    method: 'POST',
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(reqBody)
                });
            }
            
            if(showInModal){
                handleClose();
            } else {
                navigate('/');
            }

            onPracticeUpdate('add or edit');
            resetForm();
        } catch (error) {
            console.error(error.message);
        }
    }

    const deletepractice = async id => {
        try {
            const deleteReq = await fetch(`/api/practices/${id}`,{
                method: "DELETE"
            });
            
            onPracticeUpdate('delete');
        } catch (error) {
            console.error(error.message);
        }
    };

    const returnFormBody = () => {
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
                onClick={showInModal ? handleClose : () => navigate('/')}
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

    return(
        <>
        {showInModal ? 
        (
            <>
            <Button
                    variant="contained"
                     onClick={handleOpen}
                >Create Practice</Button>

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

export default AddEditPractice;