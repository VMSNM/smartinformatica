import { FormContainer, FormInputText, FormSubmitButton } from "../styles/main";
import {  Box } from '@mui/material';
import { useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import useLogin from '../hooks/auth/useLogin';
import { Colors } from "../styles/theme";
import AuthFormTitle from "../components/auth/AuthFormTitle";
import AuthFormPassword from "../components/auth/AuthFormPassword";
import AuthFormLink from "../components/auth/AuthFormLink";

const Login = () => {
    const { loading, login } = useLogin()
    const [formData, setFormData] = useState({ username: '', password: '' });

    const handleFormData = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value})
    }

    const handleLogin = async () => await login(formData);

    return (
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} height={'100vh'}>
            <FormContainer>
                <AuthFormTitle title='Login' />

                <FormInputText required type="text" label="Username" name="username" value={formData.username} onChange={handleFormData} />

                <AuthFormPassword formData={formData} handleFormData={handleFormData} />

                <FormSubmitButton disabled={loading} onClick={handleLogin}>
                    { loading ? <CircularProgress sx={{color: Colors.white}} /> : 'Login' }
                </FormSubmitButton>

                <AuthFormLink txt1={'Dont have an account?'} txt2={'Sign up'} link={'/login'} />
            </FormContainer>
        </Box>
    )
}

export default Login;