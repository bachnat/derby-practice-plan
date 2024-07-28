import React, { useEffect, useState } from 'react';

import { TableContainer, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { Typography, Paper, Button } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { OpenInFull, Close } from '@mui/icons-material';

import DrillDetail from './DrillDetail.js';

const ListDrills = ({drills, requestRefresh}) => {
    const [selectedDrill, selectDrill] = useState(null)

    const toggleDrill = async drill => {
        try {
            selectDrill(drill);  
            
            if (selectedDrill && (drill.drill_id === selectedDrill.drill_id)){
                selectDrill(null);  
            }
            else {
                selectDrill(drill);  
            }          
        } catch (error) {
            console.error(error.message);
        }
    }

    return(
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
            <Grid xs={5} sx={{ padding: '1.2rem 58px', position:'relative' }}>
                <DrillDetail
                    drill={selectedDrill}
                    closeDrillDetail={() => selectDrill(null)}
                    onDrillUpdate={requestRefresh}
                ></DrillDetail>
            </Grid>
            }
        </Grid>
    )
}

export default ListDrills;