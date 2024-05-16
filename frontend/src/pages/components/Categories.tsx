import {
    Button,
    Checkbox,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import {FC, useState} from "react";
import DialogDelete from "./DialogDelete.tsx";
import {DialogAddCategory} from "./DialogAddCategory.tsx";
import {Category} from "../../types/types.ts";


type CategoriesProps = {
    categories: Category[];
    fetchCategories: () => void;
    checked: number[];
    setChecked: (value: number[]) => void;
    id: number;
    setId: (value: number) => void;
}
export const Categories: FC<CategoriesProps> = ({categories, fetchCategories, checked, setChecked, id, setId}) => {

    const [ openDelete, setOpenDelete ] = useState<boolean>(false);
    const [ open, setOpen ] = useState<boolean>(false);

    const handleToggle = (value: number) => () => {
        if (checked.includes(0) && value !== 0){
            setChecked([value]);
            return;
        }else if(value === 0){
            setChecked([0]);
            return;
        }
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };
    const handleDelete = (id: number) => {
        setId(id)
        setOpenDelete(true)
    }
    const handleAddCategory = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    const handleDeleteClose = () => {
        setOpenDelete(false)
    }

    return (
        <>
        <Typography variant={'h5'} mt={3}>
            Categories
        </Typography>

    <List>
        <ListItem disablePadding={true}>
            <ListItemButton  onClick={handleToggle(0)} dense>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={checked.indexOf(0) !== -1}
                        tabIndex={-1}
                        disableRipple
                    />
                </ListItemIcon>
                <ListItemText primary={`All`} />
            </ListItemButton>
        </ListItem>
        {categories.map((item) => (
            <ListItem
                disablePadding
                key={item.id}
                secondaryAction={
                    <IconButton edge={'end'}  onClick={()=>handleDelete(item.id)}>
                        <DeleteOutlineIcon/>
                    </IconButton>
                }>
                <ListItemButton  onClick={handleToggle(item.id)} dense>
                    <ListItemIcon>
                        <Checkbox
                            edge="start"
                            checked={checked.indexOf(item.id) !== -1}
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ 'aria-labelledby': "checkbox"+item.id }}
                        />
                    </ListItemIcon>
                    <ListItemText id={"checkbox"+item.id} primary={`${item.name}`} />
                </ListItemButton>
            </ListItem>
        ))
        }
    </List>
    <Button
        variant={'contained'}
        color={'primary'}
        fullWidth
        onClick={handleAddCategory}
    >
        Add Category
    </Button>
            <DialogAddCategory open={open} handleClose={handleClose} onAddCategory={fetchCategories}/>
            <DialogDelete open={openDelete} handleClose={handleDeleteClose}  id={id} onAddCategory={fetchCategories}/>
        </>
)
}