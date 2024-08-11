import React from 'react'
import { BodyTextTitle } from '../../styles/main'
import { Divider, Stack } from '@mui/material'
import { Colors } from '../../styles/theme'

const LayoutTitle = ({icon = null, title, titleSpan}) => {
  return (
    <>
    <Stack direction={'row'} alignItems={'center'} gap={1}>
      { icon && icon }
      <BodyTextTitle variant='h3'>
        {title} <span style={{color: Colors.primary}}>{titleSpan}</span>
      </BodyTextTitle>
    </Stack>
    <Divider sx={{marginTop: '10px', marginBottom: '20px'}}/>
    </>
  )
}

export default LayoutTitle