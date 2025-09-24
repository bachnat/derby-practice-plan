import React from 'react';
import { TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Button } from '@mui/material';

const ListPractices = ({practices, onPracticeUpdate}) => {
    const deletePractice = async id => {
        try {
            const deleteReq = await fetch(`http://localhost:3001/practices/${id}`,{
                method: "DELETE"
            });
            
            onPracticeUpdate('delete');
        } catch (error) {
            console.error(error.message);
        }
    };

    return(
            <TableContainer>
                <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Skill Level</TableCell>
                        <TableCell>Leader</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {practices.map(practice =>
                    <TableRow key={practice.practice_id}>
                        <TableCell>{practice.practice_name}</TableCell>
                        <TableCell>{practice.practice_date}</TableCell>
                        <TableCell>{practice.skill_level}</TableCell>
                        <TableCell>{practice.leader}</TableCell>
                        <TableCell>
                        <Button
                            variant="outlined"
                            onClick={() => deletePractice(practice.practice_id)}
                        >Delete</Button>
                        </TableCell>
                    </TableRow>
                    )}      
                </TableBody>
            </Table>
            </TableContainer>
    )
}

export default ListPractices;