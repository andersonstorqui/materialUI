import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ModalConfirm from './ModalConfirm';
import { useState } from "react"

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export const CardCustomer = ({
    id,
    nome,
    sobrenome,
    email,
    avatar,
    handleRemoverCustomer,
    onEditCustomer,
}) => {

    const [openModal, setOpenModal] = useState(false)

    const handleToggleModal = () => {
        setOpenModal(!openModal)
    }

    const handleConfirmModal = (id) => {
        handleRemoverCustomer(id)
    }

    const handleRemoverCadastro = (id) => {
        handleToggleModal()
    }

    const handleEditCadastro = id => {
        onEditCustomer(id)
    }

    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src={avatar}>
                            R
                        </Avatar>
                    }

                    title={`${nome} ${sobrenome}`}
                    subheader={email}
                />


                <CardActions disableSpacing>
                    <IconButton aria-label="Editar cadastrado" onClick={() => handleEditCadastro(id)} >
                        <EditIcon />
                    </IconButton>
                    <IconButton aria-label="Deletar cadastro" onClick={() => handleRemoverCadastro()} >
                        <DeleteIcon />
                    </IconButton>

                </CardActions>

            </Card>
            <ModalConfirm
                open={openModal}
                onClose={handleToggleModal}
                onConfirm={() => handleConfirmModal(id)}
                title="Deseja realmente excluir esse cadastro"
                message="Ao confirmar não será possível reverter esta operação"
            />
        </>
    );
}
