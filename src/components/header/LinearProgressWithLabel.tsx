import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface LinearProgressWithLabelProps {
  value: number;
}

const LinearProgressWithLabel: React.FC<LinearProgressWithLabelProps> = ({
  value,
}) => {
  return (
    <Box position='relative' display='inline-flex' width='100%' component='div'>
      <LinearProgress variant='determinate' value={value} sx={{ height: 10 }} />
      <Box
        position='absolute'
        top={0}
        left='50%'
        sx={{ transform: 'translateX(-50%)' }}
        display='flex'
        justifyContent='center'
        alignItems='center'
        width='100%'
        zIndex={1}
        component='div'
      >
        <Typography variant='caption' color='textSecondary'>
          {`${Math.round(value)}%`}
        </Typography>
      </Box>
    </Box>
  );
};

export default LinearProgressWithLabel;
