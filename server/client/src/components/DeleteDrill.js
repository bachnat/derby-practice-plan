////////// NOT USED YET
///////// NEED TO FIGURE OUT HOW TO REFRESH DRILL LIST FROM HERE - LINE 14

import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';

const DeleteDrill = ({drill}) => {
    const deleteDrill = async id => {
        try {
            const deleteReq = await fetch(`http://localhost:5000/drills/${id}`,{
                method: "DELETE"
            });
            
            // setDrills(drills.filter(drill => drill.drill_id !== id)); 
            ///show me all the todos that are not the id we just deleted
                ///is there a better way to do this? just rerender the list whenever it changes? also so the "adddrill" guy doesn't need to refresh the page
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        getDrills();
    }, []);

    return(
        <>
            <Button
                variant="outlined"
                onClick={() => deleteDrill(drill.drill_id)}
            >Delete</Button>
        </>
    )
}

export default DeleteDrill;