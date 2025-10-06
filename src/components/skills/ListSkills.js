import { TableContainer, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import Button from '@mui/material/Button';

// import EditSkill from './EditSkill.js';

const ListSkills = ({skills, onSkillUpdate}) => {

    const deleteSkill = async id => {
        try {
            const deleteReq = await fetch(`/api/skills/${id}`,{
                method: "DELETE"
            });
            
            onSkillUpdate('delete skill');
        } catch (error) {
            console.error(error.message);
        }
    };

    return(
        <>
        <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    {/* <TableCell>Edit</TableCell> */}
                    <TableCell>Delete</TableCell>                    
                </TableRow>
            </TableHead>
            <TableBody>
                {skills.map(skill =>
                <TableRow key={skill.skill_id}>
                    <TableCell>{skill.name}</TableCell>
                    {/* <TableCell>Edit</TableCell> */}
                    <TableCell>
                        <Button
                            variant="outlined"
                            onClick={() => deleteSkill(skill.skill_id)}
                        >Delete</Button>
                    </TableCell>
                </TableRow>
                )}             
            </TableBody>
        </Table>
        </TableContainer>
        </>
    )
}

export default ListSkills;