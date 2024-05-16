import {MuiDialogWrapper} from "../../components/MuiDialog.tsx";
import {FC, useEffect, useState} from "react";
import {
    AppBar,
    Autocomplete,
    Box,
    Button,
    DialogActions,
    IconButton,
    TextField,
    Toolbar,
    Typography
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import {createNote, deleteNote, getNote} from "../../service/NotesService.ts";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import {Category, Note} from "../../types/types.ts";


type DialogAddProps = {
    open: boolean;
    handleClose: () => void;
    id: number | null;
    categories: Category[];
    onAddCategory: () => void;
}


export const DialogAdd: FC<DialogAddProps> = ({open, handleClose, id, categories, onAddCategory}) => {

    const [data, setData] = useState<Note>({
        id: null,
        title: '',
        content: '',
        category: null,
        createdAt: new Date().toISOString(),
        status: "UNARCHIVED"
    });

    useEffect(() => {

        if (id!==0 && id!==null){
            getNote(id).then((response)=> {
                setData(response);
            }).catch(()=> console.log("Error getting note"))
        }else{
            setData({
                id: null,
                title: '',
                content: '',
                category: null,
                createdAt: new Date().toISOString(),
                status: "UNARCHIVED"
            })
        }
    },[open])


    const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetchNote("");

    }
    const fetchNote = (archived: string) => {
        const newStatus = id === 0
            ? "UNARCHIVED"
            : archived === "ARCHIVED"
                ? data.status === "ARCHIVED"
                    ? "UNARCHIVED"
                    : "ARCHIVED"
                : data.status;
        const dataForm: Note = {
            id: id===0 ? null : id,
            createdAt: new Date().toISOString(),
            title: data.title,
            content: data.content,
            category: data.category,
            status: newStatus};

        createNote(dataForm).then(()=> {
            onAddCategory();
            handleClose();
        }).catch(()=> console.log("Error creating note"))
    }

    const handleDelete = () => {
        if(id !== null) {
            deleteNote(id).then(() => {
                onAddCategory();
                handleClose();
            }).catch(() => console.log("Error deleting note"))
        }
    }


    return (
        <MuiDialogWrapper open={open} handleClose={handleClose} fullScreen={true}>
            <AppBar sx={{position: 'relative'}}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleClose}
                        aria-label="close"
                    >
                        <CloseIcon/>
                    </IconButton>
                    <Typography sx={{ml: 2, flex: 1}} variant="h6" component="div">
                        {id ? "Update Note" : 'Add Note'}
                    </Typography>
                    {id !== 0 && (
                        <>
                            <Button
                                autoFocus
                                onClick={handleDelete}
                                color={'error'}
                                startIcon={<DeleteOutlineIcon/>}
                            >
                                Delete
                            </Button>
                            <Button
                                autoFocus
                                color="inherit"
                                onClick={()=>fetchNote("ARCHIVED")}
                                startIcon={<ArchiveOutlinedIcon/>}
                            >
                                {data.status === "ARCHIVED" ? "Unarchive" : "Archive"}
                            </Button>
                        </>
                )}
                </Toolbar>
            </AppBar>
            <form onSubmit={handleSave} id={'form-id'}>
                <Box m={4} gap={2}>

                    <Autocomplete
                        renderInput={(params) => <TextField {...params} required label={'Category'}
                                                            variant={'filled'}/>}
                        options={categories}
                        getOptionLabel={(option) => option.name}
                        value={data.category}
                        onChange={(_, value) => setData({...data, category: value})}
                        isOptionEqualToValue={(option, value) => option.id === value.id}
                    />

                    <TextField
                        margin="dense"
                        required
                        label="Title Note"
                        value={data.title}
                        onChange={(e) => setData({...data, title: e.target.value})}
                        type="text"
                        variant={'filled'}
                        fullWidth/>
                    <TextField
                        autoFocus
                        margin="dense"
                        multiline={true}
                        required
                        rows={18}
                        value={data.content}
                        onChange={(e) => setData({...data, content: e.target.value})}
                        label="Content"
                        type="text"
                        variant={'filled'}
                        fullWidth/>
                    <DialogActions>
                        <Button
                            onClick={handleClose}
                            variant={'contained'}
                            color="secondary">
                            Cancel
                        </Button>
                        <Button autoFocus color="primary" variant={'contained'}  type={'submit'}>
                            {id ? "Update": 'Save'}
                        </Button>
                    </DialogActions>
        </Box>
            </form>
        </MuiDialogWrapper>
    )
}

export default DialogAdd;