import { Button, CircularProgress, Stack } from '@mui/material'
import React from 'react'
import { Colors } from '../../../styles/theme'
import { red } from '@mui/material/colors'
import { BodyText } from '../../../styles/main'

const ActionButtons = ({callbackFn1, callbackFn2, loading}) => {
  return (
    <Stack direction={'row'} width={'100%'} justifyContent={'center'} gap={2}>
        <Button 
            disabled={loading}
            variant='contained' 
            sx={{backgroundColor: red[800]}}
            onClick={callbackFn1}
        >
            {loading ? <CircularProgress size="1.5rem" /> : <BodyText variant='body2'>Delete</BodyText> }
        </Button>

        <Button 
            disabled={loading}
            variant='contained' 
            sx={{backgroundColor: Colors.secondary}}
            onClick={callbackFn2}
        >
            {loading ? <CircularProgress size="1.5rem" /> : <BodyText variant='body2'>Cancel</BodyText> }
        </Button>
    </Stack>
  )
}

export default ActionButtons