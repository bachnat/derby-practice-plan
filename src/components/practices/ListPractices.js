import React, { useEffect, useState } from 'react';
import { TableContainer, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const ListPractices = ({practices}) => {
    return(
            <TableContainer>
                <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Skill Level</TableCell>
                        <TableCell>Leader</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {practices.map(practice =>
                    <TableRow key={practice.pratice_id}>
                        <TableCell>{practice.practice_name}</TableCell>
                        <TableCell>{practice.practice_date}</TableCell>
                        <TableCell>{practice.skill_level}</TableCell>
                        <TableCell>{practice.leader}</TableCell>
                    </TableRow>
                    )}      
                </TableBody>
            </Table>
            </TableContainer>
    )
}

export default ListPractices;