import { 
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Badge
} from "@mui/material";
import {
    LightMode as LightModeIcon,
    DarkMode as DarkModeIcon,
} from "@mui/icons-material";
import { useApp } from "./AppProvider";

export default function Header(){
    const { mode, setMode } = useApp();

    return <AppBar position="static">
                <Toolbar>
                    <Typography sx={{flexGrow : 1}}>
                        Todo</Typography>
                    {mode === "dark"? 
                    <IconButton color="inherit"
                    onClick={()=>setMode("light")}>
                        <LightModeIcon />
                    </IconButton> : 
                    <IconButton color="inherit"
                    onClick={()=>setMode("dark")}>
                        <DarkModeIcon />
                    </IconButton>}
                </Toolbar>
            </AppBar>
}