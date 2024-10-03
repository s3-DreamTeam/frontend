import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme } from "@mui/material/styles";
import { blue } from '@mui/material/colors';
import { outlinedInputClasses } from '@mui/material';

/**
 * # GetMUIAppTheme
 * This function returns the redefined material design theme used for
 * this application. It's used to create custom variants of Material Design
 * components to ensure the style corresponds to our mockup.
 *
 * @export
 * @return {*} 
 */
export default function GetMUIAppTheme() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  return createTheme({
    palette: {
      mode: prefersDarkMode ? 'dark' : 'light',
    },
    typography: {
      fontFamily: 'M PLUS Rounded 1c',
      allVariants: {
        fontFamily: 'M PLUS Rounded 1c',
      },
    },
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: 'var(--TextField-brandBorderColor)',
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'var(--TextField-brandBorderHoverColor)',
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            '&::before, &::after': {
              outline: '0px solid',
              border: '0px solid',
              strokeLinecap: 'round'
            },
            '&:hover:not(.Mui-disabled, .Mui-error):before': {
              outline: '0px solid',
              border: '0px solid',
              strokeLinecap: 'round',
            },
            '&.Mui-focused:after': {
              borderBottom: '1px solid',
              margin: '0 0.75rem 0 0.75rem',
              strokeLinecap: 'round'
            },
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            '&::before': {
              borderBottom: '0px solid var(--TextField-brandBorderColor)',
            },
            '&:hover:not(.Mui-disabled, .Mui-error):before': {
              borderBottom: '0px solid var(--TextField-brandBorderHoverColor)',
            },
            '&.Mui-focused:after': {
              borderBottom: '0px solid var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            opacity: 1,
          },
        },
      },
      MuiCircularProgress: {
        styleOverrides: {
          circle: {
            strokeLinecap: 'round',
          },
        },
      },
      MuiButton: {
        variants: [
          {
            props: (props) =>
              props.variant === 'dashed' && props.color !== 'secondary',
            style: {
              border: `2rem dashed ${blue[100]}`,
              fontSize: 100,
            },
          },
        ],
      },
    },
  });
}