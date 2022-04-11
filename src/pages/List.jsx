import { useState, useEffect } from "react"
import axios from "axios"
import Paper from '@mui/material/Paper';

import Grid from '@mui/material/Grid';

import { CardCustomer } from "../components/CardCustomer"


export const CustomerList = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get("https://reqres.in/api/users").then((res) => {
            setUsers([...res.data.data])
        })
    }, [])


    const handleRemoverCustomer = (id) => {
        axios.delete(`https://reqres.in/api/users/${id}`)
            .then(() => {
                const newCustomers = users.filter(user => user.id !== id)
                setUsers(newCustomers)
            })


    }



    return (
        <Grid container spacing={6}>
            {
                users.map((item, index) => {
                    return (
                        <Grid item xs={12} sm={6} md={6} >
                            <Paper>
                                <CardCustomer key={index} nome={item.first_name} sobrenome={item.last_name} email={item.email} avatar={item.avatar} handleRemoverCustomer={handleRemoverCustomer} id={item.id} />
                            </Paper>
                        </Grid>
                    )
                })
            }
        </Grid>

    )

}