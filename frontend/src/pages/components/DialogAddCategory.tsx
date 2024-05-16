import {MuiDialogWrapper} from "../../components/MuiDialog.tsx";
import {FC, useEffect, useState} from "react";
import {Button, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from "@mui/material";
import {createCategory} from "../../service/NotesService.ts";

type DialogAddCategoryProps = {
    open: boolean;
    handleClose: () => void;
    onAddCategory: () => void;
}

export const DialogAddCategory: FC<DialogAddCategoryProps> = ({open, handleClose, onAddCategory}) => {

    const [ category, setCategory ] = useState<string>('');

    const handleCreate = () => {
        createCategory(category).then(() => {
            onAddCategory();
            handleClose();
        }).catch((error) => {
            console.log('Error creating category' + error.message)
            }
        )
    }

    useEffect(() => {
        setCategory('')
    },[open])

    return(
        <MuiDialogWrapper open={open} handleClose={handleClose}>
            <DialogTitle id="form-dialog-title">
                Add Category
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Add Category content goes here
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Category Name"
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    fullWidth/>
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={handleClose}
                    color="secondary">
                    Cancel
                </Button>
                <Button
                    onClick={handleCreate}
                    color="primary">
                    Add
                </Button>
            </DialogActions>
        </MuiDialogWrapper>
    )
}