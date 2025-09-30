
import { useState } from 'react';
import { TextField, Button, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AddSkill = ({onSkillUpdate}) => {
    const [name, setName] = useState("")

    const navigate = useNavigate();

    const addSkill = async e => {
        e.preventDefault();
        
        try {
            const reqBody= { name }
            const response = await fetch("http://localhost:3001/skills",{
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(reqBody)
            });

            navigate('/skills');
            setName('');
            onSkillUpdate('add or edit');
        } catch (error) {
            console.error(error.message)
        }
    };

    return(
        <>
        <Typography variant="h5" mb={2}>Add Skill</Typography>

        <Stack spacing={2} sx={{ width: 1/4, maxWidth: 'sm' }}>
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
        </Stack>
    </>
    )
}

export default AddSkill;