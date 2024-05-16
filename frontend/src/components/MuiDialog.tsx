import {Dialog, Slide} from "@mui/material";
import {TransitionProps} from "@mui/material/transitions";
import React, {FC} from "react";

type MuiDialogWrapperProps = {
    open: boolean;
    handleClose: () => void;
    children: React.ReactNode;
    fullScreen?: boolean;
}

export const MuiDialogWrapper: FC<MuiDialogWrapperProps> = ({open, handleClose,fullScreen = false,  children}) => {
    return (
        <Dialog
            open={open}
            maxWidth={"sm"}
            TransitionComponent={Transition}
            keepMounted
            fullScreen={fullScreen}
            fullWidth={true}
            onClose={handleClose}>
            {children}
        </Dialog>
    )
}

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="down" ref={ref} {...props} />;
});