import { TextField, Button, Box } from "@mui/material"
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import Toast from "../components/Toast"
import { useState } from "react";

export const CustomerRegister = () => {

    const [openToast, setOpenToast] = useState({
        msgSuccess: {
            mensagem: true,
            text: "Cadastro realizado com sucesso",
        }
        , msgNegativy: {
            mensagem: false,
            text: "Ops... algo de errado não está certo!"
        }
    })



    const schema = yup.object().shape({
        name: yup.string().required("Campo obrigatório"),
        job: yup.string().required("Campo obrigatório")
    })

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })

    const handleLogin = data => axios.post("https://reqres.in/api/users", data).then((res) => {
        if (res.status === 201) {
            setOpenToast(openToast.msgSuccess.mensagem = true)
        } else if (res.status === 404) {
            setOpenToast(openToast.msgNegativy.mensagem = false)
        }
    })

    return (
        <Box onSubmit={handleSubmit(handleLogin)} component="form">
            <TextField {...register('name')} fullWidth label="Digite seu nome" variant="standard" helperText={errors.name?.message} error={!!errors.name?.message} />
            <TextField {...register('job')} fullWidth label="Digite seu cargo" variant="standard" helperText={errors.job?.message} error={!!errors.job?.message} />
            <Button sx={{ mt: 3 }} type="submit" variant="contained" margin="normal" >Cadastrar</Button>
            <Toast open={openToast} severity text>
        </Box>
    )
}

