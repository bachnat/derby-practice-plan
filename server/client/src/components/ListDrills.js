import React, { useEffect, useState } from 'react';

import { TableContainer, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { Typography, Paper, Button } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { OpenInFull } from '@mui/icons-material';

import DrillDetail from './DrillDetail.js';

const ListDrills = () => {
    const [drills, setDrills] = useState([])
    const [selectedDrill, selectDrill] = useState(null)

    const getDrills = async() => {
        try {
            const response = await fetch("http://localhost:5000/drills"); //this is a GET by default 
            const jsonData = await response.json();

            setDrills(jsonData);
        } catch (error) {
            console.error(error.message);
        }
    }

    const toggleDrill = async drill => {
        try {
            selectDrill(drill);  
            
            // if (selectedDrill && (drill.drill_id === selectedDrill.drill_id)){
            //     selectDrill(null);  
            // }
            // else {
            //     selectDrill(drill);  
            // }          
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        getDrills();
    }, []);

    return(
    <>
        <Typography variant="h2">All Drills</Typography>
        <Grid container component={Paper} spacing={4}>
            <Grid xs={selectedDrill ? 7 : 12}>
                <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Skills Practiced</TableCell>
                            <TableCell>Duration (minutes)</TableCell>
                            <TableCell>View Details</TableCell>               
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {drills.map(drill =>
                        <TableRow key={drill.drill_id}>
                            <TableCell>{drill.name}</TableCell>
                            <TableCell></TableCell>
                            <TableCell>{drill.duration}</TableCell>
                            <TableCell>
                            <Button
                            variant="text"
                            onClick={() => toggleDrill(drill)}
                            ><OpenInFull/></Button>
                                </TableCell>
                        </TableRow>
                        )}             
                    </TableBody>
                </Table>
                </TableContainer>
            </Grid>
            {selectedDrill && 
            <Grid xs={5} sx={{ padding: 4 }}>
                <DrillDetail drill={selectedDrill}></DrillDetail>
            </Grid>
            }
        </Grid>

    </>
    )
}

export default ListDrills;