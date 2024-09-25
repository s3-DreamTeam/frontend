import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme } from "@mui/material/styles";
import { blue } from '@mui/material/colors';

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