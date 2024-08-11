import { Stack } from '@mui/material'
import React, { useState } from 'react'
import { FormInputText, FormShowPasswordIcon } from '../../styles/main';
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";

const AuthFormPassword = ({formData, handleFormData}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Stack direction={'row'} position={'relative'} width={'100%'}>
        <FormInputText required type={ showPassword ? 'text' : 'password' } label="Password" name="password" value={formData.password} onChange={handleFormData} />
        <FormShowPasswordIcon>
            {showPassword ? <VisibilityOff onClick={() => setShowPassword(false)} /> : <Visibility onClick={() => setShowPassword(true)} />}  
        </FormShowPasswordIcon>
    </Stack>
  )
}

export default AuthFormPassword