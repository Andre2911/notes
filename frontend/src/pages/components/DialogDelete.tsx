import {MuiDialogWrapper} from "../../components/MuiDialog.tsx";
import {FC} from "react";
import {Button, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import {deleteCategory} from "../../service/NotesService.ts";

type DialogDeleteProps = {
    open: boolean;
    handleClose: () => void;
    id: number;
    onAddCategory: () => void;
}

export const DialogDelete: FC<DialogDeleteProps> = ({open, handleClose, id, onAddCategory}) => {

    const handleDelete = () => {
        deleteCategory(id).then(()=> {
            onAddCategory();
            handleClose();
        })
        .catch(()=> console.log("Error deleting category"))
    }
    return(
        <MuiDialogWrapper open={open} handleClose={handleClose}>
            <DialogTitle id="form-dialog-title">
                Delete Category
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Are you sure you want to delete this category?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={handleClose}
                    color="secondary">
                    Cancel
                </Button>
                <Button
                    onClick={handleDelete}
                    color="primary">
                    Delete
                </Button>
            </DialogActions>
        </MuiDialogWrapper>
    )
}

export default DialogDelete;