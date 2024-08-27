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
            const response = await fetch("http://localhost:5000/practices"); 
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
            <Button
                component={RouterLink}
                variant="contained"
                to="/createpractice"
            >Create practice</Button>

            {/* <AddEditPractice showInModal /> */}
            <ListPractices practices={practices} />
        </>
    )
}

export default PracticeManager;