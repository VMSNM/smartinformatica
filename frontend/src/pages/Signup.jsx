import { FormContainer, FormInputText, FormSubmitButton } from "../styles/main";
import {  Box, CircularProgress, Stack } from '@mui/material';
import { useState } from "react";
import useSignup from '../hooks/auth/useSignup';
import AuthFormTitle from "../components/auth/AuthFormTitle";
import AuthFormPassword from "../components/auth/AuthFormPassword";
import AuthFormLink from "../components/auth/AuthFormLink";
import { Colors } from "chart.js";

const Signup = () => {
    const [formData, setFormData] = useState({ name: '', username: '', email: '', password: '' });

    const { loading, signup } = useSignup();

    const handleFormData = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value})
    }

    const handleSignup = async () => {
        await signup(formData);
    }

    return (
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} height={'100vh'}>
            <FormContainer>
                <AuthFormTitle title='Signup' />

                <Stack direction={'row'} gap={2}>
                    <FormInputText required type="text" label="Full name" name="name" value={formData.name} onChange={handleFormData} />
                    <FormInputText required type="text" label="Username" name="username" value={formData.username} onChange={handleFormData} />
                </Stack>

                <FormInputText required type="email" label="Email" name="email" value={formData.email} onChange={handleFormData} />

                <AuthFormPassword formData={formData} handleFormData={handleFormData} />

                <FormSubmitButton disabled={loading} onClick={handleSignup}>
                    { loading ? <CircularProgress sx={{color: Colors.white}} /> : 'Signup' }
                </FormSubmitButton>

                <AuthFormLink txt1={'Already have an account?'} txt2={'Login'} link={'/login'} />
            </FormContainer>
        </Box>
    )
}

export default Signup;