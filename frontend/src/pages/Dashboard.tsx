import {
    Box,
    Grid, styled,
} from "@mui/material";
import {useEffect, useState} from "react";
import {getAllCategories} from "../service/NotesService.ts";
import {Categories} from "./components/Categories.tsx";
import {Notes} from "./components/Notes.tsx";
import {Category} from "../types/types.ts";


const BoxWrapper = styled(Box)(
    ({theme}) => ({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 36,
        backgroundColor: theme.palette.background.default
    })
)


export default function Dashboard(){

    const [checked, setChecked] = useState([0]);
    const [ categories, setCategories ] = useState<Category[]>([]);
    const [ id, setId ] = useState<number>(0);


    const fetchCategories = () => {
        getAllCategories().then(r => {
            setCategories(r)
        }).catch((error) => {
            console.log('Error fetching categories' + error.message)
        })
    }

    useEffect(() => {
        fetchCategories()
    },[])


    return (
        <BoxWrapper>
            <Grid container spacing={2} display={'flex'} flexDirection={'row'}>
                <Grid item lg={2} sm={12}>
                    <Categories
                        categories={categories}
                        fetchCategories={fetchCategories}
                        id={id}
                        setId={setId}
                        checked={checked}
                        setChecked={setChecked}/>
                </Grid>
                <Grid item lg={10} sm={12}>
                   <Notes
                        id={id}
                        setId={setId}
                        checked={checked}
                        categories={categories}/>
                </Grid>
            </Grid>
        </BoxWrapper>
    )
}