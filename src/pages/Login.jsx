import { TextField, Typography, Button, Box } from "@mui/material"
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAuth } from "../state/auth";
import { Div } from "./LoginStyles"
import { useHistory } from "react-router-dom"
import { useState } from "react"

export const Login = () => {

    const [user, setUser] = useAuth()
    const history = useHistory()
    const [isLoading, setIsLoading] = useState(false)

    const schema = yup.object().shape({
        email: yup.string().required("Campo obrigatório"),
        password: yup.string().required("Campo obrigatório")

    })



    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })

    const handleFormSubmit = data => {
        setIsLoading(true)
        setTimeout(() => {
            const response = true


            setUser({
                logged: response,
                email: data.email
            })

            history.push("/")

            setIsLoading(false)
        }, 4000)
    }


    return (
        <Div>
            <Typography variant="h3">Acesso Restrito</Typography>
            <Box component="form" onSubmit={(handleSubmit(handleFormSubmit))}>
                <TextField
                    {...register("email")}
                    label="Digite o seu email"
                    variant="standard"
                    fullWidth
                    sx={{ m: 1 }}
                    helperText={errors.email?.message} error={!!errors.email?.message}
                />
                <TextField
                    {...register('password')}
                    label="Digite sua senha"
                    variant="standard"
                    fullWidth
                    sx={{ m: 1 }}
                    type="password"
                    helperText={errors.password?.message} error={!!errors.password?.message}

                />
                <Button type="submit" variant="contained" color="primary" sx={{ m: 2 }} >
                    {
                        isLoading ? "Loading" : "Entrar"
                    }
                </Button>

            </Box>
        </Div >
    )
}