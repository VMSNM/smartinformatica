import { Stack } from '@mui/material'
import React from 'react'
import { BodyText } from '../../../styles/main'
import { Colors } from '../../../styles/theme'
import { USDollar2Dig } from '../../../utils/useful'
import { PagesHeaderTotalsContainer } from '../../../styles/main/pages-header-actions'

const HeaderTotals = ({value1, value2 = null, type = ''}) => {
  return (
    <PagesHeaderTotalsContainer>
        <Stack direction={'row'} gap={1} alignItems={'center'} justifyContent={'flex-end'}>
            <BodyText sx={{fontSize:'22px !important', color: `${Colors.primary} !important`}}> {value1} </BodyText>
            <BodyText>active {type}</BodyText>
        </Stack>
        { value2 && (
            <Stack direction={'row'} gap={1} alignItems={'center'}>
                <BodyText sx={{fontSize:'22px !important', color: `${Colors.primary} !important`}}> {USDollar2Dig.format(value2)} </BodyText>
                <BodyText>in active {type}</BodyText>
            </Stack>
        )}
    </PagesHeaderTotalsContainer>
  )
}

export default HeaderTotals