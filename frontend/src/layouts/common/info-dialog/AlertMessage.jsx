import { Divider, Stack } from '@mui/material'
import React from 'react'
import { BodyText, BodyTextTitle } from '../../../styles/main';
import CircleIcon from '@mui/icons-material/Circle';
import { Colors } from '../../../styles/theme';
import { ModalBoxLarge } from '../../../styles/modal';

const AlertMessage = (props) => {
          
    const { msg, limitations } = props;

    return (
        <ModalBoxLarge>
            <Stack mb={1}>
                <BodyTextTitle variant='subtitle1'>Demo Account Limitations</BodyTextTitle>
                <Divider />
            </Stack>

            <BodyText variant='body1' sx={{textAlign:'justify'}} mb={1}>{msg}</BodyText>
            { limitations?.map((limitation, idx) => (
                <Stack direction={'row'} gap={1} key={idx} alignItems={'center'} mt={.5}>
                    <CircleIcon sx={{fontSize:'12px', color: Colors.secondary}} />
                    <BodyText variant='body2' sx={{textAlign:'justify'}}>{limitation}</BodyText>
                </Stack>
            ))}
        </ModalBoxLarge>
    )
}

export default AlertMessage;