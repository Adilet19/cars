import React, { useState } from 'react'
import { Box, FormControl, TextField, Button, Typography} from "@mui/material"
import axios from 'axios';

const Register = () => {

    const [isSubcribed, setSubcribeStatus] = useState(false)



    const handleSubmit = event => {
        event.preventDefault();
        const {userEmail, userName} = event.target;
        axios(`/api/addToList?userEmail=${userEmail.value}&userName=${userName.value}`)
        .then(resp => setSubcribeStatus(true))
        .catch(err => console.error(err))
    }

  return <Box mt={5} sx={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
    {!isSubcribed ?(
    <FormControl sx={{ width:{sx: '90%', md: 600}}} onSubmit={handleSubmit} component={"form"}>
        <Typography variant='h2' component={"h2"}>Регистрация</Typography>
        <TextField sx={{marginTop: {sx: 2, md: 3}}} id='userName' label= 'Your Name' variant='outlined' />
        <TextField sx={{marginTop: {sx: 2, md: 3}}} id='userEmail' label= 'Your Email' variant='outlined' />
        <Button type={"submit"} sx={{marginTop: {sx: 3, md: 5}}} variant='contained'>Submit</Button> 
        </FormControl> 
        ):<Typography variant='h2' component={"h2"}>Регистрация прошла успешно</Typography>
        }
  </Box>
        
}

export default Register