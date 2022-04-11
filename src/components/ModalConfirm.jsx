import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function ModalConfirm({ open, title, message, onConfirm, id, onClose }) {



    return (
        <>
            <Dialog
                open={open}
                onClose={onClose}
                aria-labelledby="dialog-title"
            >
                <DialogTitle style={{ cursor: 'move' }} id="dialog-title">
                    {title}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {message}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={onClose}>
                        Cancelar
                    </Button>
                    <Button onClick={() => onConfirm(id)}>Confirmar</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
