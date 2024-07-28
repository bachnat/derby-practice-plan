import React, { useEffect, useState } from 'react';

import AddEditDrill from "./AddEditDrill.js";
import ListDrills from './ListDrills.js';

const DrillsManager = () => {
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
        <AddEditDrill showInModal={true} onDrillUpdate={() => setRefreshFlag(!refreshFlag)}></AddEditDrill>
        <ListDrills drills={drills} requestRefresh={() => setRefreshFlag(!refreshFlag)}></ListDrills>
        </>
    )
}

export default DrillsManager;