import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          color: 'black',
          fontWeight: 500,
          backgroundColor: 'lightGreen',
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
          backgroundColor: 'gray',
        },
        bar: {
          backgroundColor: '#1FDF64',
        },
      },
    },
  },
});

export default theme;
