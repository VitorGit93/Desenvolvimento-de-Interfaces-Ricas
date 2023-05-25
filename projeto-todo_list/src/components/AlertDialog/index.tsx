import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { useState } from "react";

type AlertDialogProps = {
    open: boolean;
}


export function AlertDialog({open}: AlertDialogProps) {

    const [isOpen, setIsOpen] = useState(open);

    return (
    <>
    
        <Dialog open={isOpen}>

            <DialogTitle>Confirmar exclusão?</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Deseja realmente excluir este registro?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button>Sim</Button>
                <Button onClick={() => setIsOpen(false)}>Cancelar</Button>
            </DialogActions>

        </Dialog>
    </>
    )
}