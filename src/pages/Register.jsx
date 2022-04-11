import { TextField, Button, Box } from "@mui/material"
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


export const CustomerRegister = () => {

    const schema = yup.object().shape({
        name: yup.string().required("Campo obrigatório"),
        job: yup.string().required("Campo obrigatório")
    })

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })

    const handleLogin = data => console.log(data)


    return (
        <Box onSubmit={handleSubmit(handleLogin)} component="form">
            <TextField {...register('name')} fullWidth label="Digite seu nome" variant="standard" helperText={errors.name?.message} error={!!errors.name?.message} />
            <TextField {...register('job')} fullWidth label="Digite seu cargo" variant="standard" helperText={errors.job?.message} error={!!errors.job?.message} />
            <Button variant="contained">Cadastrar</Button>

        </Box>
    )
}

