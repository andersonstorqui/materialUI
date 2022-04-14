import { TextField, Button, Box } from "@mui/material"
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import { Toast } from "../components/Toast"
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom"
import { NearbyError } from "@mui/icons-material";


export const CustomerRegisterEdit = () => {

    const [openToast, setOpenToast] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [user, setUser] = useState({})

    const { id } = useParams()
    useEffect(() => {
        axios.get(`https://reqres.in/api/users/${id}`).then((response) => {
            const { data } = response.data
            setUser(data)
        })
    }, [])

    // console.log(user.first_name)

    const schema = yup.object().shape({
        name: yup.string().required("Campo obrigatório"),
        job: yup.string().required("Campo obrigatório")
    })


    const buttonRender = () => {
        setIsLoading(true)
    }

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })

    const handleAlterar = data => axios.put("https://reqres.in/api/users", data).then((res) => {
        setOpenToast(true)
        setTimeout(() => { setOpenToast(false) }, 3000)
        setIsLoading(false)

    })


    return (
        <Box onSubmit={handleSubmit(handleAlterar)} component="form">
            <TextField {...register('name')} fullWidth label="Digite seu nome" variant="standard" helperText={errors.name?.message} error={!!errors.name?.message} />
            <TextField {...register('job')} fullWidth label="Digite seu cargo" variant="standard" helperText={errors.job?.message} error={!!errors.job?.message} />
            <Button sx={{ mt: 3 }} type="submit" variant="contained" margin="normal" onClick={() => buttonRender()} >{isLoading ? "Loading" : "Alterar"}</Button>

            <Toast open={openToast} severity="success" text="Cadastro alterado com sucesso" />
        </Box>
    )
}

