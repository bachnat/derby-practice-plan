import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

import { Link as RouterLink} from 'react-router-dom';

const MainNav = () => {
    const drawerWidth = 200;

return(
    <Drawer
        sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box'
        },
        zIndex: 0
        }}
        variant="permanent"
        anchor="left"
    >
        <List disablePadding>
            <ListItem disablePadding>
                <ListItemButton component={RouterLink} to="/">
                    <ListItemText primary="Practice Plans" />
                </ListItemButton>
            </ListItem>
            
            <ListItem disablePadding>
                <ListItemButton component={RouterLink} to="/drills">
                    <ListItemText  primary="Drill Library" />
                </ListItemButton>
            </ListItem>

        <ListItem disablePadding>
            <ListItemButton component={RouterLink} to="/skills">
                <ListItemText primary="Derby Skills" />
            </ListItemButton>
        </ListItem>
        </List>
    </Drawer>
    )
}

export default MainNav; 