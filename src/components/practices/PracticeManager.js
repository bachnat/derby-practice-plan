import React, { useEffect, useState } from 'react';
import { Typography, Paper, Button, Link } from '@mui/material';
import ListPractices from './ListPractices';
import AddEditPractice from './AddEditPractice';
import { Link as RouterLink } from 'react-router-dom';

const PracticeManager = () => {
    const [practices, setPractices] = useState([])
    const [refreshFlag, setRefreshFlag] = useState(false)

    const getPractices = async() => {
        try {
            const response = await fetch("http://localhost:3001/practices"); 
            const jsonData = await response.json();

            setPractices(jsonData);
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        getPractices();
    }, [refreshFlag]);

    return(
        <>
            <Typography variant="h4" mb={4}>Practice Plans</Typography>
            <AddEditPractice showInModal onPracticeUpdate={() => setRefreshFlag(!refreshFlag)} />
            <ListPractices practices={practices} onPracticeUpdate={() => setRefreshFlag(!refreshFlag)}/>
        </>
    )
}

export default PracticeManager;