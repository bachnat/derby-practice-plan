import React, { useEffect, useState } from 'react';

import { Container, Paper } from '@mui/material';
import { TableContainer, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import Button from '@mui/material/Button';

import AddSkill from './AddSkill.js';

// import EditSkill from './EditSkill.js';

const ListSkills = () => {
    const [skills, setSkills] = useState([])

    const getSkills = async() => {
        try {
            const response = await fetch("http://localhost:5000/skills"); //this is a GET by default 
            const jsonData = await response.json();
            
            setSkills(jsonData);
        } catch (error) {
            console.error(error.message);
        }
    }

    const deleteSkill = async id => {
        try {
            const deleteReq = await fetch(`http://localhost:5000/skills/${id}`,{
                method: "DELETE"
            });
            
            setSkills(skills.filter(skill => skill.skill_id !== id)); ///show me all the todos that are not the id we just deleted
                ///is there a better way to do this? just rerender the list whenever it changes? also so the "addskill" guy doesn't need to refresh the page
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        getSkills();
    }, []);

    return(
        <Container>
        <h2>All Skills</h2>
        <AddSkill/>
        <TableContainer
        component={Paper}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Edit</TableCell>
                    <TableCell>Delete</TableCell>                    
                </TableRow>
            </TableHead>
            <TableBody>
                {skills.map(skill =>
                <TableRow key={skill.skill_id}>
                    <TableCell>{skill.name}</TableCell>
                    <TableCell>Edit</TableCell>
                    <TableCell>
                        <Button
                            variant="outlined"
                            onClick={() => deleteSkill(skill.skill_id)}
                        >Delete</Button>
                        {/* why isn't this its own component? */}
                    </TableCell>
                </TableRow>
                )}             
            </TableBody>
        </Table>
        </TableContainer>
        </Container>
    )
}

export default ListSkills;