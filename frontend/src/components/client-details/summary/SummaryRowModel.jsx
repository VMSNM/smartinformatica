import React from 'react'
import { Percent, USDollar, USDollar2Dig } from '../../../utils/useful'
import { BodyText, BodyTextTitle, CustomTableRow } from '../../../styles/main'
import { Stack, TableCell } from '@mui/material'
import { Colors } from '../../../styles/theme'
import { red } from '@mui/material/colors'

const SummaryRowModel = ({icon = null, title, value1, type = null}) => {
    return (
    <CustomTableRow>
        <TableCell variant='body1' sx={{textAlign:'left'}}>
            <Stack direction={'row'} gap={.5} alignItems={'center'}>
                {icon}
                <BodyTextTitle variant='body1'>
                    {title}
                </BodyTextTitle>
            </Stack>
        </TableCell>
        <TableCell sx={{textAlign:'right'}}>
            <Stack 
                direction={'row'} 
                gap={.5} 
                justifyContent={'flex-end'} 
                alignItems={'center'}
            >
                <BodyText 
                    variant='body1' 
                    sx={{
                        color: value1 > 0 ? Colors.primary : '',
                        fontWeight: value1 > 0 ? 'bold !important' : '',
                    }}
                >
                    {type !== 'money' ? value1 : USDollar2Dig.format(value1)}
                </BodyText>
            </Stack>
        </TableCell>
    </CustomTableRow>
    )
}

export default SummaryRowModel