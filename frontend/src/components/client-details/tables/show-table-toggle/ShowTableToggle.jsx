import { IconButton, Stack } from '@mui/material';
import React from 'react';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { Colors } from '../../../../styles/theme';
import { BodyTextTitle } from '../../../../styles/main';

const ShowTableToggle = ({tableTitle = '', showTable, setShowTable}) => {

  return (
    <Stack direction={'row'} alignItems={'center'} mb={2}>
        <IconButton onClick={() => setShowTable(!showTable)}>
            { !showTable &&  <ChevronRightRoundedIcon sx={StyledArrow} /> }
            { showTable &&  <KeyboardArrowDownRoundedIcon sx={StyledArrow} /> }
        </IconButton>
        <BodyTextTitle variant='h3' wantedColor={Colors.primary}>{tableTitle}</BodyTextTitle>
    </Stack>
  )
}

export default ShowTableToggle;

const StyledArrow = {
  color: Colors.primary, 
  fontSize:'30px',
  transition: '.7s all',
  ':hover': {
    color: Colors.secondary
  }
}