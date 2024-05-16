import {Box, Button, Grid, IconButton, Tooltip, Typography} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import MuiCard from "../../components/MuiCard.tsx";
import {useAuth} from "../../contexts/useAuth.ts";
import {FC, useEffect, useState} from "react";
import DialogAdd from "./DialogAdd.tsx";
import AddIcon from "@mui/icons-material/Add";
import {getNotesbyCategory} from "../../service/NotesService.ts";
import {Category, Note} from "../../types/types.ts";
import { useThemeContext } from '../../theme/useTheme.ts';


type NotesProps = {
    id: number;
    setId: (value: number) => void;
    checked: number[];
    categories: Category[];
}

export const Notes: FC<NotesProps> = ({id, setId, checked, categories}) => {

    const { setThemeName } = useThemeContext();
    const [ notes, setNotes ] = useState<Note[]>([]);
    const [ openAdd, setOpenAdd ] = useState<boolean>(false);

    const { logout } = useAuth();




    const handleCreate = () => {
        setId(0)
        setOpenAdd(true)
    }

    const hanldelAddClose = () => {
        setOpenAdd(false)
    }

    const handleEditNote = (item: number | null) => () => {
        if (item !== null) {
            setOpenAdd(true)
            setId(item)
        }
    }
    const fetchNotes = () => {
        setId(0)
        getNotesbyCategory(checked).then(r => {
            setNotes(r)
        }).catch((error) => {
            console.log('Error fetching notes' + error.message)
        })
    }

    useEffect(() => {
        fetchNotes()
    },[checked])

    const handleThemeChange = (theme: string) => {
        setThemeName(theme);
    };

    const unarchived = notes.filter((element)=> element.status==="UNARCHIVED");
    const archived = notes.filter((element)=> element.status==="ARCHIVED");
    return(
        <>
        <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} mb={2}>
            <Typography
                variant={'h3'}
            >
                Notes
            </Typography>
            <Box>
                <Tooltip title="Light Theme" arrow>
                    <IconButton
                        onClick={() => handleThemeChange('LightTheme')}
                    >
                        <Box sx={{ width: 24, height: 24, borderRadius: '50%', backgroundColor: 'white' }} />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Dark Theme" arrow>
                    <IconButton
                        onClick={() => handleThemeChange('DarkTheme')}
                    >
                        <Box sx={{ width: 24, height: 24, borderRadius: '50%', backgroundColor: 'black' }} />
                    </IconButton>
                </Tooltip>
                <Tooltip title={'Logout'} arrow={true}>
                    <IconButton onClick={logout}>
                        <LogoutIcon/>
                    </IconButton>
                </Tooltip>
            </Box>
        </Box>
    <Grid container spacing={2}>
        {unarchived.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                <MuiCard
                    key={item.id}
                    onClick={handleEditNote(item.id)}
                    title={item.title}
                    content={item.content}
                    category={item.category?.name}
                />
            </Grid>
        ))
        }
    </Grid>

    {archived.length > 0 && (
        <>
            <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} my={2}>
                <Typography
                    variant={'h5'}
                >
                    Archived
                </Typography>

            </Box>
            <Grid container spacing={2}>
                {archived.map((item) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                        <MuiCard
                            key={item.id}
                            onClick={handleEditNote(item.id)}
                            title={item.title}
                            content={item.content}
                            category={item.category?.name}
                        />
                    </Grid>
                ))
                }
            </Grid>
        </>
    )}
            <DialogAdd open={openAdd} handleClose={hanldelAddClose} id={id} categories={categories} onAddCategory={fetchNotes}/>
            <Box
                sx={{
                    position: 'fixed',
                    bottom: 16,
                    right: 16,

                }}
            >
                <Button
                    variant={'contained'}
                    color={'primary'}
                    onClick={handleCreate}
                    size={'large'}
                    startIcon={<AddIcon/>}>
                    Add Note
                </Button>

            </Box>
        </>
    )
}