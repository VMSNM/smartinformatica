import React from 'react'
import { LoadingBox } from '../../styles/main'
import { CircularProgress } from '@mui/material'

const LoadingElements = () => {
  return (
    <LoadingBox>
        <CircularProgress />
    </LoadingBox>
  )
}

export default LoadingElements