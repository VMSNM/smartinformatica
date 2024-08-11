import { Stack } from '@mui/material'
import React from 'react'
import { MainAppbarMobileTitle, MainAppbarTitle } from '../../../../styles/root-layout/mainappbar'
import { Colors } from '../../../../styles/theme'
import { Link } from 'react-router-dom'

const AppNameLogo = () => {
  return (
    <Link to={'/'} title="Smart Market">
        <Stack direction={'row'} alignItems={'center'}>
            <MainAppbarTitle>smart<span style={{color: Colors.primary}}>informática</span></MainAppbarTitle>
            <MainAppbarMobileTitle>s<span style={{color: Colors.primary}}>i</span></MainAppbarMobileTitle>
        </Stack>
    </Link>
  )
}

export default AppNameLogo;