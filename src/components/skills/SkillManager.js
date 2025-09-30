import { useEffect, useState } from 'react';
import { Typography, Box } from '@mui/material';


import AddSkill from './AddSkill.js';
import ListSkills from './ListSkills.js';

const SkillManager = () => {
    const [skills, setSkills] = useState([])
    const [refreshFlag, setRefreshFlag] = useState(false)
    
    const getSkills = async() => {
        try {
            const response = await fetch("http://localhost:3001/skills"); 
            const jsonData = await response.json();
            
            setSkills(jsonData);
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
            getSkills();
        }, [refreshFlag]);

    
    return(
        <>
            <Typography variant="h4" mb={4}>Derby Skills</Typography>
            <Box><AddSkill onSkillUpdate={() => setRefreshFlag(!refreshFlag)}/></Box>
            <ListSkills skills={skills} onSkillUpdate={() => setRefreshFlag(!refreshFlag)}/>
        </>
    )
}

export default SkillManager;