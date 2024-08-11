import { Box, styled } from '@mui/material'
import React from 'react'
import { BodyText } from '../../../styles/main'
import { Colors } from '../../../styles/theme'
import ActionButtons from './ActionButtons'
import { red } from '@mui/material/colors'
import { ModalConfirmationQuestion } from '../../../styles/modal'

const ConfirmationQuestion = (props) => {
          
    const { question = '', alert, extraAlert = null, callbackFn1, callbackFn2, loading } = props;

    return (
        <ModalConfirmationQuestion>
            <BodyText>{question}</BodyText>
            { extraAlert && (
                <AlertBox alert={alert}>
                    <BodyText variant='caption'>{extraAlert}</BodyText>
                </AlertBox>
            )}
            <ActionButtons callbackFn1={callbackFn1} callbackFn2={callbackFn2} loading={loading} />
        </ModalConfirmationQuestion>
    )
}

export default ConfirmationQuestion;

const AlertBox = styled(Box)(({ theme, alert = '' }) => (
    {
        border: alert === 'danger' ? `1px solid ${red[900]}` : alert === 'warning' ? `1px solid ${Colors.warning}` : '',
        padding: '10px',
        marginBottom: '40px',
        marginTop: '20px',
        borderRadius: '5px',
        color: alert === 'danger' ? red[800] : alert === 'warning' ? Colors.warning : '',
        backgroundColor: theme.palette.mode === 'dark' ? Colors.primaryBGdark : Colors.primaryBG
    }
));