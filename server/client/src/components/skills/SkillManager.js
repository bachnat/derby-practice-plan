import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';


import AddSkill from './AddSkill.js';
import ListSkills from './ListSkills.js';

const SkillManager = () => {
    return(
        <>
            <Typography variant="h4" mb={4}>Derby Skills</Typography>
            <AddSkill/>
            <ListSkills/>
        </>
    )
}

export default SkillManager;