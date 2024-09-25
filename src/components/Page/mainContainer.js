import { styled } from "@mui/material";

/**
 * # Main
 * Main is the container that contains the elements of your
 * page. It's wacky like this because it needs to dynamically
 * move out the way when the navigation drawer opens and
 * closes. Unfortunately, this is the only way to acheive
 * such thing found so far.
 * 
 * Drawer sizes are predefined to 240 and it seems to work
 * so far.
 * 
 * ## Warning
 * You must always have a `<Toolbar \> as the first
 * component in your Main, to offset the contents by a
 * top bar's full height to avoid rendering stuff below
 * the top bar.
 */
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: 0,
        variants: [
            {
                props: ({ open }) => open,
                style: {
                    transition: theme.transitions.create('margin', {
                        easing: theme.transitions.easing.easeOut,
                        duration: theme.transitions.duration.enteringScreen,
                    }),
                    marginLeft: 240,
                },
            },
        ],
    }),
);

export default Main;