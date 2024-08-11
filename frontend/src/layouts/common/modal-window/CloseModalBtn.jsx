import { IconButton } from '@mui/material';
import React from 'react';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import { Colors } from '../../../styles/theme';

const CloseModalBtn = ({handleClose}) => {
  return (
    <IconButton
        sx={StyledCloseBtn}
        onClick={handleClose}
    >
        <HighlightOffRoundedIcon />
    </IconButton>
  )
}

export default CloseModalBtn;

const StyledCloseBtn = {
  position:'absolute', 
  top: '10px', 
  right: '10px', 
  transition: '.7s all',
  ':hover': { color: Colors.secondary }
}