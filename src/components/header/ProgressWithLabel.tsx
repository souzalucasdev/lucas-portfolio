import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface CircularProgressWithLabelProps {
  value: number;
  label: string;
}

const ProgressWithLabel: React.FC<CircularProgressWithLabelProps> = ({
  value,
  label,
}) => {
  return (
    <div className='flex flex-col p-4'>
      <Box position='relative' display='inline-flex'>
        <CircularProgress
          variant='determinate'
          value={value}
          sx={{
            color: '#1FDF64',
            strokeLinecap: 'round',
          }}
          size={80}
        />
        <Box
          top={0}
          left={0}
          right={0}
          bottom={0}
          position='absolute'
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
          <Typography
            variant='caption'
            component='div'
            color='white'
            sx={{ fontSize: '20px' }}
          >
            {`${Math.round(value)}%`}
          </Typography>
        </Box>
      </Box>
      <p className='text-center mt-2 text-sm text-white'>{label}</p>
    </div>
  );
};

export default ProgressWithLabel;
