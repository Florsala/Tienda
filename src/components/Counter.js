import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const Counter = ({substract, initial, onAdd}) => {
    return (
        <div>
            <Box sx={{ display: "inline-flex" }} m={3}>
        <Button variant="outlined" size="x-small" className="button" onClick={substract}>
         
          -
        </Button>

        <Typography m={1}>cantidad de pasajeros: {initial}</Typography>
        <Button variant="outlined" size="small" className="button" onClick={onAdd}>
          +
        </Button>
      </Box>

      

      
        </div>
    )
}

export default Counter
