
import React, { useState } from 'react';
import { TextField, Button, Box, Stack, Typography, Modal, Paper } from '@mui/material';

const AddSkill = () => {
    const [name, setName] = useState("")

    const addSkill = async e => {
        e.preventDefault();
        
        try {
            const reqBody= { name }
            const response = await fetch("http://localhost:3001/skills",{
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(reqBody)
            });

            window.location = "/skills";
        } catch (error) {
            console.error(error.message)
        }
    };

    return(
        <>
        {/* <form onSubmit={addSkill}>
            <label htmlFor="addSkillInput">Add Skill</label>
            <input
            id="addSkillInput"
            type="text"
            onChange={e => setName(e.target.value)}
            />
            <button
            disabled={name.length === 0 }
            >Save</button>
        </form> */}

        <TextField id="ediSkillName" 
                label="Skill Name" 
                variant="outlined" 
                fullWidth
                value={name}
                onChange={e => setName(e.target.value)}
            />

        <Button
            variant="contained"
                sx={{ mr: 1 }}
                onClick={addSkill}
        >Save</Button>
    </>
    )
}

export default AddSkill;