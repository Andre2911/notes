import {Card, CardActionArea, CardContent, Chip, styled, Typography} from "@mui/material";
import {FC} from "react";

type MuiCardProps = {
    onClick: () => void;
    title: string;
    content: string;
    category: string | undefined,
}

const CardWrapper = styled(Card)({
    width: "100%",
    margin: "10px 0",
    overflow: "hidden",
    position: "relative",
})


export const MuiCard: FC<MuiCardProps>=({title, content,onClick, category})=> {
    return (
        <CardWrapper>
            <CardActionArea onClick={onClick}>
            <CardContent sx={{
                display: 'flex',
                flexDirection: 'column',
                height: "300px",

                overflow: 'hidden',
                paddingBottom: '40px', // Para dejar espacio para el Chip
            }}>
                <Typography
                    variant={"h5"}
                    sx={{
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        marginBottom: '10px',
                }}>{title}
                </Typography>
                <Typography variant={"body2"} sx={{
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 9,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    marginBottom: '10px',
                }}>{content}</Typography>

            </CardContent>
            </CardActionArea>
            <Chip  label={category}
                   sx={{
                position: 'absolute',
                bottom: '10px',
                left: '18px',
            }}  />
            {/*<Typography variant={"caption"} sx={{*/}
            {/*    position: 'absolute',*/}
            {/*    bottom: '10px',*/}
            {/*    right: '10px',*/}
            {/*}}>Created at: 2021-10-10</Typography>*/}
        </CardWrapper>
    )
}

export default MuiCard;