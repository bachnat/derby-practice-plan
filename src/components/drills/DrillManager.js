import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import AddEditDrill from "./AddEditDrill.js";
import ListDrills from './ListDrills.js';

const DrillManager = () => {
    const [drills, setDrills] = useState([])
    const [refreshFlag, setRefreshFlag] = useState(false)

    const getDrills = async() => {
        try {
            const response = await fetch("http://localhost:5000/drills"); 
            const jsonData = await response.json();

            setDrills(jsonData);
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        getDrills();
    }, [refreshFlag]);

    return(
        <>
        <Typography variant="h4" mb={4}>Drill Library</Typography>
        <Box>
            <AddEditDrill showInModal={true} onDrillUpdate={() => setRefreshFlag(!refreshFlag)}/>
        </Box>
        <ListDrills drills={drills} requestRefresh={() => setRefreshFlag(!refreshFlag)}></ListDrills>
        </>
    )
}

export default DrillManager;